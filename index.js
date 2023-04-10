const express = require("express");
const app = express();

//Middlewares

function logger(req, res, next) {
    console.log(`Route received: ${req.protocol}://${req.get("host")}${req.originalUrl}`);
    next();
}

app.use(express.json());
app.use(logger); // Para que se valide info antes de llegar a las rutas

/*app.all("/user", (req, res, next) => {
    console.log("Por aquí paso");
    next();
});*/

app.get("/user", (req, res) => {
    //res.send("Petición GET recibida");
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

app.listen(3000, () => {
    console.log("Serve on port 5000");
});