const calculateAge = (dob) => {
  dob = new Date(dob.split("-"));
  var today = new Date();

  return today.getFullYear() - dob.getFullYear();
};

export default calculateAge;
