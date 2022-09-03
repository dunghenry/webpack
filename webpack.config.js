const path = require('path'); //built-in : path, http , fs
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
    }
}