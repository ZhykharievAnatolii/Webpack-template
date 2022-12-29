import {resolve,dirname,join} from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const __dirname = dirname(fileURLToPath(import.meta.url));
// import {dirname} from 'path';

const webpackConfig={
    entry: './src/index.js',
    output: {
        path: resolve(__dirname,'dist'),
        filename: 'build-[fullhash].js',
        clean: true,
    },
    plugins: [
    new HtmlWebpackPlugin({
        template:'./src/index.html'
    }),
        new MiniCssExtractPlugin({
            filename:'index-[fullhash].css'
        })
    ],
    devServer: {
        port:4021,
        static:{
            directory:join(__dirname,'src')
        }
    },
    devtool: 'inline-source-map',
    module:{
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins:["@babel/plugin-transform-runtime"]
                    }
                }
            }
        ]
    }
};
export default webpackConfig;
