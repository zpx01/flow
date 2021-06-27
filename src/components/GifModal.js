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
  Box,
  Text
} from "@chakra-ui/react";
import { CarouselDemo } from "./CarouselDemo";

export const GifModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Center>
        <Box
          as="button"
          borderRadius="xl"
          bg="twitter.400"
          color="white"
          px={100}
          h={100}
          onClick={onOpen}
        >
          <Text fontSize="xl" fontWeight="extrabold">Explore GIFs</Text>
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
          <ModalHeader>Find Awesome GIFs!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CarouselDemo />
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
