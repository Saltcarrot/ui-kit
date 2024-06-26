const { resolve } = require('path')

module.exports = () => {
	return {
		mode: 'production',
		entry: {
			'config': getPathTo('src/config/index.ts'),
			'lib': getPathTo('src/lib/index.ts'),
			'components': getPathTo('src/components/index.ts')
		},
		output: {
			path: getPathTo('build'),
			filename: '[name].js',
			libraryTarget: 'umd',
			clean: true
		},
		resolve: {
			extensions: [ '.ts', '.tsx' ]
		},
		externals: {
			react: 'react'
		},
		module: {
			rules: [
				{
					test: /\.ts|tsx?$/,
					exclude: /node_modules/,
					loader: 'ts-loader'
				},
				{
					test: /\.pcss$/,
					use: [ 'style-loader', 'css-loader', 'postcss-loader' ]
				}
			]
		}
	}
}

const getPathTo = path => resolve(__dirname, path)