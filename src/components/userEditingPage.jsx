import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid2 } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Box } from "@mui/material";
import { validDate, validateEmail, isUrlValid } from "../utils/validation";
import { UserContext } from "../context/userContext";
import dayjs from "dayjs";

const UserEditingPage = (props) => {
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

  const handleClose = () => {
    props.setShowEdit(false);
  };

  const handleInputChange = (field, value) => {
    setNewUser({ ...newUser, [field]: value });
  };

  const editUser = (idGettingEdited) => {
    var temp = users.map((value, index) => {
      if (value.id === idGettingEdited) {
        return {
          id: idGettingEdited,
          firstName:
            newUser.firstName === "" ? value.firstName : newUser.firstName,
          lastName: newUser.lastName === "" ? value.lastName : newUser.lastName,
          email: !validateEmail(newUser.email) ? value.email : newUser.email,
          phone: newUser.phone.length !== 10 ? value.phone : newUser.phone,
          dob: !validDate(newUser.dob) ? value.dob : newUser.dob,
          age: 0,
          profileImageUrl: !isUrlValid(newUser.profileImageUrl)
            ? value.profileImageUrl
            : newUser.profileImageUrl,
          isAdmin: value.isAdmin,
          isDeleted: value.isDeleted,
          address: newUser.address === "" ? value.address : newUser.address,
        };
      } else {
        return value;
      }
    });

    setUsers(temp);
    props.setShowEdit(false);
  };

  return (
    <>
      <Dialog open={props.showEdit} onClose={handleClose}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "55ch" },
            }}
          >
            <Grid2>
              <TextField
                required
                id="outlined-error-helper-text"
                label="First Name"
                name="firstName"
                defaultValue={props.value.firstName}
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
                defaultValue={props.value.lastName}
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
                defaultValue={props.value.email}
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
                defaultValue={props.value.phone}
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
                format="YYYY-MM-DD"
                views={["year", "month", "day"]}
                name="dob"
                value={dayjs(props.value.dob)}
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
                defaultValue={props.value.profileImageUrl}
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
                defaultValue={props.value.address}
                onChange={(e) => {
                  handleInputChange(e.target.name, e.target.value);
                }}
              >
                Address
              </TextField>
            </Grid2>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            type="button"
            onClick={() => {
              editUser(props.value.id);
              handleClose();
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default UserEditingPage;
