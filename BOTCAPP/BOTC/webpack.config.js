/* Webpack configuration file for the BOTC script tool */
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: {
        app: '/src/js/app.js',
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'js/[name].bundle.js', // Output JS files in js/ folder
        assetModuleFilename: "images/[name][ext]",
        clean: true
    },
    target: 'web',
    devServer: { 
      static: "./dist"
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(svg|eot|ttf|woff|woff2)$/i,
                type: "asset/resource"
            },
            {
                test: /\.(png|jpg|gif)$/i,
                type: "asset/resource"
            },
            {
                test: /\.html$/i, // Add loader for HTML files
                loader: "html-loader",
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Use the index.html as template
            filename: 'index.html',
            chunks: ['app'], // Include app.js in index.html
            inject: 'body',
        }),
        // Add more HtmlWebpackPlugin instances for other HTML files if needed
    ],
    resolve: {
        fallback: {
            "fs": false, // Add this line
            // ... other fallbacks ...
        }
    }
};