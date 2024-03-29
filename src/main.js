import React from 'react';
import { auth } from './firebase';
import Form from './form';
  

const Mainpage = () => {
  
    const logout = () => auth.signOut();
  
    return (
        <div>
            
                <h3>Welcome {auth.currentUser.phoneNumber}</h3>
                <button className='button' 
                  onClick={logout}>Logout</button>
                  
            
            <Form/>
        </div>
    );
}
  
export default Mainpage;