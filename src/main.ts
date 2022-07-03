// const http = require('http');
import http from "http"

const requestListener = function (req: any, res: any) {
  res.writeHead(200);
  res.end('Hello, World!');
}

const server = http.createServer(requestListener);
server.listen(5002, "0.0.0.0", () => {
	console.log("App running on port 3000")
});