import { writeAllSync } from "https://deno.land/std@0.167.0/streams/write_all.ts";

const url = Deno.args[0];
const res = await fetch(url);

const body = new Uint8Array(await res.arrayBuffer());
await Deno.stdout.write(body);

const decoder = new TextDecoder();
await Deno.writeTextFile("./hello.json", decoder.decode(body));
