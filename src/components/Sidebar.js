import React from "react";
import { useLocation, Link } from 'react-router-dom';
import logoImg from "../assets/images/logo.svg";
import DashboardIcon from "../components/icons/dashboard";
import ScholarsIcon from "../components/icons/scholars";
import LeaderboardIcon from "../components/icons/leaderboard";
import PaymentsIcon from "../components/icons/payments";
import SettingsIcon from "../components/icons/settings";


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
    </div>
  );
};

export default Sidebar;
