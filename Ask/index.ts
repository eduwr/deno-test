type BegKeys = "name" | "message";
type BegConfig = Record<BegKeys, string>;

export class Ask {
  async ask(params: BegConfig[]) {
    const results = [];
    for (const param of params) {
      results.push(await this.prompt(param));
    }

    console.log(results);
  }

  async prompt({
    message,
    name,
  }: BegConfig) {
    await this.write(message);

    const answer = await this.read();

    console.log(answer);

    return {
      [name]: answer,
    };
  }

  private decode(buffer: Uint8Array, input: number) {
    return new TextDecoder().decode(buffer.subarray(0, input)).trim();
  }

  private write(input: string) {
    return Deno.stdout.write(new TextEncoder().encode(input));
  }

  private async read() {
    const buffer = new Uint8Array(1024);
    const inputArray = await Deno.stdin.read(buffer);

    return inputArray ? this.decode(buffer, inputArray) : "";
  }
}
