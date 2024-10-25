import "./App.css";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Portal from "./components/Portal";

function App() {
  return (
    <div className="flex-col flex justify-center">
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Portal />} />
      </Routes>
    </div>
  );
}

export default App;
