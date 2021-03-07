import firebase from 'firebase';
import "firebase/auth";
import "firebase/database";
import 'firebase/app'
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDJTH1y7zy4YDW_bo4w_VuYRwNWO17C6pc",
  authDomain: "healthy-habits-cb62c.firebaseapp.com",
  databaseURL: "https://healthy-habits-cb62c-default-rtdb.firebaseio.com",
  projectId: "healthy-habits-cb62c",
  storageBucket: "healthy-habits-cb62c.appspot.com",
  messagingSenderId: "428463524670",
  appId: "1:428463524670:web:2ff2af4d084b674bfd7a6f",
  measurementId: "G-PRJM39MQYG"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

var user = null;

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider()

export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider).then((res) => {
    // console.log(res.user)
    return res.user;
  }).catch((error) => {
    console.log(error.message)
  })
}

export const getUser = user;

export const logOut = () => {
  console.log("attempung log out");
  auth.signOut().then(()=> {
    console.log('logged out')
    user = null;
  }).catch((error) => {
    console.log(error.message)
  })
}

export const writeUserData = (data) => {
  var defaultDatabase = firebase.database();
  let ref = defaultDatabase.ref("/")
  let newWorkout = ref.child("workouts").push();
  newWorkout.set(data)
  console.log(data);
}

export const getUserData = () => {
  let ref = firebase.database().ref("/");
  ref.on("value", snapshot => {
    const state = snapshot.val();
    this.setState(state);
  });
};

