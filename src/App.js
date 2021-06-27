import firebase from "firebase";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import { ChakraProvider, useFocusOnHide } from "@chakra-ui/react";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { TakeABreak } from "./components/TakeABreak";
import { Work } from "./components/Work.js";
import { Chat } from "./components/Chat";
import { Landing } from "./components/Landing";

firebase.initializeApp({
  apiKey: "AIzaSyB-TI-_gxPoEM-Pa3sEeEJDSUhEe4rzKMg",
  authDomain: "flow-f03b7.firebaseapp.com",
});

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  let history = useHistory();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setIsSignedIn(!!user);
    });
  });

  if (isSignedIn === true) {
    return (
      <ChakraProvider>
        <Router>
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Landing isSignedIn={isSignedIn}/>
            </Route>
            <Route exact path="/chat">
              <Chat />
            </Route>
            <Route exact path="/break">
              <TakeABreak />
            </Route>
            <Route exact path="/work">
              <Work />
            </Route>
          </Switch>
        </Router>
      </ChakraProvider>
    );
  } else {
    return (
      <ChakraProvider>
        <Router>
        <Switch>
          <Route exact path="/">
            <Landing isSignedIn={isSignedIn}/>
          </Route>
          <Route exact path="/login">
              <Login />
          </Route>
        </Switch>
      </Router>
      </ChakraProvider>
    );
  }
}

export default App;
