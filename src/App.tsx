import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import "./App.css";
import Login from "./pages/logIn/LogIn";
import { AuthApi } from "./libs/ApiServices/AuthApi";
import { QueryClient, QueryClientProvider } from "react-query";
import HomePanel from "./pages/homePagePanel/HomePanel";

const client = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={client}>
      <Router>
        <Routes>
          <Route element={<Login />} path="/" />
          <Route element={<HomePanel />} path="/HomePanel" />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
