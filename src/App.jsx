import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import Application from "./components/Application/Application";
import Deadline from "./components/Deadline/Deadline";
import Category from "./components/Category/Category";
import Participation from "./components/Participation/Participation";
import Faq from "./components/Faq/Faq";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";
import { SnackbarProvider } from "notistack";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <SnackbarProvider>
      <div>
        <Header />
        <div className="flex">
          {!isMobile && <Sidebar />}
          <div className={`flex-grow ${isMobile ? "" : "ml-72"}`}>
            <div className="content-container">
              <Home />
              <Application />
              <Deadline />
              <Category />
              <Participation />
              <Faq />
              <Partners />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </SnackbarProvider>
  );
}

export default App;
