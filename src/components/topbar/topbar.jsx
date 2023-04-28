import React from 'react';
import './topbar.css';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
export default function Topbar() {
  return (
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <span className="logo">Junnyland-ADMIN</span>
          </div>
          <div className="topRight">
            <div className="topbarIconContainer">
              <CircleNotificationsIcon />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <AccountCircleIcon />
            </div>
            <div className="topbarIconContainer">
              <SettingsIcon />
            </div>
            <img
              src={"https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F158843705-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FP71X3NIjPFGh4f4ZJ0iz%252Ficon%252FAY7z8NARwlAni7TWEm2n%252F2.png%3Falt%3Dmedia%26token%3D968dc6cd-65f3-4a5b-8082-24c0216096fc"}
              alt=""
              className="topAvatar"
            />
          </div>
        </div>
      </div>
  )
}