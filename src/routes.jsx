import { Routes, Route } from "react-router-dom";
import ShowHistory from "./components/showHistory";
import AddUser from "./pages/addUser";
import MainPage from "./pages/mainPage";
import UsersDisplay from "./pages/usersDisplay";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route path="history" element={<ShowHistory />} />
        <Route path="adduser" element={<AddUser />} />
        <Route path="users" element={<UsersDisplay />} />
      </Route>

      <Route path="/*" element={<MainPage />} />
    </Routes>
  );
};

export default AppRoute;
