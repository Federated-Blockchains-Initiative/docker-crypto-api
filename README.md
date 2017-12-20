# wonderlic/crypto-api

### Links

* github: [https://github.com/wonderlic/docker-crypto-api](https://github.com/wonderlic/docker-crypto-api)
* docker hub: [https://registry.hub.docker.com/u/wonderlic/crypto-api/](https://registry.hub.docker.com/u/wonderlic/crypto-api/)

### Description

This docker image will start a node.js webserver with the following routes:

GET /heartbeat - can be used as a health check with a load balancer (i.e. AWS ALB) to verify the service is still up and running.
GET /current - returns a JSON document with the current BTC, BCH, ETH, and LTC prices from Coinbase
GET /current/BTC - returns a JSON document with the current BTC prices from Coinbase
GET /current/BCH - returns a JSON document with the current BCH prices from Coinbase
GET /current/ETH - returns a JSON document with the current ETH prices from Coinbase
GET /current/LTC - returns a JSON document with the current LTC prices from Coinbase

### Usage

```
docker run \
  -e PORT=... \
  wonderlic/crypto-api
```

If not set:
*  PORT defaults to 8080
