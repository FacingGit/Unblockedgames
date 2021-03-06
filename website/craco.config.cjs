const { join } = require('path');
require('react-scripts/config/env.js');

const {
	loader: basic_webpack_obfuscator_loader,
} = require('basic-webpack-obfuscator');

const env = ['NODE_ENV', 'REACT_APP_ROUTER', 'REACT_APP_HAT_BADGE'];

/*console.log(
	Object.fromEntries(env.concat('BROWSER').map(env => [env, process.env[env]]))
);*/

module.exports = {
	webpack: {
		/**
		 *
		 * @param {import('webpack').Configuration} config
		 * @returns {import('webpack').Configuration}
		 */
		configure(config) {
			config.module.rules.push({
				test: /\.js$/,
				loader: 'string-replace-loader',
				options: {
					search: /process\.env\.(\w+)/g,
					replace: (match, menv) => {
						if (env.includes(menv)) {
							return JSON.stringify(process.env[menv]);
						} else {
							return match;
						}
					},
				},
			});

			if (!config.resolve.fallback) {
				config.resolve.fallback = {};
			}

			config.resolve.fallback.process = require.resolve('process/browser');

			if (config.mode === 'production') {
				config.module.rules.push({
					test: /\.js$/,
					enforce: 'post',
					exclude: [join(__dirname, 'node_modules')],
					use: {
						loader: basic_webpack_obfuscator_loader,
						options: {
							salt: 9185,
						},
					},
				});
			}

			return config;
		},
	},
};
