import React, { useState, useEffect, createContext } from "react";
import { auth } from "../database/firebase";
export const UserContext = createContext({ user: null });
export default (props) => {
  const [user, setuser] = useState(null);
  useEffect( () => {
    auth.onAuthStateChanged(async (userData) => {
      if (userData) {
        if(auth.currentUser.email){
          const { displayName, email, uid } = userData;
          console.log(auth.currentUser);
          if(userData){
            // setuser({
            //   displayName,
            //   email,
            //   uid
            // });
          }
        }else{
          // setuser(null)
        }
      }
    });


  }, []);
  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};
