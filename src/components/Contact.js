import React from "react";
import "./contact.css";

function Contact(props) {
  return (
    <div>
      <div className="Contact">
        <img alt="avatar" className="avatar" src={props.avatar}></img>
        <div className="status">
          <h4>{props.name}</h4>
          <p className="status-text">
            <span
              className={props.status ? "status-online" : "status-offline"}
            ></span>
            {props.status ? "online" : "offline"}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Contact;
