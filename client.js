const net = require("net");

const client = net.createConnection({ port: 8080 }, () => {
  console.log("Client connected");
  client.write("Hello from  node client");
  client.on("data", (serverData) => {
    console.log("data received from server:", serverData.toString());
  });
});
