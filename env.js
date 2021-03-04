/* globals window */

const stagingEnv = {

};

const devEnv = stagingEnv;

const productionEnv = {

};

let staging = null;
let dev = null;

// Check if this is a static bundle by detecting if there is a window object
// If it doesn't exist, then we know we are in development
// Otherwise, check the URL to see if we are in dev, staging, or production

if (typeof window === `undefined`) {
  dev = true;
} else {
  dev = window.location.toString().includes(`localhost`);
  staging = window.location.toString().includes(`staging`);
}

// eslint-disable-next-line import/no-mutable-exports
let env = {};

if (dev) {
  env = devEnv;
} else {
  env = staging ? stagingEnv : productionEnv;
}

export default env;
