import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, set, ref, update } from 'firebase/database';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; 

const firebaseConfig = {
  apiKey: "AIzaSyD5V9vx2iZzqly41PlGAEXE7Nr9Dsnz5Z4",
  authDomain: "ezmoney-2466e.firebaseapp.com",
  projectId: "ezmoney-2466e",
  storageBucket: "ezmoney-2466e.appspot.com",
  messagingSenderId: "228050282558",
  appId: "1:228050282558:web:e202f962b83937aac9096f",
  measurementId: "G-REHR2WTPZR"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

function ClearFields() {
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';
  document.getElementById('username').value = '';
}

function SignUp() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var username = document.getElementById('username').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      set(ref(database, 'users/' + user.uid), {
        username: username,
        email: email,
      });

      alert('User created');
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
}

function LogIn() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;


  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      
      const user = userCredential.user;
      const dt = new Date();

      update(ref(database, 'users/' + user.uid), {
        last_login: dt,
      });

      alert('User logged in!');
      
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
}

function LogInWithGoogle() {
  signInWithRedirect(auth, provider);

  getRedirectResult(auth)
    .then((result) => {
      const user = result.user;

      alert(user.displayName);
    })
    .catch((error) => {
      
    });
}

const EntryPage = () => {
  const [currentView, setCurrentView] = useState('signUp');
  const navigate = useNavigate();

  const changeView = (view) => {
    setCurrentView(view);
    ClearFields();
  };

  useEffect(() => {
    // Check if the user is already authenticated
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is authenticated, redirect to a protected route or dashboard
        navigate('/dashboard') // Replace '/dashboard' with the desired URL
      }
    });

    // Clean up the subscription when the component unmounts
    return () => {
      unsubscribe();
    };
  // eslint-disable-next-line
  }, []);

  const renderView = () => {
    switch (currentView) {
      case 'signUp':
        return (
          <form>
            <h2>Sign Up!</h2>
            <fieldset>
              <legend>Create Account</legend>
              <ul>
                <li>
                  <label htmlFor="username">Username:</label>
                  <input type="text" id="username" required />
                </li>
                <li>
                  <label htmlFor="Email">Email:</label>
                  <input type="email" id="email" required />
                </li>
                <li>
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" required />
                </li>
              </ul>
            </fieldset>
            <button type="button" onClick={SignUp}>
              Submit
            </button>
            <button type="button" onClick={() => changeView('logIn')}>
              Have an Account?
            </button>
          </form>
        );

        case 'logIn':
          return (
            <form>
              <h2>Welcome Back!</h2>
              <fieldset>
                <legend>Log In</legend>
                <ul>
                  <li>
                    <label htmlFor="Email">Email:</label>
                    <input type="text" id="email" required />
                  </li>
                  <li>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" required />
                  </li>
                  <li>
                    <i />
                    <a onClick={() => changeView('PWReset')} href="#/">
                      Forgot Password?
                    </a>
                  </li>
                </ul>
              </fieldset>
              <button type="button" onClick={LogIn}>
                Login
              </button>
              <button type="button" onClick={LogInWithGoogle}>
                Sign in with Google
              </button>
              <button type="button" onClick={() => changeView('signUp')}>
                Create an Account
              </button>
            </form>
          );
        case 'PWReset':
          return (
            <form>
              <h2>Reset Password</h2>
              <fieldset>
                <legend>Password Reset</legend>
                <ul>
                  <li>
                    <em>A reset link will be sent to your inbox!</em>
                  </li>
                  <li>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" required />
                  </li>
                </ul>
              </fieldset>
              <button>Send Reset Link</button>
              <button type="button" onClick={() => changeView('logIn')}>
                Go Back
              </button>
            </form>
          );
        default:
          break;
      }
      
    };

    return <section id="entry-page">{renderView()}</section>;
    };
    
    export default EntryPage;