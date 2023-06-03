const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (config) => {
    return new HtmlWebpackPlugin({
        hash: true,
        filename: 'index.html',
        templateContent: `
        <!DOCTYPE html>
        <html lang="ru">
            <head><meta charset="utf-8"><title>Lesson 02</title></head>
            <body><div id="app"></div></body>
        </html>`,
    })
}
