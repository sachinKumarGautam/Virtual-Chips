const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

var admin = require("firebase-admin");

var serviceAccount = require("../../.data/service-account.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://ab-bol-na.firebaseio.com"
});

admin
    .database()
    .ref("fake")
    .once("value")
    .then(snapshot => {
        console.log(snapshot.key);
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/hello", (req, res) => {
    res.send({ express: "Hello From Express" });
});

app.post("/api/world", (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
