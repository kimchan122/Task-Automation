import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import PrivacyPolicy from "./routes/PrivacyPolicy";
import TermsOfService from "./routes/TermsOfService";
import NotFound from "./routes/NotFound";

function App() {
  return (
    <Router basename="/Task-Automation">
      <div>
        <Link to="/">Home</Link>
        <Link to="/privacypolicy">Privacy Policy</Link>
        <Link to="/termsofservice">Terms of Service</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsofservice" element={<TermsOfService />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
