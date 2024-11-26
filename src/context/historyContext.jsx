import { createContext, useState } from "react";

const HistoryContext = createContext();

const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  var payload = { history, setHistory };

  return (
    <HistoryContext.Provider value={payload}>
      {children}
    </HistoryContext.Provider>
  );
};

export { HistoryContext, HistoryProvider };
