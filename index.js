const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Petición GET recibida");
});

app.post("/about", (req, res) => {
    res.send("Petición POST recibida");
});

app.put("/contact", (req, res) => {
    res.send("Petición PUT recibida");
});

app.delete("/test", (req, res) => {
    res.send("<h1>Petición DELETE recibida</h1>");
});

app.listen(3000, () => {
    console.log("Serve on port 5000");
});