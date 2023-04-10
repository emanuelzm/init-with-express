/* For database integration with MongoDB, Mongoose, Sequelize, etc. 
    For authentication with Passport, JWT, etc. 
    For file upload with Multer, etc.
    For email with Nodemailer, etc.
    For payment with Stripe, etc.

    ... And other options based in Express.js is: Adonis.js, Sails.js, Nest.js, Koa, hapi, kraken, etc.
*/

const express = require("express");
const app = express();

// Settings
app.set("AppName", "My first server");
app.set("port", 3000);
app.set("view engine", "ejs"); // others are pug, handlebars, etc.

// Middlewares
app.use(express.json());

// Routes
app.get("/user", (req, res) => {
    res.json({
        username: "Cameron",
        lastname: "Howe"
    });
});

app.get("/", (req, res) => {
    const data = [{name: "john"}, {name: "joe"}, {name: "cameron"}, {name: "ryan"}];
    res.render("index.ejs", {people: data});
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