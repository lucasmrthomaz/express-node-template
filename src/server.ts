/**
 MAIN SERVER OF NODE APPLICATION
**/
import {app} from "./app";
import * as dotenv from "dotenv";

// Sets a dotenv variable to be used in the application.
dotenv.config();
const EXPRESS_PORT = process.env.EXPRESS_PORT;

// Server listening on port 3000 by default or described by ENV.
app.listen( EXPRESS_PORT || 3000);
console.log("--- Node Express Backend Server ---\nRunning at PORT: " + process.env.EXPRESS_PORT );
