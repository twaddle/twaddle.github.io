import path                 from 'path';
import webpack              from 'webpack';
import ExtractTextPlugin    from 'extract-text-webpack-plugin';

const extractCss = new ExtractTextPlugin('css/bundle.css');

const srcDir = path.join(__dirname, './src');
const publicDir = path.join(__dirname, './public');
const nodeModulesDir = path.join(__dirname, './node_modules');

const fontIncludes = [`${nodeModulesDir}/bootstrap`, `${nodeModulesDir}/font-awesome`];

const plugins = [extractCss].concat(process.env.NODE_ENV === 'production'
    ? [
        new webpack.DefinePlugin({'process.env': {'NODE_ENV': JSON.stringify('production')}}),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})
    ]
    : []);

module.exports = {
    debug: process.env.NODE_ENV !== 'production',
    devtool: process.env.NODE_ENV === 'production' ? undefined : 'inline-source-map',

    entry: `${srcDir}/main.jsx`,

    output: {
        path: publicDir,
        publicPath: '/public/',
        filename: 'js/bundle.js'
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    module: {
        preLoaders: [
            {
                loader: 'eslint-loader',
                test: /\.jsx?$/,
                include: srcDir
            }
        ],
        loaders: [
            // Needed to load fonts required by Bootstrap and Font-Awesome
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: 'file?mimetype=application/font-woff&name=fonts/[name].[ext]',          include: fontIncludes},
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: 'file?mimetype=application/font-woff2&name=fonts/[name].[ext]',         include: fontIncludes},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: 'file?mimetype=application/octet-stream&name=fonts/[name].[ext]',       include: fontIncludes},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: 'file?mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]',  include: fontIncludes},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: 'file?mimetype=image/svg+xml&name=fonts/[name].[ext]',                  include: fontIncludes},

            {
                loader: 'babel-loader',
                test: /\.jsx?$/,
                include: srcDir
            },

            {
                loader: extractCss.extract("style-loader", "css-loader!less-loader"),
                test: /.less/,
                include: srcDir
            }
        ]
    },

    plugins
};
