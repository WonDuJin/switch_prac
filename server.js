const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer(function (req, res) {
  const pokemon = fs.readFileSync("./switch.js", (err) => {
    if (err) throw err;
  });
  if (req.method === "GET") {
    if (req.url === "/switch.js") {
      console.log("스위치파일");

      res.writeHead(200, { "content-Type": "text/javascript" });
      res.write(pokemon);
      res.end();
    }
    console.log(req.url);
  }
});

server.listen(5678, (err) => {
  console.log("서버 가동중");

  if (err) throw err;
});
