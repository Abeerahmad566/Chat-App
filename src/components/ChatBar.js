import React, { useState, useEffect } from "react";

const ChatBar = ({ socket }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on("newUserResponse", (data) => setUsers(data));
  }, [socket, users]);
  return (
    <div className="chat__sidebar">
      <h2>Open Chat</h2>

      <div>
        <h4 className="chat__header">ACTIVE USERS</h4>
        <div className="chat__users">
          {users.map((user) => (
            <div id="container">
              <img src="http://placekitten.com/100/100" alt="" />
              <p key={user.socketID}>{user.userName}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
