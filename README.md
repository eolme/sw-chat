# Proof-of-Concept

> Minimum example without dependencies for FrontendConf 2022

## Requirements

- Node.js LTS (16.x)
- Yarn berry (3.x)

## Run

```sh
yarn install
yarn start
```

## Logs

```sh
[1]   Your application is ready~! 🚀
[1] 
[1]   - Local:      http://localhost:8080
[1]   - Network:    Add `--host` to expose
[1] 
[1]  LOGS 
[1] 
[0] listen
[1]   [01:33:03] 200 ─ 3.73ms ─ /
[1]   [01:33:03] 200 ─ 0.76ms ─ /index.css
[1]   [01:33:03] 200 ─ 1.32ms ─ /index.js
[1]   [01:33:03] 200 ─ 1.30ms ─ /sw.js
[0] --> init {
[0]   jsonrpc: '2.0',
[0]   id: '1gfuaram40.lakbvuhu9h0.fbgjl03ulso',
[0]   method: 'init',
[0]   params: { name: '1gfuaralu0.ov0nr0ohaa80.i1rcv91qo5' }
[0] }
[0] <-- init {"jsonrpc":"2.0","id":"1gfuaram40.lakbvuhu9h0.fbgjl03ulso","result":{"name":"1gfuaralu0.ov0nr0ohaa80.i1rcv91qo5"}}
[1]   [01:33:08] 200 ─ 0.85ms ─ /
[1]   [01:33:08] 200 ─ 0.21ms ─ /index.css
[1]   [01:33:08] 200 ─ 0.82ms ─ /index.js
[1]   [01:33:08] 200 ─ 0.72ms ─ /sw.js
[0] --> init {
[0]   jsonrpc: '2.0',
[0]   id: '1gfuarfqo0.fn9ae6o38b80.1lijb2e4h3g',
[0]   method: 'init',
[0]   params: { name: '1gfuarfqj0.8g3coi7e11o0.mhar4fpk3u' }
[0] }
[0] <-- init {"jsonrpc":"2.0","id":"1gfuarfqo0.fn9ae6o38b80.1lijb2e4h3g","result":{"name":"1gfuarfqj0.8g3coi7e11o0.mhar4fpk3u"}}
[0] --> message {
[0]   jsonrpc: '2.0',
[0]   id: '1gfuarrrd0.0kcqnal0hn80.tvqnu80rkfg',
[0]   method: 'message',
[0]   params: {
[0]     message: 'You are awesome',
[0]     name: '1gfuaralu0.ov0nr0ohaa80.i1rcv91qo5'
[0]   }
[0] }
[0] <-- message {"jsonrpc":"2.0","method":"message","params":{"message":"You are awesome","name":"1gfuaralu0.ov0nr0ohaa80.i1rcv91qo5"}}
```

# Notes

ServiceWorker update and restore is not implemented, it is suggested to use the `unregister` button if something went wrong
