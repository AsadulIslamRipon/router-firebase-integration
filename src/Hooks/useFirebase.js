import { useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut} from "firebase/auth";
import app from "../firebase.init";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () =>{
    const [user, setUser] = useState({});


    const signInWithGoogle = () =>{
        signInWithPopup( auth, googleProvider)
        .then( result => {
            console.log(result.user);
            setUser(result.user);
        })
        .catch( error =>{
            console.log(error);
        })
    }

    const handleSignOut = () =>{
        signOut(auth)
        .then( () =>{

        })
    }

    useEffect( () =>{
        onAuthStateChanged( auth, user =>{
            setUser(user);
        })
    } ,[])

    return {
        user,
        handleSignOut, 
        signInWithGoogle
    }
}

export default useFirebase;