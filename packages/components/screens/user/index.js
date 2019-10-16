import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { withRouter } from "../../../utils/Routing";

class User extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Boom!!!</Text>
                <Text style={styles.instructions}>
                    this page is yet to be built
                </Text>
            </View>
        );
    }
}

export default withRouter(User);

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
