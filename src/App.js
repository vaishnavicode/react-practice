import "./css/App.css";
import AppRoute from "./routes";
import { UserProvider } from "./context/userContext";
import { TempUserProvider } from "./context/tempUserContext";
import { HistoryProvider } from "./context/historyContext";
import { ShowEditProvider } from "./context/showEditContext";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  const theme = createTheme();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <ShowEditProvider>
            <HistoryProvider>
              <TempUserProvider>
                <UserProvider>
                  <AppRoute />
                </UserProvider>
              </TempUserProvider>
            </HistoryProvider>
          </ShowEditProvider>
        </LocalizationProvider>{" "}
      </ThemeProvider>
    </div>
  );
}

export default App;
