const express = require("express");
const app = express();

// Settings
app.set("AppName", "My first server");
app.set("port", 3000);

// Middlewares
app.use(express.json());

// Routes
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

app.listen(app.get("port"), () => {
    console.log(app.get("AppName"));
    console.log(`Serve on port ${app.get("port")}`);
});