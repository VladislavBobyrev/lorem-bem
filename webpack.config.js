const { resolve } = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const PostCssPresetEnv = require("postcss-preset-env")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

const mode = process.env.NODE_ENV || "development"

module.exports = {
	mode: mode,
	entry: resolve("src/js/index.js"),

	output: {
		path: resolve("dist"),
		clean: true,
	},

	devServer: {
		port: 8080,
		open: true,
		hot: true,
	},

	plugins: [
		new HtmlWebpackPlugin({ template: "/src/index.html" }),
		new CopyPlugin({
			patterns: [
				{
					from: "public",
					to: resolve("dist", "public"),
				},
			],
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.html$/,
				loader: "html-loader",
			},
			{
				test: /\.(c|sc|sa)ss$/i,
				use: [
					mode === "development" ? "style-loader" : MiniCssExtractPlugin.loader,
					"css-loader",
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: { plugins: [PostCssPresetEnv] },
						},
					},
					"sass-loader",
				],
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
		],
	},
}
