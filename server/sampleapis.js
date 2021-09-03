const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const ApiList = require("./apiList");
// const morgan = require('morgan');
// const corsOptions = require("./cors");

// Express App
const app = express();
const port = process.env.PORT || 2052;


const APIList = require("./apiList");
// JSON Parser

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Static Files
app.use(express.static(path.join(__dirname, "/public")));

// View Engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/views"));

// CORS
app.use(cors());

// For debugging;
// app.use(morgan('dev'));

// Routes
const reset = require("./routes/reset");
const baseApis = require("./routes/base-apis");
const frontend = require("./routes/frontend");

app.use("/frontend", frontend);

const create = require("./routes/create-apis");

app.get("/", (req, res) => {
  res.render("index", {
    apiList: JSON.stringify(ApiList),
    domain: req.headers.host
  });
});

app.use("/reset", reset);
app.use("/create", create);
// app.use("/custom", custom);
app.use("/", baseApis);

// Starting App
app.listen(port, () => {
  console.log(`App is listening on: http://localhost:${port}`);
});
