import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import firebase from "firebase";
import { Card } from "./Card";
import { useHistory } from "react-router-dom";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Particles from "react-particles-js";

export const Login = () => {
  let history = useHistory();
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => true,
    },
    signInSuccessUrl: "/home",
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
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Box maxW="md" mx="auto">
          <Heading
            textAlign="center"
            size="3xl"
            fontWeight="extrabold"
            color="twitter.100"
          >
            Flow
          </Heading>
          <br />
          <Card rounded="xl">
            <Text
              textAlign="center"
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontWeight="bold"
              fontSize="lg"
            >
              Sign In to Your Account
            </Text>
            <SimpleGrid mt="6" columns={1} spacing="3">
              <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
              />
            </SimpleGrid>
          </Card>
        </Box>
      </Box>
    </div>
  );
};
