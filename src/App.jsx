import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import Login from "./components/Login/Login.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import MealDetail from "./components/MealDetail/MealDetail.jsx";
import Cart from "./components/Cart/Cart.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/meal/:id" element={<MealDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/terms"
          element={<div className="terms-page">Terms & Conditions Page</div>}
        />
        <Route
          path="/privacy"
          element={<div className="privacy-page">Privacy Policy Page</div>}
        />
      </Routes>
    </Router>
  );
}

export default App;
