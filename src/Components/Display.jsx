import React from "react";
import { useState } from "react";
import Profile from "./Profile";

const Display = (props) => {
  const users = props.users;

  const [search, setSearchItem] = useState("");
  const [userArray, setUserArray] = useState(users);
  const [sortBy, setSortBy] = useState("age");
  const [reversed, setReversed] = useState(false);

  const calculateAge = (dob) => {
    dob = new Date(dob.split("-"));
    var today = new Date();

    return today.getFullYear() - dob.getFullYear();
  };

  const searchFor = (searchItem) => {
    if (searchItem !== "") {
      return users.filter((value) =>
        String(
          value.firstName +
            " " +
            value.lastName +
            " " +
            value.email +
            calculateAge(value.dob)
        )
          .toLowerCase()
          .includes(searchItem.toLowerCase())
      );
    } else {
      return users;
    }
  };

  const deletedUsers = (value) => {
    if (value) {
      return users.filter((value) => value.isDeleted);
    } else {
      return users;
    }
  };

  const adminUsers = (value) => {
    if (value) {
      return users.filter((value) => value.isAdmin);
    } else {
      return users;
    }
  };

  const adminAndDeletedUsers = (value) => {
    if (value) {
      return users.filter((value) => value.isAdmin && value.isDeleted);
    } else {
      return users;
    }
  };

  return (
    <React.Fragment>
      <div className="heading">
        <h1>Users</h1>
      </div>
      <div className="search-filter-sort">
        <div className="search">
          <input
            type="text"
            id="search-input"
            value={search}
            onChange={(e) => {
              setSearchItem(e.target.value);
              setUserArray(searchFor(e.target.value));
            }}
            placeholder="Search User"
          />
        </div>
        <div className="filters">
          <h2 className="filters">Filters</h2>
          <label htmlFor="deleted">
            <input
              type="radio"
              id="deleted"
              name="filter"
              value="deleted"
              onChange={(e) => {
                setUserArray(deletedUsers(e.target.checked));
              }}
            />
            Deleted
          </label>
          <br />
          <label htmlFor="admin">
            <input
              type="radio"
              id="admin"
              name="filter"
              value="admin"
              onChange={(e) => {
                setUserArray(adminUsers(e.target.checked));
              }}
            />
            Admin
          </label>
          <br />
          <label htmlFor="deleted-admin">
            <input
              type="radio"
              id="deleted-admin"
              name="filter"
              value="deleted-admin"
              onChange={(e) => {
                setUserArray(adminAndDeletedUsers(e.target.checked));
              }}
            />
            Deleted Admins
          </label>
          <br />
          <label htmlFor="all">
            <input
              type="radio"
              id="all"
              name="filter"
              value="all"
              onChange={(e) => {
                setUserArray(users);
              }}
            />
            No Filters
          </label>
          <br />
        </div>
        <div className="sort">
          <h2 className="sort">Sorting</h2>
          <div className="sorting">
            <label htmlFor="sort">Sort By : </label>
            <select
              name="sort"
              id="sort"
              onChange={(e) => {
                setSortBy(e.target.value);
              }}
              defaultValue="select"
            >
              <option value="select" disabled>
                Select
              </option>
              <option value="age">Age</option>
              <option value="name">Name</option>
            </select>
          </div>
          <div className="reversing">
            <label>
              Reverse :{" "}
              <input
                id="reverse"
                type="checkbox"
                onChange={(e) => {
                  setReversed(e.target.checked);
                }}
              />
            </label>
          </div>
        </div>
      </div>

      <div className="outer-wrap">
        {userArray
          .sort((a, b) => {
            if (sortBy === "age" && reversed) {
              return -(calculateAge(a.dob) - calculateAge(b.dob));
            } else if (sortBy === "name" && reversed) {
              return -(a.firstName + " " + a.lastName).localeCompare(
                b.firstName + " " + b.lastName
              );
            } else if (sortBy === "age") {
              return calculateAge(a.dob) - calculateAge(b.dob);
            } else {
              return (a.firstName + " " + a.lastName).localeCompare(
                b.firstName + " " + b.lastName
              );
            }
          })
          .map((value, index) => {
            return (
              <ul key={index} type="none" className="profiles">
                <Profile
                  value={value}
                  calculateAge={calculateAge}
                  editUser={props.editUser}
                  addToHistory={props.addToHistory}
                  deleteUser={props.deleteUser}
                />
              </ul>
            );
          })}
      </div>
    </React.Fragment>
  );
};

export default Display;
