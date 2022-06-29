const url = Deno.args[0];
const res = await fetch(url);
const body = new Uint8Array(await res.arrayBuffer());
await Deno.stdout.write(body);

// CMD To Run This File
// deno run --allow-net=https://example.com test.js https://example.com