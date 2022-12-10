import React from 'react';
import './Login.css';
function Login(){
    return(
        <div className='main-login'>
         <div className='login-contain' >
          <div className='left-side'>
             <form>
                <label for="email">Email</label>
                <input type="email" placeholder="Enter your email..." id="email"/>
                <label for="password">Password</label>
                <input type="password" placeholder="Enter password" id="password"/>
                <button>Sumbit</button>
             </form>
          </div>
          <div className='right-side'>

          </div>
         </div>
        </div >
    )
}
export default Login;