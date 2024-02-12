// App.jsx
import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import Application from "./components/Application/Application";
import Deadline from "./components/Deadline/Deadline";
import Category from "./components/Category/Category";
import Participation from "./components/Participation/Participation";
import Faq from "./components/Faq/Faq";

function App() {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-grow ml-72">
          <div className="content-container">
            <Home />
            <Application />
            <Deadline />
            <Category />
            <Participation />
            <Faq />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
