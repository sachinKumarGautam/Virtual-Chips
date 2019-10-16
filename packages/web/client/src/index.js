import { AppRegistry } from "react-native";
import React from "react";

import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import withFirebaseAuth from "react-with-firebase-auth";
// import * as firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from "./firebaseConfig";

import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

import App from "../../../components/src/App";

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: "#8b0000",
        accent: "#FFD100"
    }
};

function NewApp() {
    return (
        <PaperProvider theme={theme}>
            <App />
        </PaperProvider>
    );
}
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const firebaseAppAuth = firebaseApp.auth();

// const providers = {
//     googleProvider: new firebase.auth.GoogleAuthProvider()
// };

AppRegistry.registerComponent("myprojectname", () => NewApp);
AppRegistry.runApplication("myprojectname", {
    rootTag: document.getElementById("root")
});
