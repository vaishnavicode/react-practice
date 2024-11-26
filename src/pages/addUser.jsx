import React, { useState, useContext } from "react";
import { UserContext } from "../context/userContext";
import { Navigate, useNavigate } from "react-router-dom";
import { Box, TextField } from "@mui/material";
import { Grid2, Stack } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import Button from "@mui/material/Button";
import checkValidation from "../utils/checkValidation";
import getNewId from "../utils/getNewId";
import Snackbar from "@mui/material/Snackbar";

const AddUser = () => {
  const { users, setUsers } = useContext(UserContext);

  const [newUser, setNewUser] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    age: 0,
    profileImageUrl: "",
    isAdmin: false,
    isDeleted: false,
    address: "",
  });

  const [added, setAdded] = useState(false);

  let navigate = useNavigate();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
  };

  const addUser = () => {
    if (
      checkValidation(
        newUser.firstName,
        newUser.lastName,
        newUser.email,
        newUser.phone,
        newUser.dob,
        newUser.profileImageUrl,
        newUser.address
      )
    ) {
      console.log("New User Added", newUser);
      var newId = getNewId();
      var addUser = { ...newUser, id: newId };

      setUsers([...users, addUser]);
      setAdded(true);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };

  const handleInputChange = (field, value) => {
    setNewUser({ ...newUser, [field]: value });
  };

  return (
    <React.Fragment>
      <Snackbar
        open={added}
        autoHideDuration={6000}
        onClose={handleClose}
        message="User Added"
      />
      <>
        <div style={{ justifySelf: "center", justifyContent: "center" }}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { width: "56ch" },
              "& .css-16wblaj-MuiInputBase-input-MuiOutlinedInput-input": {
                width: "355ch",
              },
            }}
          >
            <Stack container spacing={3}>
              <Grid2>
                <h1 style={{ justifySelf: "center" }}>Add User</h1>
              </Grid2>
              <Grid2>
                <TextField
                  required
                  id="outlined-error-helper-text"
                  label="First Name"
                  name="firstName"
                  onChange={(e) => {
                    handleInputChange(e.target.name, e.target.value);
                  }}
                >
                  First Name
                </TextField>
              </Grid2>
              <Grid2>
                <TextField
                  required
                  id="outlined-error-helper-text"
                  label="Last Name"
                  name="lastName"
                  onChange={(e) => {
                    handleInputChange(e.target.name, e.target.value);
                  }}
                >
                  First Name
                </TextField>
              </Grid2>
              <Grid2>
                <TextField
                  required
                  id="outlined-error-helper-text"
                  label="Email"
                  name="email"
                  onChange={(e) => {
                    handleInputChange(e.target.name, e.target.value);
                  }}
                >
                  Email
                </TextField>
              </Grid2>
              <Grid2>
                <TextField
                  required
                  id="outlined-error-helper-text"
                  label="Phone Number"
                  name="phone"
                  onChange={(e) => {
                    handleInputChange(e.target.name, e.target.value);
                  }}
                >
                  Phone Number
                </TextField>
              </Grid2>
              <Grid2>
                <DatePicker
                  required
                  disableFuture
                  label="Date of Birth"
                  openTo="year"
                  views={["year", "month", "day"]}
                  name="dob"
                  onChange={(value) => {
                    handleInputChange("dob", value.format("YYYY-MM-DD"));
                  }}
                />
              </Grid2>
              <Grid2>
                <TextField
                  required
                  id="outlined-error-helper-text"
                  label="Image Url"
                  name="profileImageUrl"
                  onChange={(e) => {
                    handleInputChange(e.target.name, e.target.value);
                  }}
                >
                  Image Url
                </TextField>
              </Grid2>
              <Grid2>
                <TextField
                  required
                  id="outlined-error-helper-text"
                  label="Address"
                  name="address"
                  onChange={(e) => {
                    handleInputChange(e.target.name, e.target.value);
                  }}
                >
                  Address
                </TextField>
              </Grid2>
              <Button
                variant="contained"
                type="button"
                onClick={(e) => {
                  console.log(newUser);
                  addUser();
                }}
              >
                Add User
              </Button>
              <Button
                variant="text"
                size="small"
                href="/"
                style={{ margin: "0px" }}
              >
                Back To Home
              </Button>
            </Stack>
          </Box>
        </div>
      </>
    </React.Fragment>
  );
};

export default AddUser;
