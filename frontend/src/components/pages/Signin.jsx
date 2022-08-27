import React from 'react'
import '../style/Signin.css';

function Signin() {
    return (
        <div className='sign_in'>
            <h1>Sign in</h1>


            <form className='sign_in_form'> 
            {/* onSubmit={this.handleSubmitevents */}
                {
                    //handle error condition
                }
                <label>Email</label>
                <input type="text"  />
                <br />
                <label>Password</label>
                <input type="password" />
                <br />
                <input type="submit" value="Sign In" />
            </form>
        </div>
    )
}

export default Signin