import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD34XrTNGdi96PSNbgpT_xdcAzmMCMwaBw",
    authDomain: "quickfood-e5a22.firebaseapp.com",
    databaseURL: "https://quickfood-e5a22-default-rtdb.firebaseio.com",
    projectId: "quickfood-e5a22",
    storageBucket: "quickfood-e5a22.appspot.com",
    messagingSenderId: "447906774586",
    appId: "1:447906774586:web:90818255f880091513ff03"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)
  
  const firestore = getFirestore(app)
  const storage = getStorage(app)

  export { app, firestore, storage };