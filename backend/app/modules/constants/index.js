const devConfig = require('../../../config/dev.json');
const prodConfig = require('../../../config/dev.json');

module.exports = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
