import firebase from "firebase";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Heading,
  useColorModeValue,
  Text,
  Textarea,
  Button,
  Center,
  Input,
  Select,
  Flex,
  Image,
  Link,
  chakra,
  SimpleGrid,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Particles from "react-particles-js";
// import { Card } from "./Card";
import { useHistory } from "react-router-dom";
import Card from "react-animated-3d-card";
import { Navbar } from "./Navbar";
export const Home = () => {
  let history = useHistory();
  const tsParticles = require("tsparticles");
  let user_token = firebase.auth().currentUser.getIdToken();

  let user = {
    header: "Access-Control-Allow-Origin",
    token: user_token,
    email: firebase.auth().currentUser.email,
  };

  let signOut = () => {
    firebase.auth().signOut();
    history.push("/");
  };

  const goToChat = () => {
    history.push("/chat");
  };

  const goToWork = () => {
    history.push("/work");
  };

  const goToBreak = () => {
    history.push("/break");
  };

  useEffect(() => {
    axios.post("http://localhost:5000/home", user).then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      <Navbar />
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
          <br />
          <br />
          <br />
          <Center>
            <Heading color="white" fontSize="6xl" fontWeight="extrabold">
              Dashboard
            </Heading>
          </Center>
          <br />
          <Center>
            <Box>
              <Card
                style={{
                  background: "white",
                  width: "300px",
                  height: "300px",
                  cursor: "pointer",
                }}
              >
                <br />
                <Text textAlign="center" fontSize="xl" fontWeight="bold">
                  Welcome
                  <Text
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    bgClip="text"
                    fontWeight="bold"
                  >
                    {firebase.auth().currentUser.displayName}
                  </Text>
                </Text>
                <br />
                <div align="center">
                  <img src={firebase.auth().currentUser.photoURL}></img>
                </div>
                <br />
                <Center>
                  <Button
                    align="center"
                    color={"white"}
                    onClick={signOut}
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    _hover={{
                      bgGradient: "linear(to-r, red.400,pink.400)",
                      boxShadow: "xl",
                    }}
                  >
                    Sign Out
                  </Button>
                </Center>
              </Card>
            </Box>
          </Center>
          <br />
          <br />
          <br />
          <br />
          <SimpleGrid columns={[1, 3]} gap="200px">
            <Center>
              <Box as="button" onClick={goToWork} alignContent="center">
                <Card
                  style={{
                    background: "#34c9eb",
                    width: "200px",
                    height: "200px",
                    cursor: "pointer",
                  }}
                >
                  <br />
                  <br />
                  <br />
                  <Text
                    textAlign="center"
                    fontSize="3xl"
                    fontWeight="bold"
                  >
                    Work
                  </Text>
                </Card>
              </Box>
            </Center>
            <Center>
              <Box as="button" onClick={goToChat} alignContent="center">
                <Card
                  style={{
                    background: "#34c9eb",
                    width: "200px",
                    height: "200px",
                    cursor: "pointer",
                  }}
                >
                  <br />
                  <br />
                  <br />
                  <Text
                    textAlign="center"
                    fontSize="3xl"
                    fontWeight="bold"
                  >
                    AI Therapy
                  </Text>
                </Card>
              </Box>
            </Center>
            <Center>
              <Box as="button" onClick={goToBreak} alignContent="center">
                <Card
                  style={{
                    background: "#34c9eb",
                    width: "200px",
                    height: "200px",
                    cursor: "pointer",
                  }}
                >
                  <br />
                  <br />
                  <br />
                  <Text
                    textAlign="center"
                    fontSize="3xl"
                    fontWeight="bold"

                  >
                    Take a Break
                  </Text>
                </Card>
              </Box>
            </Center>
          </SimpleGrid>
        </Box>
      </Box>
    </div>
  );
};