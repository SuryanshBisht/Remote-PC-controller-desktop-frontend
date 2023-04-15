import Menu from "./components/menu.js";
import Remote from "./components/remote.js";
import Login from "./components/login.js";
import "./App.css";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="App">
        <Menu />
        <Routes>
          <Route path="/remote" element={<Remote />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
