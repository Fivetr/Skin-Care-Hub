import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import HomePage from "./pages/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <Router>
      <ToastContainer position="top-left" autoClose={4000} theme="colored" />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;
