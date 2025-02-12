import { useState } from "react";
import BlogPage from "./BlogPage";
import ArticlePage from "./pages/ArticlePage";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Cargo from "./Component";
import StickyHeader from "./header";
import CustomCarousel from "./customcarou";
import CustomerReviewCarousel from "./review-carou";
import TestFooter from "./test-footer";
import FAQPage from "./FAQPage";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";

function AppContent() {
  const location = useLocation();
  const [count, setCount] = useState(0);

  const showFooter = !['/blog', '/login', '/signup'].includes(location.pathname) && !location.pathname.startsWith('/blog/');

  return (
    <>
      <StickyHeader />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<ArticlePage />} />
        <Route path="/" element={
          <>
            <Cargo />
            <CustomerReviewCarousel />
            <h2 className="h-5 text-2xl font-bold mt-6 mb-6 text-red-500">TIN TỨC</h2>
            <CustomCarousel />
            <div className="h-5"></div>
          </>
        } />
      </Routes>
      {showFooter && <TestFooter />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
