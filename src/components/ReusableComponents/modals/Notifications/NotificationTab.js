import React from "react";
import logo from "../../Statics/Images/notificationLogo.png";
const NotificationTab = (props) => {
  return (
    <div className="notificationContainer m-3 p-2">
      <div className="row ">
        <div className="col-3 notificationImg px-3">
          <img
            src={logo}
            alt="logo"
            width="100px"
            height="100px"
            style={{ borderRadius: "1px solid lightgray" }}
          />
        </div>
        <div className="col-9">
          <li>
            <strong> {props?.title} </strong>
          </li>
          <li>
            {props?.decription}
          </li>
        </div>
      </div>
    </div>
  );
};

export default NotificationTab;
