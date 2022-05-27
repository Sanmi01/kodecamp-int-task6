import { Route, Routes, Navigate } from "react-router";
import "./App.css";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CoursesPage from "./pages/CoursesPage";
import SingleCourse from "./pages/SingleCourse";
import Profile from "./pages/Profile";
import PrivateRoute from "./component/PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="App d-flex vh-100 justify-content-between row">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          ></Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
