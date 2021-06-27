import { Card } from "./Card";
import { Center, Heading, Text } from "@chakra-ui/react";
import { StreamChat } from "stream-chat";
import { ChatBubble, Message } from "react-chat-ui";
import "./chat.css";
import firebase from "firebase";

export const ChatBox = ({ humanMessages, aiMessages }) => {
  const client = StreamChat.getInstance("2mfepnmrh4rw");
  let allMessages = [];
  if (humanMessages.length > 0) {
    for (let i = 0; i < humanMessages.length; i++) {
      allMessages.push([humanMessages[i], aiMessages[i]]);
    }
  }
  return (
    <div>
        <Center>
          <Heading>Chat</Heading>
        </Center>
        {/* <div class="chat"> */}
          {allMessages.map((message) => (
            <div>
              <div class="mine messages">
                <div class="message last">{firebase.auth().currentUser.displayName}: {message[0]}</div>
              </div>
              <div class="yours messages">
                <div class="message">{message[1]}</div>
              </div>
              {/* <Text>Human: {message[0]}</Text> */}
              {/* <Text>{message[1]}</Text> */}
            </div>
          ))}
        {/* </div> */}
    </div>
  );
};
