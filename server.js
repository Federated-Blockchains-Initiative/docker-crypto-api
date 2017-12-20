const http = require('http');

const quotes = require('./quotes');

const app = new http.Server();

app.on('request', (req, res) => {
  switch (`${req.method} ${req.url}`) {
    case 'GET /heartbeat' :
      return res.send('alive');
    case 'GET /current':
      return res.json({BTC: quotes.getPrice('BTC'), BCH: quotes.getPrice('BCH'), ETH: quotes.getPrice('ETH'), LTC: quotes.getPrice('LTC')});
    case 'GET /current/BTC':
      return res.json({BTC: quotes.getPrice('BTC')});
    case 'GET /current/BCH':
      return res.json({BCH: quotes.getPrice('BCH')});
    case 'GET /current/ETH':
      return res.json({ETH: quotes.getPrice('ETH')});
    case 'GET /current/LTC':
      return res.json({LTC: quotes.getPrice('LTC')});
    default:
      return res.error(404, 'Not Found');
  }
});

const port = process.env.PORT || '8080';
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

http.ServerResponse.prototype.error = function(code, message) {
  this.writeHead(code || 500, {'Content-Type': 'text/plain'});
  this.write(message);
  this.end('\n');
};

http.ServerResponse.prototype.send = function(text) {
  this.writeHead(200, {'Content-Type': 'text/plain'});
  this.write(text);
  this.end('\n');
};

http.ServerResponse.prototype.json = function(obj) {
  this.writeHead(200, {'Content-Type': 'application/json'});
  this.write(JSON.stringify(obj));
  this.end('\n');
};
