import React, { useState } from "react";
import Editing from "./Editing";
import DeleteButton from "./DeleteButton";

export default function Profile(props) {
  const [showEdit, setShowEdit] = useState(false);
  return (
    <ul type="none" className="profile-cards">
      <li>
        <h3>{props.value.firstName + " " + props.value.lastName}</h3>
      </li>
      <li>
        <img
          src={props.value.profileImageUrl}
          alt={
            props.value.firstName +
            " " +
            props.value.lastName +
            "'s Profile Picture"
          }
        />
      </li>
      <li>Email : {props.value.email}</li>
      <li>Phone : {props.value.phone}</li>
      <li>DOB : {props.value.dob}</li>
      <li>Age : {props.calculateAge(props.value.dob)}</li>
      <li>Address : {props.value.address}</li>
      <li>
        <button
          type="button"
          id="edit"
          value={props.value.firstName + " " + props.value.lastName}
          onClick={(e) => {
            props.addToHistory(e.target.value);
            setShowEdit(true);
          }}
        >
          Edit
        </button>
      </li>
      <li>
        <DeleteButton deleteUser={props.deleteUser} value={props.value} />
      </li>
      <li>
        <Editing
          editUser={props.editUser}
          value={props.value}
          showEdit={showEdit}
          setShowEdit={setShowEdit}
        />
      </li>
    </ul>
  );
}
