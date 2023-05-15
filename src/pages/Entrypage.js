import React from 'react'
import { initializeApp } from 'firebase/app';
import {getDatabase, set, ref, update} from 'firebase/database';
import { getAuth, createUserWithEmailAndPassword, signInWithRedirect, GoogleAuthProvider, getRedirectResult, signInWithEmailAndPassword} from 'firebase/auth';


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

     document.getElementById('email').value = "";
     document.getElementById('password').value = "";
     document.getElementById('username').value = "";
}

const signUp = (e) => {

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var username = document.getElementById('username').value;

    createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
// Signed in 
const user = userCredential.user;

set(ref(database, 'users/' + user.uid),{
    username: username,
    email: email 
})
alert('user created');

// ...
})
.catch((error) => {
;
    const errorMessage = error.message;

    alert(errorMessage);
  })

};

const logIn = (e) =>{

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => { 
// Signed in 
const user = userCredential.user;
const dt = new Date();

update(ref(database, 'users/' + user.uid),{
 last_login: dt,
})
alert('User Loged In!');

// ...
}   ) 


.catch((error) => {
;
    const errorMessage = error.message;

    alert(errorMessage);
  })

};



const logInwithgoogle = (e) =>{
  signInWithRedirect(auth, provider);


  getRedirectResult(auth)
.then((result) => {
  

  // The signed-in user info.
  const user = result.user;

  // name = displayName
  //email = email
  //photo = photoURL

  alert(user.displayName);

  // IdP data available using getAdditionalUserInfo(result)
  // ...
}).catch((error) => {
  // Handle Errors here.
 

  // ...
});
};



const { Component } = React

class EntryPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentView: "signUp"
    }
  }

  changeView = (view) => {
    this.setState({
      currentView: view
    })
  }

  

  currentView = () => {
    switch (this.state.currentView) {
      case "signUp":
        return (
          <form>
            <h2>Sign Up!</h2>
            <fieldset>
              <legend>Create Account</legend>
              <ul>
                <li>
                  <label for="username">Username:</label>
                  <input type="text" id="username" required />
                </li>
                <li>
                  <label for="Email">Email:</label>
                  <input type="email" id="email" required />
                </li>
                <li>
                  <label for="password">Password:</label>
                  <input type="password" id="password" required />
                </li>
              </ul>
            </fieldset>
            <button type="button" onClick={signUp}>Submit</button>
            <button type="button" onClick={() => {this.changeView("logIn"); ClearFields()}}>Have an Account?</button>
          </form>
        )
      case "logIn":
        return (
          <form>
            <h2>Welcome Back!</h2>
            <fieldset>
              <legend>Log In</legend>
              <ul>
                <li>
                  <label for="Email">Email:</label>
                  <input type="text" id="email" required />
                </li>
                <li>
                  <label for="password">Password:</label>
                  <input type="password" id="password" required />
                </li>
                <li>
                  <i />
                  <a onClick={() => this.changeView("PWReset")} href="#/">Forgot Password?</a>
                </li>
              </ul>
            </fieldset>
            <button type="button" onClick={logIn}>Login</button>
            <button type="button" onClick={logInwithgoogle}>Sign in Google</button>
            <button type="button" onClick={() => this.changeView("signUp")}>Create an Account</button>
          </form>
        )
      case "PWReset":
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
                  <label for="email">Email:</label>
                  <input type="email" id="email" required />
                </li>
              </ul>
            </fieldset>
            <button>Send Reset Link</button>
            <button type="button" onClick={() => this.changeView("logIn") }>Go Back</button>
          </form>
        )
      default:
        break
    }
    

    
}

 


  render() {
    return (
      <section id="entry-page">
        {this.currentView()}
      </section>
    )
  }
}

export default EntryPage;