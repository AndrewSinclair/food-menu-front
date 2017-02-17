module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: './',
        publicPath: 'public'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: __dirname,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
