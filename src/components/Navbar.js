import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import bellIcon from "../assets/images/bell.svg";
import searchIcon from "../assets/images/search.svg";
import profileImage from "../assets/images/profile.png";

const Navbar = () => {
  let location = useLocation();
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    if(location.pathname.substring(1) === '') {
      setPageTitle('dashboard');
    } else {
      setPageTitle(location.pathname.substring(1));
    }    
  }, [location.pathname]);

  return (
    <div className="nav-bar">
      <div className="nav-bar-inner d-flex">
        <div className="page-title">
          {pageTitle}
        </div>
        <div className="right-part d-flex">
          <div className="nav-item">
            <img src={searchIcon} alt="" />
          </div>
          <div className="nav-item notifications">
            <img src={bellIcon} alt="" />
            <div />
          </div>
          <div className="v-divider" />
          <div className="account-info d-flex">
            <span className="name">Samantha</span>
            <div className="avatar">
              <img src={profileImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
