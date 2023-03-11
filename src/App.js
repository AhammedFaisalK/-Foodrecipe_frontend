import { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Nav from "./Components/Includes/Nav";
import Foods from "./Components/Screens/Foods";
import Login from "./Components/Screens/Login";
import Signup from "./Components/Screens/Signup";
import SingleFood from "./Components/Screens/SingleFood";

export const UserContext = createContext();
function App() {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  const updateUserData = (action) => {
    switch (action.type) {
      case "LOGOUT":
        setUserData(null);
        localStorage.clear();
        break;
      case "LOGIN":
        setUserData(action.payload);
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("user_data")));
    setLoading(false);
  }, []);
  return loading ? (
    <h1>loading</h1>
  ) : (
    <>
      <UserContext.Provider value={{ userData, updateUserData }}>
        <Router>
          <Nav />
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/auth/login/" element={<Login />} />}
            />
            <Route exact path="/home" element={<Foods />} />
            <Route exact path="/description/:id" element={<SingleFood />} />
            <Route path="/auth/login/" exact element={<Login />} />
            <Route path="/auth/register/" exact element={<Signup />} />
            {/* <Route exact path="*" element={<NoMatch />} /> */}
          </Routes>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
