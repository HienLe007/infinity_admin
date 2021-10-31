import React from "react";
import { useLocation, Link } from 'react-router-dom';
import logoImg from "../assets/images/logo.svg";
import DashboardIcon from "../components/icons/dashboard";
import ScholarsIcon from "../components/icons/scholars";
import LeaderboardIcon from "../components/icons/leaderboard";
import PaymentsIcon from "../components/icons/payments";
import SettingsIcon from "../components/icons/settings";
import icon1 from "../assets/images/icons/icon1.svg";
import icon2 from "../assets/images/icons/icon2.svg";
import icon3 from "../assets/images/icons/icon3.svg";


const navLinks = [
  {label: 'Dashboard', link: '/', icon: <DashboardIcon /> },
  {label: 'Scholars', link: '/scholars', icon: <ScholarsIcon /> },
  {label: 'Leaderboard', link: '/leaderboard', icon: <LeaderboardIcon /> },
  {label: 'Payments', link: '/payments', icon: <PaymentsIcon /> },
  {label: 'Settings', link: '/settings', icon: <SettingsIcon /> },
];

const Sidebar = () => {
  let location = useLocation();

  navLinks.map(item => {    
    if(location.pathname === item.link) {
      item.is_selected = location.pathname.includes(item.link);
    } else {
      item.is_selected = false;
    }
    return item;
  });
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logoImg} alt="logoImg" />
      </div>
      <div className="link-list">
        {
          navLinks && navLinks.map((item, index) => (
            <div className={`nav-item ${item.is_selected ? "active" : ""}`} key={index}>
              <Link to={item.link}>
                <div className="icon">{item.icon}</div>
                <span>{item.label}</span>
              </Link>
            </div>
          ))
        }
      </div>
      <div className="data-summary">
        <div className="summary-item d-flex">
          <img src={icon1} alt="" />
          <span className="dollar">3,577.05 USD</span>
          <span className="percent">-0.3%</span>
        </div>
        <div className="summary-item d-flex">
          <img src={icon2} alt="" />
          <span className="dollar">119.72 USD</span>
          <span className="percent">-3.7%</span>
        </div>
        <div className="summary-item d-flex">
          <img src={icon3} alt="" />
          <span className="dollar">0.072742USD</span>
          <span className="percent">-9.6%</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
