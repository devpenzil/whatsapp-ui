import React from "react";
import Chat from "../chat/Chat";
import { list } from "../../database/list.json";
import "./style.scss";
function ChatList() {
  return (
    <>
    <div className="chat-list">
      {list.map((obj) => {
        return (
          
            <Chat
              name={obj.name}
              image={obj.image}
              time={obj.time}
              message={obj.message}
              unread_count={obj.unread_count}
              readvalue={obj.read_value}
            />
          
        );
      })}
    </div>
    </>
  );
}

export default ChatList;
