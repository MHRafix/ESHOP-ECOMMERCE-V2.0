import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import firebaseInitialization from "../FirebaseInfo/Firebase.init";

firebaseInitialization();
const useFirebase = () => {
    
    // Take a state for storing the user in the state
    const [loading, setLoading] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    const [err, setErr] = useState('');
    const [user, setUser] = useState({});

    // Take auth provider
    const auth = getAuth();

    // Make provider here
    const googleProvider = new GoogleAuthProvider();

    // Handle google signin using firebase api
    const handleGoogleSignin = () => {
          setLoading(true);
          return signInWithPopup(auth, googleProvider);
    }

    // Handle manualy create account using email and password here
    const handleManualyCreateAccount = (email, password, displayName) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password, displayName)
        .then((userCredential) => {
            const newUser = {email, password, displayName};
            setUser(newUser);
            setOpenAlert(false);
            setErr('');
          }).catch((error) => {
            const errorMessage = error.message;
            setErr(errorMessage);
            setOpenAlert(true);
          })
          .finally(() => setLoading(false));
    };

    // Handle manually login using email and password
    const handleManualyLogin = (email, password) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setErr('');
            setOpenAlert(false);

        }).catch((error) => {
            const errorMessage = error.message;
            setErr(errorMessage);
            setOpenAlert(true);

        })
        .finally(() => setLoading(false));
    };

    // Handle signout
    const handleSignOut = () => {
        setLoading(true);
        signOut(auth)
        .then(() => {
            setUser({});
            setLoading(false);
            setOpenAlert(false);
            setErr('');

        }).catch((error) => {
            const errorMessage = error.message;
            setErr(errorMessage);
            setOpenAlert(true);

        })
        .finally(() => setLoading(false));
    }

    // Use effect for handle changing user 
    useEffect( () => {
        onAuthStateChanged(auth, (user) => {
            if(user){
               setUser(user);
            }
        });
    }, [])


    return {
        handleManualyCreateAccount,
        handleManualyLogin,
        handleGoogleSignin,
        handleSignOut,
        setOpenAlert,
        setLoading,
        openAlert,
        loading,
        setErr,
        user,
        err,
        
    }
};

export default useFirebase;