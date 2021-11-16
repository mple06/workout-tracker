//front page - routing everything 
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3001;

const routes = require("./controllers")

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(routes)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`);
});

