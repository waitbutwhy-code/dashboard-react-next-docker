/* globals window */

const stagingEnv = {
  FIREBASE_API_KEY: `AIzaSyBqTBSDH1SwUMp1d3w_NgoxJEFxvz5Z4Ag`,
  FIREBASE_AUTH_DOMAIN: `syncspot-staging.firebaseapp.com`,
  FIREBASE_DATABASE_URL: `https://syncspot-staging.firebaseio.com`,
  FIREBASE_PROJECT_ID: `syncspot-staging`,
  FIREBASE_STORAGE_BUCKET: `syncspot-staging.appspot.com`,
  FIREBASE_SENDER_ID: `697671764184`,
};

const devEnv = stagingEnv;

const productionEnv = {
  FIREBASE_API_KEY: `AIzaSyB3_QJqFfXVtZD2nUj6aUYQGGhrsL9B03s`,
  FIREBASE_AUTH_DOMAIN: `syncspot-aafad.firebaseapp.com`,
  FIREBASE_DATABASE_URL: `https://syncspot-aafad.firebaseio.com`,
  FIREBASE_PROJECT_ID: `syncspot-aafad`,
  FIREBASE_STORAGE_BUCKET: `syncspot-aafad.appspot.com`,
  FIREBASE_SENDER_ID: `189656861585`,
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
