const http = require("http"); // http runs on application layer hence browser access availaible

const server = http.createServer((req, res) => {
  console.log("New connection was created");
  console.log(req);
  if (req.url == "/home") {
    res.end("welcome home");
  } else {
    res.end("Something some..");
  }
});

server.listen(3000, () => {
  console.log("Server started at port 3000");
});
