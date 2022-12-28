export class FileStorage<T = Record<string, any>> {
  db: T[];

  constructor(private path: string) {
    this.db = [];
  }

  async init() {
    console.log(this.path);
    try {
      const storage = await this.readStorage();
      console.log({ storage });
      this.db = JSON.parse(storage);
      console.log(this.db);
    } catch (error) {
      console.log("Storage file not found!");
      console.log("Creating new empty Storage...");

      await Deno.writeTextFile(
        this.path,
        JSON.stringify([]),
      );
    }
  }

  async save(inputs: T[]) {
    this.db = this.db.concat(inputs);
    await this.writeStorage(JSON.stringify(this.db));
    return this.db;
  }

  readStorage() {
    return Deno.readTextFile(this.path);
  }

  async writeStorage(payload: string) {
    await Deno.writeTextFile(
      this.path,
      payload,
    );
  }
}

// "./storage/storage.json"
