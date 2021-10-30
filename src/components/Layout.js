import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({children}) => {
  return (
    <div className="default-layout">
      <Sidebar />
      <div className="content">        
        <Navbar />
        <div className="children-page">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
