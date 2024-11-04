import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Component } from "lucide-react";
import Cargo from "./Component";
import Footer from "./footer";
import ServicesSection from "./services-section";
import StickyHeader from "./header";
import Cargo10 from "./Component v10";
import TestStickyHeader from "./header-test";
import CustomCarousel from "./customcarou";
import CustomerReviewCarousel from "./review-carou";
import ContactSidebar from "./side";
import TestFooter from "./test-footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <StickyHeader></StickyHeader>
      {/* <Cargo10></Cargo10> */}
      <Cargo></Cargo>
      {/* <ContactSidebar></ContactSidebar> */}

      <CustomerReviewCarousel></CustomerReviewCarousel>
      <h2 className="h-5 text-2xl font-bold mt-6 mb-6 text-red-500">TIN TỨC</h2>
      <CustomCarousel></CustomCarousel>
      <div className="h-5"></div>
      <TestFooter></TestFooter>
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
