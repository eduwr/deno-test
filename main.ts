import { Ask } from "./Ask/Ask.ts";

const ask = new Ask();

const answers = await ask.prompt([{
  message: "What do you want to do?",
  name: "todo",
}, {
  message: "Do you wanna hang out?",
  name: "hangOut",
}]);

try {
  const storage = await Deno.readTextFile("./storage/storage.json");

  console.log("storageString", storage);

  const storageDb = JSON.parse(storage);

  console.log("StorageDB", storageDb);

  answers.forEach((answer) => storageDb.push(answer));

  await Deno.writeTextFile(
    "./storage/storage.json",
    JSON.stringify(storageDb),
  );
} catch (e) {
  console.log("File not found!", e);

  await Deno.writeTextFile(
    "./storage/storage.json",
    JSON.stringify(answers, null, 2),
  );
}
