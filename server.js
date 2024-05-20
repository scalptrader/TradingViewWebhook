const express = require("express");
const routes = require("./routes");
const bodyParser = require('body-parser');

var logger = require("./logger");

// App
const app = express();

app.use(bodyParser.json());

// Set port
const port = process.env.PORT || "80";
app.set("port", port);

app.use('/', routes);

// Server
app.listen(port, () => {
    logger.info(`Server running on localhost:${port}`);
    console.log(`Server running on localhost:${port}`)
})
