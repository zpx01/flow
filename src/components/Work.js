import React from "react";
import { CountdownTimer } from "./CountdownTimer";
import { Tasks } from "./Tasks";
import { Card } from "./Card";
import { useState } from "react";
import { useHistory } from "react-router";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Text,
  useToken,
  Stack,
  SimpleGrid,
  Icon,
  Link,
  Badge,
  VStack,
  Heading,
  Center,
  Button
} from "@chakra-ui/react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import { TodoList } from "./TodoList";
import { AddTodo } from "./AddTodo";
import { Navbar } from "./Navbar";
import { Timer } from "./Timer";

export const Work = () => {
  let history = useHistory();
  const topBg = useColorModeValue("gray.800", "gray.700");
  const bottomBg = useColorModeValue("white", "gray.800");
  const [bottomBgHex] = useToken("colors", [bottomBg]);
  const [todos, setTodos] = useState([]);
  let goToBreak = () => {
    history.push("/break")
  }
  function deleteTodo(id) {
    const newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    console.log(newTodos);
  }

  function addTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  function editTodo(id, updatedTodo) {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setTodos(updatedItem);
  }
  const audioList1 = [
    {
      name: "LoFi Hip Hop",
      singer: "Chilled Cow",
      cover:
        "https://res.cloudinary.com/flow019/image/upload/v1624739457/flow_audios/Screen_Shot_2021-06-26_at_1.20.59_PM_sus7up.png",
      musicSrc:
        "https://res.cloudinary.com/flow019/video/upload/v1624739207/flow_audios/1_A.M_Study_Session_-_lofi_hip_hop_chill_beats_fajusr.mp3",
      // support async fetch music src. eg.
      // musicSrc: async () => {
      //   return await fetch('/api')
      // },
    },
    {
      name: "Midnight City - LoFi Jazz",
      singer: "The Jazz Hop Café",
      cover:
        "https://res.cloudinary.com/flow019/image/upload/v1624739975/flow_audios/Screen_Shot_2021-06-26_at_1.39.15_PM_wlgqdr.png",
      musicSrc:
        "https://res.cloudinary.com/flow019/video/upload/v1624739970/flow_audios/midnight_city._lofi___jazz_hop___chill_mix_dvroe0.mp3",
    },
  ];
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
        <Flex w="full" p={50} alignItems="center" justifyContent="center">
          <br />
          <SimpleGrid
            columns={[1, 2]}
            gap="200px"
            mx="auto"
            textAlign={["left", "center"]}
          >
            <Card bgColor="black">
              <Heading textColor="white">Timer</Heading>
              <Timer />
            </Card>
            <Card>
              <VStack p={5}>
                <Text
                  bgGradient="linear(to-l, #7928CA,#FF0080)"
                  bgClip="text"
                  fontSize="2xl"
                  fontWeight="bold"
                >
                  Task List
                </Text>
                <br />
                <TodoList
                  todos={todos}
                  deleteTodo={deleteTodo}
                  editTodo={editTodo}
                />
                <AddTodo addTodo={addTodo} />
              </VStack>
            </Card>
          </SimpleGrid>
          <br />
          <ReactJkMusicPlayer
            theme={"dark"}
            locale={"en_US"}
            mode={"full"}
            audioLists={audioList1}
          />
        </Flex>
        <Center>
            <Button colorScheme="facebook" onClick={goToBreak} size="lg">Take a Break</Button>
          </Center>
      </Box>
    </div>
  );
};
