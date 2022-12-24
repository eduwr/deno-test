const command = `the command to run`;
const p = Deno.run({
  cmd: ["echo", "Hello"],
  stdin: "piped",
  stdout: "piped",
  stderr: "piped",
});
await p.stdin.write(new TextEncoder().encode(command));
await p.stdin.close(); // It seems this is needed, because the process just hangs, but i don't want to close stdin do i?
const rawOutput = new TextDecoder().decode(await p.output());
