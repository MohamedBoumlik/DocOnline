import "./App.css";
import AdminAuth from "./pages/backoffice/Login";
import Home from "./pages/frontoffice/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./pages/backoffice/protectedRoute";
import AdminDash from "./pages/backoffice/AdminDash";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* ------------------------ Back_Office ------------------------ */}
          <Route path="/login" element={<AdminAuth />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute role="admin">
                <AdminDash />
              </ProtectedRoute>
            }
          />

          {/* ------------------------ Front_Office ------------------------ */}

          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
