const { Transform } = require('stream');

class HeaderHostTransformer extends Transform {
  constructor(opts = {}) {
    super(opts);
    this.host = opts.host || 'localhost';
    this.replaced = false;
  }

  _transform(data, encoding, callback) {
    // Always passthrough data unchanged, even the first time
    callback(null, data);
  }
}

module.exports = HeaderHostTransformer;
