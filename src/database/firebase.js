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

export const signInWithGoogle = (setUser) => {
  auth.signInWithPopup(googleProvider).then((res) => {
    const { displayName, email, uid, photoURL } = res.user;
    let user = {
      displayName, email, uid, photoURL
    }
    console.log(user);
    localStorage.setItem("user", JSON.stringify(user))
    setUser("logged in");
  }).catch((error) => {
    console.log(error.message)
  })
}

export const getUser = () => {
  auth.onAuthStateChanged(async userData => {
    const { displayName, email, uid, photoURL } = userData;
    let user = {
      displayName, email, uid, photoURL
    }
    console.log(user);
    return user;
  })
  // if(auth.currentUser){
    
  // }else{
  //   return null;
  // }
}

export const logOut = (setuser) => {
  auth.signOut().then(()=> {
    localStorage.setItem("user", null)
    setuser("not logged in");
    user = null;
  }).catch((error) => {
    console.log(error.message)
  })
}

export const writeUserData = (data) => {
  var defaultDatabase = firebase.database();
  let ref = defaultDatabase.ref("/")
  let newWorkout = ref.child(`workouts/${data.user}`).push();
  newWorkout.set(data)
  console.log(data);
}

export const getUserData = (user, callback) => {
  var defaultDatabase = firebase.database();
  let ref = defaultDatabase.ref("/");
  let workouts = ref.child(`workouts/${user.uid}`);
  workouts.on('value', (snapshot) => {
    callback(snapshot.val());
  })
  // ref.on("value", snapshot => {
  //   const state = snapshot.val();
  //   this.setState(state);
  // });
};
