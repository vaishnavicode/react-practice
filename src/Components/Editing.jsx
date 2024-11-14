import React, { useState } from "react";

const Editing = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dob, setDob] = useState("");
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [address, setAddress] = useState("");

  const refresh = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setDob("");
    setProfileImageUrl("");
    setAddress("");
  };
  if (props.showEdit) {
    return (
      <form>
        <li>
          <label className="editing-label">
            Enter your first name
            <input
              type="text"
              name="firstName"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
        </li>
        <li>
          <label className="editing-label">
            Enter your last name
            <input
              type="text"
              name="lastName"
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
        </li>
        <li>
          <label className="editing-label">
            Enter your email
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </li>
        <li>
          <label className="editing-label">
            Enter your phone number
            <input
              type="text"
              name="phoneNumber"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </label>
        </li>
        <li>
          <label className="editing-label">
            Enter your date of birth
            <input
              type="date"
              name="dob"
              onChange={(e) => setDob(e.target.value)}
            />
          </label>
        </li>
        <li>
          <label className="editing-label">
            Url of your profile picture
            <input
              type="url"
              name="profileImageUrl"
              onChange={(e) => setProfileImageUrl(e.target.value)}
            />
          </label>
        </li>
        <li>
          <label className="editing-label">
            Address
            <input
              type="text"
              name="address"
              maxLength={255}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
        </li>

        <li>
          <button
            type="button"
            value={props.value.firstName + " " + props.value.lastName}
            onClick={(e) => {
              props.editUser(
                e.target.value,
                firstName,
                lastName,
                email,
                phoneNumber,
                dob,
                profileImageUrl,
                address
              );
              refresh();
              props.setShowEdit(false);
            }}
          >
            Save User
          </button>
        </li>
      </form>
    );
  }
};

export default Editing;
