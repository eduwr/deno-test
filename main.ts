import * as path from "https://deno.land/std@0.168.0/path/mod.ts";
import { Ask } from "./Ask/Ask.ts";
import { FileStorage } from "./FileStorage/FileStorage.ts";

const ask = new Ask();
const _path = path.resolve(".", "storage", "storage.json");
const storage = new FileStorage(_path);

await storage.init();

const answers = await ask.prompt([{
  message: "What's your current weight?",
  name: "weight",
}]);

const newDB = await storage.save(answers);

console.log(newDB);
