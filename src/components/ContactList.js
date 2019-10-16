import React from "react";
import Contact from "./Contact";

function ContactList() {
  const Array = [
    {
      id: 1,
      name: "mokou",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKfyE41eRKMZEor9-mWCCfaVbbIQYIjiZGbyrmWGwTi5BzqE5A",
      status: true
    },
    {
      id: 2,
      name: "Tracey Rose",
      avatar: "https://randomuser.me/api/portraits/women/86.jpg",
      status: false
    },
    {
      id: 3,
      name: "Gertrude Lopez",
      avatar: "https://randomuser.me/api/portraits/women/96.jpg",
      status: true
    }
    {
        id: 4,
        name: "Emily Harris",
        avatar: "https://randomuser.me/api/portraits/women/50.jpg",
        status: true
      }
      {
        id: 5,
        name: "Myrtle Wells",
        avatar: "https://randomuser.me/api/portraits/women/23.jpg",
        status: true
      }
  ];
  return Array.map(cont => {
    return (
      <Contact
        key={cont.id}
        name={cont.name}
        avatar={cont.avatar}
        status={cont.status}
      />
    );
  });
}

export default ContactList;
