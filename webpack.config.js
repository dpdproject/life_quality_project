const path = require('path');

module.exports = {
    mode: 'production',
    entry: ['./src/js/searchUI.js', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js',
    },
    module: {
        rules : [
            { test: /\.css$/i, use: ['style-loader' ,'css-loader']},
            {
                test: /\.m?js$/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
        ],
    },
};