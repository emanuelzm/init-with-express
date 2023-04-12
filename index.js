const express = require("express");
const app = express();

app.set("AppName", "My first server");
app.set("port", 3000);
app.set("view engine", "ejs");

app.use(express.json());

app.get("/user", (req, res) => {
    res.json({
        username: "Cameron",
        lastname: "Howe"
    });
});

app.get("/", (req, res) => {
    res.sendFile("public/index.html", { root: __dirname });
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

app.listen(app.get("port"), () => {
    console.log(app.get("AppName"));
    console.log(`Serve on port ${app.get("port")}`);
});