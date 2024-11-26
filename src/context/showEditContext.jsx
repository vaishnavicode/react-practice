import { createContext, useState } from "react";

const ShowEditContext = createContext();

const ShowEditProvider = ({ children }) => {
  const [showEdit, setShowEdit] = useState(false);

  var payload = { showEdit, setShowEdit };

  return (
    <ShowEditContext.Provider value={payload}>
      {children}
    </ShowEditContext.Provider>
  );
};

export { ShowEditContext, ShowEditProvider };
