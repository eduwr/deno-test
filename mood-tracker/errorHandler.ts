import { Arguments } from "./index.ts";

const errorMessages: { [k: string]: string } = {
  mood: "Provide your mood today (Mood:) value using --mood [-mood] parameter",
};

export const errorHandler = (inputArgs: Arguments) => {
  const errors = Object.keys(errorMessages)
    .map((key) =>
      Object.keys(inputArgs).includes(key) ? undefined : errorMessages[key]
    )
    .filter(Boolean) as string[];

  if (errors.length > 0) {
    errors.forEach((error) => console.log(error));
    console.log(
      "Proper program usage is: deno run --allow-env --allow-net index.ts -m Happy",
    );
    Deno.exit(1);
  }
};
