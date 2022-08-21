import React from 'react';
import {auth} from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import Login from './login';
import Mainpage from './main';
import "firebase/auth"

function App() {
  const [user] = useAuthState(auth);
return (
	user ? <Mainpage/> : <Login/>
);
}

export default App;
