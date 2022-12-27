import {resolve,dirname} from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
// import {dirname} from 'path';

const webpackConfig={
    entry: './src/index.js',
    output: {

    }
};
export default webpackConfig;
