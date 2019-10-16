/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, View } from "react-native";
import Loadable from "react-loadable";

import { Route, Router, Switch } from "../../utils/Routing";

import Home from "../screens/home";
import User from "../screens/user";
import Login from "../screens/login";

import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../web/client/src/firebaseConfig";
import TempComp from "./TempComp";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();

const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider()
};

const instructions = Platform.select({
    ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
    android:
        "Double tap R on your keyboard to reload,\n" +
        "Shake or press menu button for dev menu"
});

firebaseAppAuth.onAuthStateChanged(function(user) {
    if (user) {
        console.log("got the user", user);
    } else {
        console.log("noooooops");
    }
});

// const AsyncHomePage = Loadable({
//     loader: () => import(/* webpackChunkName: "homepage" */ "../screens/home"),
//     loading: () => <div>loading page...</div>,
//     modules: ["homepage"]
// });

// const AsyncLoginPage = Loadable({
//     loader: () =>
//         import(/* webpackChunkName: "loginpage" */ "../screens/login"),
//     loading: () => <div>loading page...</div>,
//     modules: ["login"]
// });

// type Props = {};
class App extends Component {
    render() {
        const { user, signOut, signInWithGoogle } = this.props;
        console.log("props", this.props);
        return (
            <View>
                <Router>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => (
                                <Home
                                    user={user}
                                    signOut={signOut}
                                    signInWithGoogle={signInWithGoogle}
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/login"
                            render={() => (
                                <Login
                                    user={user}
                                    signOut={signOut}
                                    signInWithGoogle={signInWithGoogle}
                                />
                            )}
                        />
                        <Route exact path="/user" component={User} />
                    </Switch>
                </Router>
                <TempComp />
            </View>
        );
    }
}

export default withFirebaseAuth({
    providers,
    firebaseAppAuth
})(App);
