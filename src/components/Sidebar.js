import React from 'react'
import Wrapper from "../assets/wrappers/BigSidebar";
import Navbar from './Navbar'
const Sidebar = () => {
  return (
    <Wrapper>
      <div className="sidebar-container show-sidebar">
        <div className="content">
          <Navbar />
        </div>
      </div>
    </Wrapper>
  );
}

export default Sidebar