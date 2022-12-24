const server = Deno.listen({ port: 3214 });

for await (const conn of server) {
  (async () => {
    const httpConn = Deno.serveHttp(conn);
    for await (const requestEvent of httpConn) {
      // ... handle requestEvent ...
      console.log(requestEvent);
      requestEvent.respondWith(
        new Response(JSON.stringify({ msg: "response" })),
      );
    }
  })();
}
