import yargs from "https://cdn.deno.land/yargs/versions/yargs-v16.2.1-deno/raw/deno.ts";
import { errorHandler } from "./errorHandler.ts";

export interface Arguments {
  mood: string;
}

const inputArgs: Arguments = yargs(Deno.args)
  .alias("m", "mood")
  .argv;

errorHandler(inputArgs);

console.log("Your mood is: ", inputArgs.mood);
