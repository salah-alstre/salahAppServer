const http = require("http");
const app = require("./App");
const port = 7000;//local
const server = http.createServer(app);
module.exports = server;
app.listen(port);
