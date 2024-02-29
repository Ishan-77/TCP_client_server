const net = require("net");

const server = net.createServer((socket) => {
  socket.on("data", (clientData) => {
    console.log("data received from client:", clientData.toString());
  });
  socket.write("received on server,thanks");
});

server.listen(8080, () => {
  console.log("server is up on port 8080");
});
