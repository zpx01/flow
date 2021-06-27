import { useState, useEffect } from "react";
import axios from "axios";
import firebase from "firebase";
import { Box, Heading, Center, Input, Button, Text } from "@chakra-ui/react";
import { Card } from "./Card";
import { ChatBox } from "./ChatBox";
export const Chat = () => {
  let [humanMessages, setHumanMessages] = useState([]);
  let [message, setMessage] = useState("");
  let [aiMessages, setAiMessages] = useState([]);
  let user = {
    header: "Access-Control-Allow-Origin",
    token: firebase.auth().currentUser.getIdToken(),
    email: firebase.auth().currentUser.email,
  };
  let handleMessage = (e) => {
    setMessage(e.target.value);
  };
  let sendMessage = (e) => {
    let messageText = {
      header: "Access-Control-Allow-Origin",
      text: message,
    };
    setHumanMessages([...humanMessages, message]);
    axios.post("http://localhost:5000/home", user).then((response) => {
      axios.post("http://localhost:5000/chat", messageText).then((res) => {
        setAiMessages([...aiMessages, res.data.data]);
      });
    });
    setMessage("");
  };

  return (
    <div>
      <Box
        minH="100vh"
        py="12"
        px={{
          base: "4",
          lg: "8",
        }}
        bgGradient="linear(to-l, #7928CA, #FF0080)"
      >
        <Box maxW="md" mx="auto">
          <Center>
            <Heading color="white" fontSize="5xl" fontWeight="extrabold">
              AI Chat Therapy
            </Heading>
          </Center>
          <br />
          <br />
          <Card>
          <ChatBox humanMessages={humanMessages} aiMessages={aiMessages}/>
          <br />
          <br />
          <br />
          <br />
          <Input
            value={message}
            onChange={handleMessage}
            variant="filled"
            placeholder="Write a message to our AI Therapist"
          />
          <br />
          <br />
          <Center>
            <Button onClick={sendMessage} colorScheme={"facebook"}>Send</Button>
          </Center>
          <br />
          <br />
          </Card>
        </Box>
      </Box>
    </div>
  );
};
