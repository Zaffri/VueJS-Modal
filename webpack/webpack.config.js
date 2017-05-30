/**
 * @name VueJS Modal Component
 * @description NodeJS file for Modal demo.
 * @version 1.0.0
 * @author Steven Morrison <https://github.com/Zaffri>
 */

module.exports = {
    entry: '../demos/js/main.js',
    output: {
        filename: '../demos/js/bundle.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
 
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
};