import { App, DISABLED } from 'uws';

const app = App()

const clients = new Map();
const decoder = new TextDecoder('utf-8');

const respond = (payload) => {
  const result = Object.assign({}, payload);
  result.result = result.params;
  delete result.params;
  delete result.method;
  return JSON.stringify(result);
};

const notify = (payload) => {
  const result = Object.assign({}, payload);
  delete result.id;
  return JSON.stringify(result);
};
  
app.ws('/ws', {
  compression: DISABLED,
  message(socket, message) {
    const content = decoder.decode(message);
    const payload = JSON.parse(content);
    
    switch (payload.method) {
      case 'init':
        console.log('--> init', payload);
        clients.set(payload.params.name, socket);
        socket.send(respond(payload), false, false);
        console.log('<-- init', respond(payload));
        return;
      case 'message':
        console.log('--> message', payload);
        socket.send(respond(payload), false, false);
        const response = notify(payload);
        clients.forEach((client) => {
          try {
            client.send(response, false, false);
          } catch {
            // ignore
          }
        });
        console.log('<-- message', response);
        return;
    }
  }
});

app.listen('127.0.0.1', 8888, () => {
  console.log('listen');
});
