const express = require("express");

const app = express();

app.use(express.json());

app.get("/user", (req, res) => {
    res.json({
        username: "Cameron",
        lastname: "Howe"
    });
});

app.post("/user/:id", (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send("Petición POST recibida");
});

app.put("/user/:id", (req, res) => {
    console.log(req.body);
    res.send(`User ${req.params.id} updated`);
});

app.delete("/user/:userId", (req, res) => {
    res.send(`User ${req.params.userId} deleted`);
});

app.use(express.static("public"));

app.listen(3000, () => {
    console.log("Serve on port 5000");
});