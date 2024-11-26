import { createContext, useState } from "react";
import { userList } from "../utils/users";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(userList);

  var payload = { users, setUsers };

  return (
    <UserContext.Provider value={payload}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserProvider };
