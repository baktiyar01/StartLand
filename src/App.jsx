// App.jsx
import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home";
import Application from "./pages/Application";

function App() {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-grow ml-72 overflow-y-auto">
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
