import React, { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const DeleteButton = (props) => {
  const { users, setUsers } = useContext(UserContext);

  const [haveDeletedUser, setHaveDeletedUser] = useState(false);

  const deleteUser = (targetValue) => {
    var temp = users.map((value) => {
      if (value.id === targetValue) {
        value.isDeleted = true;
      }
      return value;
    });

    !haveDeletedUser ? setHaveDeletedUser(true) : setHaveDeletedUser(false);

    setUsers(temp);
  };

  if (!props.value.isDeleted) {
    return (
      <Tooltip
        title="Delete"
        type="button"
        id="delete"
        color="error"
        margin="0px"
        padding="0px"
        onClick={() => {
          deleteUser(props.value.id);
        }}
      >
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    );
  } else {
    return <></>;
  }
};

export default DeleteButton;
