import firebase from "firebase";
import env from "../env";

const config = {
  apiKey: env.FIREBASE_API_KEY,
  authDomain: env.FIREBASE_AUTH_DOMAIN,
  databaseURL: env.FIREBASE_DATABASE_URL,
  projectId: env.FIREBASE_PROJECT_ID,
  storageBucket: env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.FIREBASE_SENDER_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
