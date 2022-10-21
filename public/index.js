const main = document.getElementsByTagName('main')[0];
const form = document.getElementsByTagName('form')[0];
const button = form.getElementsByTagName('button')[0];
const input = form.getElementsByTagName('input')[0];
const unregister = document.getElementsByTagName('button')[0];

const create = (type, message) => {
  const elem = main.appendChild(document.createElement('div'));
  elem.className = type;
  elem.textContent = message;
};

const rpc = (type, body) => {
  return fetch(`/rpc/${type}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json'
    }
  }).then((response) => response.json());
};

input.onkeyup = (event) => {
  if (event.key === 'Enter' && input.value !== '') {
    button.click();
  }
};

form.onsubmit = (event) => {
  event.preventDefault();

  const message = input.value;

  if (message === '') {
    return;
  }

  input.value = '';
  button.disabled = true;

  rpc('message', {
    message
  }).then(() => {
    create('service', 'message sent');
  }).finally(() => {
    button.disabled = false;
  });
    
  return false;
};

unregister.onclick = () => {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    return Promise.all(registrations.map((registration) => registration.unregister()))
  }).finally(() => {
    location.reload();
  });
};

Promise.all([
  navigator.serviceWorker.ready,
  navigator.serviceWorker.register('/sw.js')
]).then(([registration]) => {
  let worker = null;

  if (navigator.serviceWorker.controller !== null) {
    worker = navigator.serviceWorker.controller;
  }

  if (registration.active !== null) {
    worker = registration.active;
  }

  if (registration.waiting !== null) {
    worker = registration.waiting;
  }

  if (registration.installing !== null) {
    worker = registration.installing;
  }

  if (worker == null) {
    alert('ServiceWorker not supported');
    return;
  }

  worker.postMessage('ping');
  setInterval(() => {
    worker.postMessage('ping');
  }, 1000);

  let initialized = false;

  navigator.serviceWorker.addEventListener('message', (event) => {
    if (event.data === 'pong') {
      if (!initialized) {
        rpc('init', {}).then(() => {
          initialized = true;
          unregister.hidden = true;
          button.disabled = false;
        });
      }

      return;
    }

    create(event.data.type, event.data.message);
  });


}).catch(() => {
  alert('ServiceWorker not supported');
});
