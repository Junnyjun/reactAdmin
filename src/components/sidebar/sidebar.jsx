import React from 'react';
import './sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FeedbackIcon from '@mui/icons-material/Feedback';
import MessageIcon from '@mui/icons-material/Message';
export default function Sidebar() {
  return (
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <HomeIcon/>
                Home
              </li>
              <li className="sidebarListItem">
                <LocalAtmIcon/>
                Transactions
              </li>
              <li className="sidebarListItem">
                <MonetizationOnIcon/>
                Sales
              </li>
            </ul>
          </div>
        </div>
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <PersonOutlineIcon/>
                User
              </li>
              <li className="sidebarListItem">
                <TrendingUpIcon/>
                Analytics
              </li>
              <li className="sidebarListItem">
                <BarChartIcon/>
                Reports
              </li>
            </ul>
          </div>
        </div>
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <MailOutlineIcon/>
                Mail
              </li>
              <li className="sidebarListItem">
                <FeedbackIcon/>
                Feedback
              </li>
              <li className="sidebarListItem">
                <MessageIcon/>
                Messages
              </li>
            </ul>
          </div>
        </div>
      </div>
  )
}