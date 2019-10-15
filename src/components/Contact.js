import React from 'react';
import './contact.css';
function Contact(props) {
    const name = ["Mokou", "Tracey Rose", "Gertrude Lopez"];
    const avatar = ["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKfyE41eRKMZEor9-mWCCfaVbbIQYIjiZGbyrmWGwTi5BzqE5A", "https://randomuser.me/api/portraits/women/86.jpg", "https://randomuser.me/api/portraits/women/96.jpg"];
    const status = true;
    return (
     <div>
        <div className="Contact">
            <img className="avatar" src={props.avatar}></img>
            <div className="status"><h4>{props.name}</h4>
            <p className="status-text"><span className={props.status ? 'status-online': 'status-offline'}></span>{props.status ? 'online' : 'offline'} </p>
            </div>
        </div>
    </div>
     );
}
export default Contact;
