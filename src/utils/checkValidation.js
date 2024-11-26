import { validDate, validateEmail, isUrlValid } from "./validation";

const checkValidation = (
  firstName,
  lastName,
  email,
  phone,
  dob,
  profileImageUrl,
  address
) => {
  if (
    firstName.length <= 0 ||
    lastName.length <= 0 ||
    !validateEmail(email) ||
    phone.length !== 12 ||
    !isUrlValid(profileImageUrl) ||
    address.length <= 0 ||
    !validDate(dob)
  ) {
    return false;
  }
  return true;
};

export default checkValidation;
