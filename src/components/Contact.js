import React from "react";
import "./contact.css";

//CLASS COMPONENTS
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: props.status };
  }

  clickChangeStatus = event => {
    const newStatus = !this.state.status;
    this.setState({ status: newStatus });
  };
  render() {
    return (
      <div>
        <div className="Contact">
          <img alt="avatar" className="avatar" src={this.props.avatar}></img>
          <div className="status" onClick={this.clickChangeStatus}>
            <h4>{this.props.name}</h4>
            <p className="status-text">
              <span
                className={
                  this.state.status ? "status-online" : "status-offline"
                }
              ></span>
              {this.state.status ? "online" : "offline"}
              {""}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;

/*COMPOSANT AVEC FONCTION
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
export default Contact;*/
