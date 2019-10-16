import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { withRouter } from "../../../utils/Routing";
import { Button } from "react-native-paper";

class Login extends Component {
    render() {
        const { user, signOut, signInWithGoogle } = this.props;
        console.log(user, signOut, signInWithGoogle);
        return (
            <View style={styles.container}>
                {/* <Text style={styles.welcome}>Hi Guest, Please login</Text> */}
                {user ? (
                    <Text>Hello, {user.displayName}</Text>
                ) : (
                    <Text>Hi Guest, Please sign in.</Text>
                )}
                {user ? (
                    <Button onPress={signOut}>Sign out</Button>
                ) : (
                    <Button onPress={signInWithGoogle}>
                        Sign in with Google
                    </Button>
                )}
                {user ? (
                    <Button onPress={() => this.props.history.push("/")}>
                        Go to Home
                    </Button>
                ) : null}
            </View>
        );
    }
}

export default withRouter(Login);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    welcome: {
        fontSize: 30,
        textAlign: "center",
        margin: 10
    },
    instructions: { fontSize: 20, textAlign: "center", margin: 10 }
});
