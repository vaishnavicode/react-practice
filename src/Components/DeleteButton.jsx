import React from "react";
const DeleteButton = (props) => {
  if (!props.value.isDeleted) {
    return (
      <button
        type="button"
        id="delete"
        value={props.value.firstName + " " + props.value.lastName}
        onClick={(e) => {
          props.deleteUser(e.target.value);
        }}
      >
        Delete
      </button>
    );
  } else {
    return <></>;
  }
};

export default DeleteButton;
