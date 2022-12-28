type AskKeys = "name" | "message";
type AskConfig = Record<AskKeys, string>;

export class Ask {
  async prompt<K extends (AskConfig)>(params: K[]) {
    const results = [];
    for (const param of params) {
      results.push(await this.ask(param));
    }

    return results;
  }

  private async ask({
    message,
    name,
  }: AskConfig) {
    await this.write(`${message}\n`);

    const answer = await this.read();

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
