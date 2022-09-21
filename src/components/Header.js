import React from "react";
import Wrapper from "assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { Button } from "components/";
const Header = () => {
    const [toggleLogOut, SettoggleLogOut] = React.useState(false);
    const logoutHandler = () => {
      SettoggleLogOut(!toggleLogOut);
    };
  return (
    <Wrapper>
      <div className="nav-center">
        <h3 class="logo-text">React CRUD</h3>
        <div>
          <div className="btn-container">
            <Button type="button" className="btn" handleChange={logoutHandler}>
              <FaUserCircle /> amir
              <FaCaretDown />
            </Button>
            <div className={`dropdown ${toggleLogOut ? "show-dropdown" : ""}`}>
              <Button
                type="button"
                className="dropdown-btn"
              >
                logout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
