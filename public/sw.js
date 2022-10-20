const random = () =>
  Date.now().toString(32) +
  Math.random().toString(32) +
  Math.random().toString(32);

addEventListener('install', () => skipWaiting());
addEventListener('activate', (event) => event.waitUntil(clients.claim()));
addEventListener('message', (event) => {
  clients.claim().then(() => {
    event.source.postMessage('pong');
  });
});

const send = (message) => {
  clients.matchAll().then((clients) => {
    clients.forEach((client) => {
      client.postMessage(message);
    });
  });
};

const instance = random();

const ready = new Promise((resolve) => {
  const socket = new WebSocket(`ws://localhost:8888/ws`);
  socket.onmessage = (event) => {
    const message = JSON.parse(event.data);

    if (message.method === 'message') {
      send({
        type: message.params.name === instance ? 'own' : 'peer',
        message: message.params.message
      });
    }
  };
  socket.onopen = () => resolve(socket);
});

/** @returns {Request} */
const toRequest = (request) => typeof request === 'string' ? new Request(request) : request;

const PART = '/rpc/';
const toMethod = (url) => url.slice(url.indexOf(PART) + PART.length);
const isRPC = (url) => url.includes(PART);

const rpc = (method, params) => {
  return ready.then((socket) => {
    return new Promise((resolve) => {
      const id = random();

      const handle = (event) => {
        const message = JSON.parse(event.data);

        if (message.id === id) {
          socket.removeEventListener('message', handle);
          
          resolve(new Response(event.data, {
            status: 200
          }));
        }
      };

      socket.addEventListener('message', handle);

      socket.send(JSON.stringify({
        jsonrpc: "2.0",
        id,
        method,
        params: Object.assign(params, {
          name: instance
        })
      }));
    });
  });
};

addEventListener('fetch', (event) => {
  const request = toRequest(event.request);

  if (isRPC(request.url)) {
    return event.respondWith(request.json().then((params) => {
      return rpc(toMethod(request.url), params);
    }));
  }
});
