import React from 'react';
import { auth } from './firebase';
  
const Mainpage = () => {
  
    const logout = () => {
        auth.signOut();
    }
  
    return (
        <div style={{ marginTop: 250 }}>
            <center>
                <h3>Welcome {auth.currentUser.phoneNumber}</h3>
                <button className='button' 
                  onClick={logout}>Logout</button>
            </center>
        </div>
    );
}
  
export default Mainpage;