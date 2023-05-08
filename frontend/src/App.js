import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import HomeScreen from "./screens/HomeScreen";
import ProtectedRoute from "./routing/ProtectedRoute";
import AddQuestion from "./screens/addQuestion";
import Dashboard from "./screens/dashboard";
import ForgotPasswordScreen from "./screens/ForgotPassword";
import ResetPassword from "./screens/ResetPassword";
import UpdatePasswordScreen from "./screens/UpdatePasswordScreen";
import UpdateProfileScreen from "./screens/UpdateProfileScreen";
import QuestionDetails from "./screens/QuestionDetails";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <main className="container content">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/forgotpassword" element={<ForgotPasswordScreen />} />
          <Route path="/resetpassword/:token" element={<ResetPassword />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/user-profile" element={<ProfileScreen />} />
            <Route path="/updatePassword" element={<UpdatePasswordScreen />} />
            <Route path="/updateProfile" element={<UpdateProfileScreen />} />
            <Route path="/addQuestions" element={<AddQuestion />} />
            <Route path="/question/:id" element={<QuestionDetails />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
