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
[1]   [00:57:25] 200 ─ 4.00ms ─ /
[1]   [00:57:25] 200 ─ 0.81ms ─ /index.css
[1]   [00:57:25] 200 ─ 1.41ms ─ /index.js
[0] --> init {
[0]   jsonrpc: '2.0',
[0]   id: '1gfu8q3760.d038vphbqd0.fkfi6iagv2o',
[0]   method: 'init',
[0]   params: { name: '1gfu8q3580.5ah9fkd9jmo0.m6oroc8dgd' }
[0] }
[0] <-- init {"jsonrpc":"2.0","id":"1gfu8q3760.d038vphbqd0.fkfi6iagv2o","result":{"name":"1gfu8q3580.5ah9fkd9jmo0.m6oroc8dgd"}}
[1]   [00:57:27] 200 ─ 0.93ms ─ /sw.js
[1]   [00:57:29] 200 ─ 0.86ms ─ /
[1]   [00:57:29] 200 ─ 1.20ms ─ /index.css
[1]   [00:58:35] 200 ─ 0.56ms ─ /
[1]   [00:58:35] 200 ─ 0.57ms ─ /index.css
[1]   [00:58:35] 200 ─ 0.81ms ─ /index.js
[0] --> init {
[0]   jsonrpc: '2.0',
[0]   id: '1gfu8s71d0.bh0dh4livl80.072qkg9kg9',
[0]   method: 'init',
[0]   params: { name: '1gfu8q3580.5ah9fkd9jmo0.m6oroc8dgd' }
[0] }
[0] <-- init {"jsonrpc":"2.0","id":"1gfu8s71d0.bh0dh4livl80.072qkg9kg9","result":{"name":"1gfu8q3580.5ah9fkd9jmo0.m6oroc8dgd"}}
[1]   [00:58:37] 200 ─ 0.98ms ─ /sw.js
[1]   [00:59:46] 200 ─ 0.61ms ─ /
[1]   [00:59:46] 200 ─ 0.39ms ─ /index.css
[1]   [00:59:46] 200 ─ 0.72ms ─ /index.js
[1]   [00:59:46] 200 ─ 0.40ms ─ /sw.js
[0] --> init {
[0]   jsonrpc: '2.0',
[0]   id: '1gfu8uces0.drh6fs6atj0.125o0gpepm',
[0]   method: 'init',
[0]   params: { name: '1gfu8ucdr0.q5ssu91hf2g0.8vv9bo8ovao' }
[0] }
[0] <-- init {"jsonrpc":"2.0","id":"1gfu8uces0.drh6fs6atj0.125o0gpepm","result":{"name":"1gfu8ucdr0.q5ssu91hf2g0.8vv9bo8ovao"}}
[1]   [00:59:49] 200 ─ 0.52ms ─ /
[1]   [00:59:49] 200 ─ 0.70ms ─ /index.css
[1]   [01:00:26] 200 ─ 0.61ms ─ /
[1]   [01:00:26] 200 ─ 0.55ms ─ /index.css
[1]   [01:00:26] 200 ─ 0.63ms ─ /index.js
[0] --> init {
[0]   jsonrpc: '2.0',
[0]   id: '1gfu8vj9b0.3gn150qmjkg0.sf4rfv240e8',
[0]   method: 'init',
[0]   params: { name: '1gfu8q3580.5ah9fkd9jmo0.m6oroc8dgd' }
[0] }
[0] <-- init {"jsonrpc":"2.0","id":"1gfu8vj9b0.3gn150qmjkg0.sf4rfv240e8","result":{"name":"1gfu8q3580.5ah9fkd9jmo0.m6oroc8dgd"}}
[1]   [01:00:27] 200 ─ 0.77ms ─ /sw.js
[1]   [01:00:28] 200 ─ 0.34ms ─ /
[1]   [01:00:28] 200 ─ 0.59ms ─ /index.css
[0] --> message {
[0]   jsonrpc: '2.0',
[0]   id: '1gfu8vrm50.ujmcs5gm550.r7euv7fh7eo',
[0]   method: 'message',
[0]   params: {
[0]     message: 'You are awesome',
[0]     name: '1gfu8q3580.5ah9fkd9jmo0.m6oroc8dgd'
[0]   }
[0] }
[0] <-- message {"jsonrpc":"2.0","method":"message","params":{"message":"You are awesome","name":"1gfu8q3580.5ah9fkd9jmo0.m6oroc8dgd"}}
[1]   [01:02:23] 200 ─ 0.46ms ─ /
[1]   [01:02:23] 200 ─ 0.32ms ─ /index.css
[1]   [01:02:23] 200 ─ 0.61ms ─ /index.js
[0] --> init {
[0]   jsonrpc: '2.0',
[0]   id: '1gfu935jb0.qk69apmagf0.idf7l7di0a8',
[0]   method: 'init',
[0]   params: { name: '1gfu8ucdr0.q5ssu91hf2g0.8vv9bo8ovao' }
[0] }
[0] <-- init {"jsonrpc":"2.0","id":"1gfu935jb0.qk69apmagf0.idf7l7di0a8","result":{"name":"1gfu8ucdr0.q5ssu91hf2g0.8vv9bo8ovao"}}
[1]   [01:02:24] 200 ─ 0.73ms ─ /sw.js
[1]   [01:02:26] 200 ─ 0.42ms ─ /sw.js
[1]   [01:02:26] 200 ─ 0.37ms ─ /
[1]   [01:02:26] 200 ─ 0.35ms ─ /index.css
[1]   [01:02:26] 200 ─ 0.38ms ─ /index.js
[0] --> init {
[0]   jsonrpc: '2.0',
[0]   id: '1gfu9396t0.b84slrjhve80.gkc1s3couk',
[0]   method: 'init',
[0]   params: { name: '1gfu8q3580.5ah9fkd9jmo0.m6oroc8dgd' }
[0] }
[0] <-- init {"jsonrpc":"2.0","id":"1gfu9396t0.b84slrjhve80.gkc1s3couk","result":{"name":"1gfu8q3580.5ah9fkd9jmo0.m6oroc8dgd"}}
[1]   [01:02:28] 200 ─ 0.45ms ─ /
[1]   [01:02:28] 200 ─ 0.42ms ─ /index.css
[1]   [01:02:28] 200 ─ 0.42ms ─ /index.js
[0] --> init {
[0]   jsonrpc: '2.0',
[0]   id: '1gfu93agh0.e16uqnlolgg0.4u7e39dmq2',
[0]   method: 'init',
[0]   params: { name: '1gfu8q3580.5ah9fkd9jmo0.m6oroc8dgd' }
[0] }
[0] <-- init {"jsonrpc":"2.0","id":"1gfu93agh0.e16uqnlolgg0.4u7e39dmq2","result":{"name":"1gfu8q3580.5ah9fkd9jmo0.m6oroc8dgd"}}
[1]   [01:02:28] 200 ─ 1.01ms ─ /sw.js
[1]   [01:02:29] 200 ─ 0.55ms ─ /sw.js
[0] --> message {
[0]   jsonrpc: '2.0',
[0]   id: '1gfu93dc90.g6lk3b6gplo0.417pm36kq1g',
[0]   method: 'message',
[0]   params: {
[0]     message: 'You are awesome',
[0]     name: '1gfu8q3580.5ah9fkd9jmo0.m6oroc8dgd'
[0]   }
[0] }

```

# Notes

ServiceWorker update and restore is not implemented, it is suggested to use the `unregister` button if something went wrong
