import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-green-300 to-blue-500">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
