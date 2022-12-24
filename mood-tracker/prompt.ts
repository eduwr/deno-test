// import Ask from "https://deno.land/x/ask@1.0.6/mod.ts";

import { Beg } from "./Beg.ts";

// const ask = new Ask({
//   prefix: ">",
// });

// const answers = await ask.prompt([
//   {
//     name: "name",
//     message: "Your name:",
//     type: "input",
//   },
//   {
//     name: "age",
//     message: "Your age:",
//     type: "number",
//     prefix: "?",
//   },
//   {
//     name: "mood",
//     message: "Are you feeling well today?",
//     type: "confirm",
//   },
// ]);

// console.log(answers);

const beg = new Beg();

beg.beg([
  { name: "name", message: "What's your name?" },
  { name: "age", message: "What's your age?" },
]);
