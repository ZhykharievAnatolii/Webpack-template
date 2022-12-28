import {resolve,dirname} from 'path';
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

    ]
};
export default webpackConfig;
