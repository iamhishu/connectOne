import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import fastify from "fastify";
const app = fastify();
console.log("re-starting__");
app.listen({port:parseInt(process.env.PORT!)})