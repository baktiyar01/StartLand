// App.jsx
import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import Application from "./components/Application/Application";

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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
