import React, { useContext, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Profile from "../components/profile";
import { UserContext } from "../context/userContext";
import { TempUserContext } from "../context/tempUserContext";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import { Grid2 } from "@mui/material";
import calculateAge from "../utils/calculateAge";
import { Link } from "react-router-dom";
import { IconButton, Drawer } from "@mui/material";

import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../css/stylingFunctions";

export default function UsersDisplay() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };
  // Use Context
  const { users } = useContext(UserContext);
  const { tempUsers, setTempUsers } = useContext(TempUserContext);

  // Use States
  const [search, setSearchItem] = useState("");
  const [sortBy, setSortBy] = useState("age");
  const [reversed, setReversed] = useState(false);
  const [adminShow, setAdminShow] = useState(false);
  const [deletedShow, setDeletedShow] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  // Use Effect
  useEffect(() => {}, [users]);

  // Assignment to variables
  const isMenuOpen = Boolean(anchorEl);

  // Functions

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const sortValues = (a, b) => {
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
  };

  const searchFor = (searchItem) => {
    if (searchItem !== "") {
      return tempUsers.filter((value) =>
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

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        onClick={() => {
          setSortBy("age");
          handleMenuClose();
        }}
      >
        Age
      </MenuItem>
      <MenuItem
        onClick={() => {
          setSortBy("name");
          handleMenuClose();
        }}
      >
        Name
      </MenuItem>
    </Menu>
  );

  useEffect(() => {
    setTempUsers(users);
  }, [users, setTempUsers]);

  useEffect(() => {
    if (adminShow && deletedShow) {
      setTempUsers(users.filter((value) => value.isDeleted && value.isAdmin));
    } else if (deletedShow) {
      setTempUsers(users.filter((value) => value.isDeleted));
    } else if (adminShow) {
      setTempUsers(users.filter((value) => value.isAdmin && !value.isDeleted));
    } else {
      setTempUsers(users.filter((value) => !value.isDeleted));
    }
  }, [adminShow, deletedShow, users, setTempUsers]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search Users"
            type="text"
            id="search-input"
            value={search}
            style={{ width: "450px" }}
            onChange={(e) => {
              setSearchItem(e.target.value);
              setTempUsers(searchFor(e.target.value));
              console.log(search);
            }}
          />
        </Search>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: "black",
                  "&.Mui-checked": {
                    color: "black",
                  },
                }}
                onChange={(e) => {
                  setAdminShow(e.target.checked);
                }}
              />
            }
            label="Admin"
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: "black",
                  "&.Mui-checked": {
                    color: "black",
                  },
                }}
                onChange={(e) => {
                  setDeletedShow(e.target.checked);
                }}
              />
            }
            label="Deleted"
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: "black",
                  "&.Mui-checked": {
                    color: "black",
                  },
                }}
                onChange={(e) => {
                  setReversed(e.target.checked);
                }}
              />
            }
            label="Reversed"
          />

          <Button
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            Sort By {sortBy}
          </Button>
        </Box>
      </Toolbar>
      {renderMenu}
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={handleDrawerToggle}
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
      >
        <Box sx={{ padding: 2 }}>
          <Link to="/" style={{ color: "black", textDecoration: "none" }}>
            <Button color="inherit" fullWidth onClick={handleDrawerToggle}>
              Home
            </Button>
          </Link>
          <Link
            to="/history"
            style={{ color: "black", textDecoration: "none" }}
          >
            <Button color="inherit" fullWidth onClick={handleDrawerToggle}>
              History
            </Button>
          </Link>
          <Link to="/users" style={{ color: "black", textDecoration: "none" }}>
            <Button color="inherit" fullWidth onClick={handleDrawerToggle}>
              Users
            </Button>
          </Link>
          <Link
            to="/adduser"
            style={{ color: "black", textDecoration: "none" }}
          >
            <Button
              variant="outlined"
              color="inherit"
              fullWidth
              onClick={handleDrawerToggle}
            >
              Add User
            </Button>
          </Link>
        </Box>
      </Drawer>
      <Grid2
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        direction="row"
      >
        {tempUsers.length === 0 && (
          <h1 style={{ justifySelf: "center" }}>No Users</h1>
        )}
        {tempUsers.sort(sortValues).map((value, index) => {
          return (
            <Grid2
              item={true}
              xs={2}
              sm={4}
              md={4}
              key={index}
              margin="0px"
              padding="0px"
            >
              <Profile value={value} />
            </Grid2>
          );
        })}
      </Grid2>
    </Box>
  );
}
