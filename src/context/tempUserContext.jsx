import { createContext, useState } from "react";
import { userList } from "../utils/users";

const TempUserContext = createContext();

const TempUserProvider = ({ children }) => {
  const [tempUsers, setTempUsers] = useState(userList);

  var payload = { tempUsers, setTempUsers };

  return (
    <TempUserContext.Provider value={payload}>
      {children}
    </TempUserContext.Provider>
  );
};

export { TempUserContext, TempUserProvider };
