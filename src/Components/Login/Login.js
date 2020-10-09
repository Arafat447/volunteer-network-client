import React from 'react';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebase-config';
import { useContext } from 'react';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
const Login = () => {
    const {allUsers} = useContext(userContext);
    const [users,setUsers] = allUsers;
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig)
        }
        const provider = new firebase.auth.GoogleAuthProvider();
        const handleSignIn = () => {
            firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                var user = result.user;
                const { displayName, email, photoURL } = user;
                const newUser = { ...users }
                newUser.name = displayName;
                newUser.email = email;
                newUser.img = photoURL;
                setUsers(newUser);
                history.replace(from);
            }).catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    
        }
        console.log(users);
    return (
        <div className="signIn-container text-center " >
            <div className="signIn-header text-enter  m-auto " >
                <img src="https://i.postimg.cc/SRQ7nGzZ/Group-1329.png" alt="" />
    <h1>{users.name}</h1>
            </div>
            <div className="signIn-body" >
                <div className="w-50 mx-auto p-5 text-center mt-5   " >
                    <h1 className="mb-5" >Login With</h1>
                    <button onClick={handleSignIn} className="btn btn-primary  d-block m-auto  d-flex">
                        <img className="" src="https://i.postimg.cc/q73xCRD3/qMCPtll.png" alt="" />
                        <h4 className="m-2" >
                            Continue With google
                        </h4>
                    </button>
                    <p className="mt-4" >Don't have an account  <a href="/" >Create an account</a> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;