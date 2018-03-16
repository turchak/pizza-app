const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';



const copyHtml = new CopyWebpackPlugin([
    // {
    //     from: 'src/index.html',
    //     to: '../../index.html'
    // },
    {
        from: 'src/assets/img',
        to: '../img'
    }
]);



const config = {

    entry: {
        app: './src/assets/js/index.js'
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist', 'assets', 'js')
    },

    devtool: 'source-map',

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    },

    module: {
        rules: 
        [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }],
                fallback: 'style-loader',
            })
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: [['env', {
                            'targets': {
                                browsers: ['last 2 versions', 'ie >= 11']
                            }
                        }]]
                    }
                }
            ]
        }
        ]
    },

    plugins: []
};


if (isProduction) {
    config.plugins = config.plugins.concat([
        
        new ExtractTextPlugin(
            {
                filename: (getPath) => {
                    return getPath('../css/[name].css').replace('css/js', 'css');
                },
                allChunks: true
            }
        ),
        copyHtml
    ]);
} else {
    config.plugins = config.plugins.concat([
        new ExtractTextPlugin(
            {
                filename: (getPath) => {
                    return getPath('../css/[name].css').replace('css/js', 'css');
                },
                allChunks: true,
                disable: true
            }
        ),
        copyHtml
    ]);

    config.devServer = {
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/assets/js',
        port: 9000
        // proxy: {
        //     '/data': 'http://localhost:9000'
        // }
    };
}

module.exports = config;