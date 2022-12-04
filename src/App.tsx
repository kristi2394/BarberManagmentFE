import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./pages/logIn/LogIn";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="/" />
      </Routes>
    </Router>
  );
}

export default App;
