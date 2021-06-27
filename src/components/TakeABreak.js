import { useState, useEffect } from "react";
import axios from "axios";
import { Input, Box, Center, Heading, Button, Text } from "@chakra-ui/react";
import { CarouselDemo } from "./CarouselDemo";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { SimpleGrid } from "@chakra-ui/react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import { GifModal } from "./GifModal";
import { MeditateModal } from "./MeditateModal";
import { Navbar } from "./Navbar";
import Particles from "react-particles-js";

const giphyFetch = new GiphyFetch("T8n3iMoLUOguSsK56GgLJRYhh9lyrAWL");

export const TakeABreak = () => {
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
        <Box maxW="md" mx="auto">
          <Center>
            <Heading color="white" fontSize="6xl" fontWeight="extrabold">
              Take a Break
            </Heading>
          </Center>
          <br />
          <br />
          <SimpleGrid columns={[1, 2]} gap="200px">
            <GifModal />
            <MeditateModal />
          </SimpleGrid>
          <br />
          <br />
          <br />
          <br />
          <Center>
            <Particles
              width={1000}
              height={500}
              params={{
                particles: {
                  number: {
                    value: 200,
                  },
                  size: {
                    value: 5,
                  },
                  background: {
                    color: {
                      value: "#0d47a1",
                    },
                  },
                },
                interactivity: {
                  events: {
                    onhover: {
                      enable: true,
                      mode: "repulse",
                    },
                  },
                },
              }}
            />
          </Center>
          <br />
          <br />
          <br />
          <br />
          <ReactJkMusicPlayer
            theme={"dark"}
            locale={"en_US"}
            mode={"full"}
            audioLists={audioList1}
          />
        </Box>
      </Box>
    </div>
  );
};