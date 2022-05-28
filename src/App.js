import { Route, Routes, Navigate } from "react-router";
import "./App.css";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import CoursesPage from "./pages/CoursesPage";
import SingleCourse from "./pages/SingleCourse";
import Profile from "./pages/Profile";
import PublicRoute from "./component/PublicRoute";
import PrivateRoute from "./component/PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="App d-flex vh-100 justify-content-between row">
        <Routes>
          <Route path="/" element={ <PublicRoute> <Homepage /> </PublicRoute> }></Route>
          <Route path="/login" element={ <PublicRoute> <Login /> </PublicRoute> }></Route>
          <Route path="/register" element={ <PublicRoute> <Register /> </PublicRoute> }></Route>
          <Route path="/forgot-password" element={ <PublicRoute> <ForgotPassword /> </PublicRoute> }></Route>
          <Route path="/profile" element={ <PrivateRoute> <Profile /> </PrivateRoute> }></Route>
          <Route path="/dashboard" element={ <PrivateRoute> <Dashboard /> </PrivateRoute> } ></Route>
          <Route path="/coursePages" element={ <PrivateRoute> <CoursesPage /> </PrivateRoute>} ></Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
