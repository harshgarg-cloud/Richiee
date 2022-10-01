import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAwuZiwDaAhYR4NA1RaYpfhrcr2ZzAnK6I",
  authDomain: "testing1-2c976.firebaseapp.com",
  projectId: "testing1-2c976",
  storageBucket: "testing1-2c976.appspot.com",
  messagingSenderId: "538428278406",
  appId: "1:538428278406:web:870b8c2b84ed09b75bf307",
  measurementId: "G-X64FR054JY"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


const firestore = app.firestore();
// export const database = {
//   formatDocument: (doc) => ({ id: doc.id, ...doc.data() }),
//   getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
//   // files: (userId) => firestore.collection("gd").doc(userId).collection("files"),
//   // materials: () => firestore.collection("gc-materials"),
//   todos: () => firestore.collection("todos"),
//   users: () => firestore.collection("users"),
// };
// console.log(firebase);

export const auth = app.auth();
export const storage = app.storage();
export default app;