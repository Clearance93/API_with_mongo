const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");



dotenv.config();


mongoose.connect(process.env.MONGO_URL, 
    { useNewUrlParser: true, useUnifiedTopology: true}, () => {
        console.log("Connection was successful")
    });

    app.get("/", (req, res) => {
        res.send("Welcome to home page...! ")
    })

    app.get("/user", (req, res) => {
        res.send("Welcome to user page..!!!")
    })
 
    app.use(express.json());
    app.use(helmet());
    app.use(morgan("common"));


    app.use("/api/users", userRoutes);
    app.use("/api/auth", authRoutes);


app.listen(1993, () => {
    console.log("Server is listining at port 1993...");
})