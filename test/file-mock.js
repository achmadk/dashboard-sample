const path = require('path')

require.extensions['.jpg'] = function () {
  return null
}

module.exports = {
  process (src, filename, config, options) {
    return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';'
  }
}
