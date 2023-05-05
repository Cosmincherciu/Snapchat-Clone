import React, { useEffect, useState } from "react";
import "./Chat.css";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { db } from "./firebase";

function Chat() {
  const [posts, setPosts] = useState([]);

  //   useEffect(() => {
  //     db.collection("posts")
  //       .orderBy("timestamp", "desc")
  //       .onSnapshot((snapshot) =>
  //         setPosts(
  //           snapshot.docs.map((doc) => ({
  //             id: doc.id,
  //             data: doc.data,
  //           }))
  //         )
  //       );
  //   });

  return (
    <div className="chats">
      <div className="chats__header">
        <Avatar className="chats__avatar" />
        <div className="chats__search">
          <SearchIcon />
          <input placeholder="Friends" type="text" />
          <ChatBubbleIcon chats__chatIcon />
        </div>
      </div>
      <div className="chat__posts">
        <h2>Hello</h2>
      </div>
    </div>
  );
}

export default Chat;
