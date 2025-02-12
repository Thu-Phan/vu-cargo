import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Cargo from "./Component";
import StickyHeader from "./header";
import CustomCarousel from "./customcarou";
import CustomerReviewCarousel from "./review-carou";
import TestFooter from "./test-footer";
import FAQPage from "./FAQPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <StickyHeader />
      <Routes>
        <Route path="/faq" element={<FAQPage />} />
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
      <TestFooter />
    </Router>
  );
}

export default App;
