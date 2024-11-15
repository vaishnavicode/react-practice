import React from "react";

export default function ShowHistory(props) {
  return (
    <ul type="none" className="profile-cards">
      <li>Name : {props.value.firstName + " " + props.value.lastName}</li>
      <li>Email : {props.value.email}</li>
      <li>Phone : {props.value.phone}</li>
      <li>DOB : {props.value.dob}</li>
      <li>Address : {props.value.address}</li>
    </ul>
  );
}
