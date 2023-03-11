import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Includes/Nav";
import Foods from "./Components/Screens/Foods";
import Login from "./Components/Screens/Login";
import Signup from "./Components/Screens/Signup";
import SingleFood from "./Components/Screens/SingleFood";

function App() {
  return (
    // <div className="App">
    //   <Foods />
    // </div>
    <Router>
      <Nav />
      <Routes>
        {/* <Route exact path="/" element={<Login />} /> */}

        <Route exact path="/home" element={<Foods />} />
        <Route exact path="/description/:id" element={<SingleFood />} />
        <Route path="/auth/login/" exact element={<Login />} />
        <Route path="/auth/register/" exact element={<Signup />} />
        {/* <Route exact path="*" element={<NoMatch />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
