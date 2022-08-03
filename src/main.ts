import * as http from "http"

import { Controller } from "./lib/http/controller";


const requestListener = function (req: any, res: any) {
  res.writeHead(200);
  res.end('Hello, World!');
}

const server = http.createServer(requestListener);
server.listen(5002, "0.0.0.0", () => {
	console.log("App running on port 303")
});






// Here HMR story begins
declare const module: any;



// You need only 3 lines of code to start accepting code changes coming through the HMR
if (module.hot) {
    module.hot.accept();
    // Next callback is essential: After code changes were accepted     we need to restart the app. server.close() is here Express.JS-specific and can differ in other frameworks. The idea is that you should shut down your app here. Data/state saving between shutdown and new start is possible
    module.hot.dispose(() => server.close());
}


const c = new Controller()