import React from "react";
import firebase from "firebase";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Avatar,
  AvatarBadge,
  Link,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import ContactlessIcon from "@material-ui/icons/Contactless";
import { useHistory } from "react-router";

export const Navbar = () => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  let history = useHistory();
  let goToHome = () => {
    history.push("/home");
  };
  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a href="/" title="Flow" display="flex" alignItems="center">
              <ContactlessIcon fontSize="large" htmlColor="#0063d1" />
            </chakra.a>
            <chakra.h1 fontSize="2xl" fontWeight="bold" ml="2">
              Flow
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <Link href="/home">
                <Button variant="ghost" colorScheme="messenger">
                  Home
                </Button>
              </Link>
              <Link href="/chat">
                <Button variant="ghost" colorScheme="messenger">
                  AI Therapy
                </Button>
              </Link>
              <Link href="/work">
                <Button variant="ghost" colorScheme="messenger">
                  Work
                </Button>
              </Link>
              <Link href="/break">
                <Button variant="ghost" colorScheme="messenger">
                  Break
                </Button>
              </Link>
            </HStack>
            <Avatar
              size="sm"
              name={firebase.auth().currentUser.displayName}
              src={firebase.auth().currentUser.photoURL}
              onClick={goToHome}
            >
              <AvatarBadge boxSize="1.25em" bg="green.500" />
            </Avatar>
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Link href="/home">
                  <Button variant="ghost" colorScheme="messenger">
                    Home
                  </Button>
                </Link>
                <Link href="/chat">
                  <Button variant="ghost" colorScheme="messenger">
                    AI Therapy
                  </Button>
                </Link>
                <Link href="/work">
                  <Button variant="ghost" colorScheme="messenger">
                    Work
                  </Button>
                </Link>
                <Link href="/break">
                  <Button variant="ghost" colorScheme="messenger">
                    Break
                  </Button>
                </Link>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};
