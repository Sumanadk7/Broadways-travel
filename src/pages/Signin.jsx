import React from 'react'
import './Signin.css';

function Signin() {
    return (
        <div className='sig'>
            <div className="container text-black">
                <div className="log">
                    <form action="" className='ll shadow p-3 rounded text-center'>
                        <h3>Sign in</h3>
                        <br />
                        <input className='pp' type="email" name="email" id="email" required placeholder='Enter your email'/>
                        <br /><br />
                        <input className='pp' type="password" name="password" id="password" required placeholder='Enter your password'/>
                        <br /><br />
                        <button className='btn4'>Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signin
