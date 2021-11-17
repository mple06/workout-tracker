//front page - routing everything 
const express = require("express");
const mongoose = require("mongoose");
// what does this do?
const logger = require("morgan");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger("dev"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutDb", { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true, });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(require("./routes/views.js"))

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`);
});

