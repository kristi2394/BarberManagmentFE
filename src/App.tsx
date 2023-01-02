import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import "./App.css";
import Login from "./pages/logIn/LogIn";
import { AuthApi } from "./libs/ApiServices/AuthApi";
import { QueryClient, QueryClientProvider } from "react-query";
import HomePanel from "./pages/homePagePanel/HomePanel";
import AutoLoginComponent from "./libs/LogInServices/AutoLoginComponent";
import SalesPanel from "./pages/selesPanel/SalesPanel";

const client = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={client}>
      <Router>
        <AutoLoginComponent />
        <Routes>
          <Route element={<Login />} path="/" />
          <Route element={<HomePanel />} path="/HomePanel" />
          <Route element={<SalesPanel />} path="/SalesPanel" />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
