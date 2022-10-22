import { prodConfig } from './prod';
import { devConfig } from './dev';
import { stagingConfig } from './staging';

let configToUse = devConfig;

if (process.env.NODE_ENV === 'staging') {
  configToUse = stagingConfig
}

if (process.env.NODE_ENV === 'production') {
  configToUse = prodConfig
}

export default configToUse