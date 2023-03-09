//import require package
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const app = express();
dotenv.config();

// set cors origin host
app.use(cors({
        origin: process.env.NODE_FRONT_URL
    }
));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

// default route
app.get("/", (req, res) => {
    res.json( "Welcome to Jolimoi back-end.");
});

// import of other routes
require("./app/routes/numberToRomain.route.js")(app);
require("./app/routes/sse.route.js")(app);

// set port, listen for requests
const PORT = process.env.NODE_PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});