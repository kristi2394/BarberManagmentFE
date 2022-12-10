import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import "./App.css";
import Login from "./pages/logIn/LogIn";
import { AuthApi } from "./libs/ApiServices/AuthApi";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route element={<Login />} path="/" />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
