import {resolve,dirname,join} from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from "html-webpack-plugin";
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
    })
    ],
    devServer: {
        port:4021,
        static:{
            directory:join(__dirname,'src')
        }
    },
    module:{
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ]
    }
};
export default webpackConfig;
