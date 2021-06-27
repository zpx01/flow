import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Center,
  Button,
  Image,
  Grid,
  GridItem,
  Text,
  Box
} from "@chakra-ui/react";
import ReactAudioPlayer from "react-audio-player";

export const MeditateModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Center>
      <Box
          as="button"
          borderRadius="xl"
          bg="twitter.400"
          color="white"
          px={116}
          h={100}
          onClick={onOpen}
        >
          <Text fontSize="xl" fontWeight="extrabold">Meditate</Text>
        </Box>
      </Center>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
        size={"xl"}
        scrollBehavior={"inside"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Curated Medidation Tutorials</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <br />
            <Center>
                <Text fontFamily="fantasy" fontSize="xl" fontWeight="bold">Tutorial 1: The Present</Text>
            </Center>
            <br />
            <Center>
            <Image
              src="https://wallpaperaccess.com/full/1933087.jpg"
            //   boxSize="200px"
            />
            </Center>
            <br />
            <br />
            <Center>
            <ReactAudioPlayer
              src="https://assets.calm.com/1f2a60e567945384b84a7aa3c6949b42.m4a"
              controls
            />
            </Center>
            <br />
            <br />
            <br />
            <Center>
                <Text fontFamily="fantasy" fontSize="xl" fontWeight="bold">Tutorial 2: The Mind</Text>
            </Center>
            <br />
            <Center>
            <Image
              src="https://wallpapercave.com/wp/qtzZvul.jpg"
            //   boxSize="200px"
            />
            </Center>
            <br />
            <br />
            <Center>
            <ReactAudioPlayer
              src="https://res.cloudinary.com/flow019/video/upload/v1624742508/flow_audios/10-Minute_Daily_Meditation_elrygn.mp3"
              controls
            />
            </Center>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
