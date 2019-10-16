import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";

import { withRouter } from "../../../utils/Routing";
import {
    Button,
    TextInput,
    Appbar,
    IconButton,
    Colors,
    withTheme
} from "react-native-paper";

class Home extends Component {
    state = {
        bootAmount: "",
        groupName: "",
        players: [],
        currentPlayerName: ""
    };

    updatePlayerList = () => {
        this.setState({
            players: [...this.state.players, this.state.currentPlayerName],
            currentPlayerName: ""
        });
    };

    getPlayers = () => {
        if (this.state.players.length) {
            return this.state.players.reverse().map(item => {
                return (
                    <View style={styles.playerItem}>
                        <Text style={styles.playerItemText}>{item}</Text>
                    </View>
                );
            });
        }
    };
    render() {
        const { user } = this.props;
        const { players, groupName, bootAmount } = this.state;
        return (
            <View style={styles.container}>
                <Appbar style={styles.bottom}>
                    <Text
                        style={{
                            color: this.props.theme.colors.accent,
                            marginLeft: 10
                        }}
                    >
                        VIRTUAL CHIPS
                    </Text>
                    {user ? (
                        <View style={styles.login}>
                            <Text
                                style={styles.text}
                                onPress={() =>
                                    this.props.history.push("/login")
                                }
                            >
                                Hi, {user.displayName}
                            </Text>
                            <Image
                                style={{ width: 16, height: 16 }}
                                source={{
                                    uri: user.photoURL
                                }}
                            />
                        </View>
                    ) : (
                        <View style={styles.login}>
                            <Text
                                style={styles.text}
                                onPress={() =>
                                    this.props.history.push("/login")
                                }
                            >
                                LOGIN
                            </Text>
                        </View>
                    )}
                </Appbar>
                <View style={styles.upperContainer}>
                    <Text style={styles.welcome}>
                        Welcome to Virtual Chips!
                    </Text>
                </View>
                <View style={styles.lowerContainer}>
                    <TextInput
                        label="Enter Boot Amount"
                        type="number"
                        keyboardType={"number-pad"}
                        value={this.state.bootAmount}
                        style={styles.textInputItem}
                        autoFocus
                        onChangeText={bootAmount =>
                            this.setState({ bootAmount })
                        }
                    />
                    <TextInput
                        label="Enter Group Name"
                        value={this.state.groupName}
                        style={styles.textInputItem}
                        onChangeText={groupName => this.setState({ groupName })}
                    />
                    {this.state.players.length ? (
                        <View style={styles.playersListWrapper}>
                            <Text>Players</Text>
                            {this.getPlayers()}
                        </View>
                    ) : null}
                    <View style={styles.addPlayerWrapper}>
                        <TextInput
                            label="Enter Player Name"
                            value={this.state.currentPlayerName}
                            style={styles.textInputItem}
                            onChangeText={currentPlayerName =>
                                this.setState({ currentPlayerName })
                            }
                        />
                        {this.state.currentPlayerName ? (
                            <Button
                                mode={"outlined"}
                                size={20}
                                onPress={this.updatePlayerList}
                            >
                                +
                            </Button>
                        ) : null}
                    </View>
                    {players.length && bootAmount && groupName ? (
                        <Button
                            style={styles.nextButton}
                            //     icon="camera"
                            mode="contained"
                            onPress={() => this.props.history.push("/user")}
                        >
                            Next
                        </Button>
                    ) : null}
                </View>
            </View>
        );
    }
}

export default withRouter(withTheme(Home));

const styles = StyleSheet.create({
    login: {
        position: "absolute",
        right: 10,
        color: "#fff",
        display: "flex",
        flexDirection: "row"
    },
    text: { color: "#fff" },
    playersListWrapper: {
        marginTop: 10
    },
    textInputItem: { marginTop: 10 },
    playerItem: { margin: 10 },
    playerItemText: { fontSize: 12 },
    addPlayerWrapper: { display: "flex", width: "100%" },
    lowerContainer: { marginTop: 30 },
    upperContainer: { marginTop: 100 },
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    bottom: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0
    },
    nextButton: { marginTop: "20px" }
});
