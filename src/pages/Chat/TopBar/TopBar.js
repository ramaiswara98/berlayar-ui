import React from 'react'

import './TopBar.css'
import IconDownload from '../../../assets/icon/ic_download.png'

function TopBar() {
  return (
    <div className="chat-top-bar">
      <div className="chat-top-bar-container">
        <div className="chat-top-bar-menu">
          <div></div>
          <div>
            <p className="title-top-bar">Marketing Stategy</p>
          </div>
          <div>
            <img src={IconDownload} alt="icon-download" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar