"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const http = require('http');
const http_1 = __importDefault(require("http"));
const requestListener = function (req, res) {
    res.writeHead(200);
    res.end('Hello, World!');
};
const server = http_1.default.createServer(requestListener);
server.listen(3000, "0.0.0.0", () => {
    console.log("App running on port 3000");
});
