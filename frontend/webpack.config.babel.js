import devConfig from './webpack.dev.config.js';
import prodConfig from './webpack.prod.config.js';

const ENVIRONMENT = process.env.NODE_ENV;

let env = {};
switch (ENVIRONMENT) {
	case 'development':
		env = devConfig;
		break;
	case 'production':
		env = prodConfig;
		break;
	default:
		env = devConfig;
		break;
}

module.exports = env;
