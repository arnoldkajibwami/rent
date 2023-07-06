import React from 'react';
import { Link } from "react-router-dom";

function Signup() {
    return (
        <>
            <div className='d-flex w-100 vh-100 bg-primary justify-content-center align-items-center'>
                <form>
                <div className='mb-3'>
                        <label htmlFor='name'><strong>Name</strong></label>
                        <input type='text' placeholder='Enter Name' name='name' className='form-control rounded-0' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='name'><strong>Email</strong></label>
                        <input type='email' placeholder='Enter Email' name='email' className='form-control rounded-0' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='name'><strong>Password</strong></label>
                        <input type='password'placeholder='Enter Password' name='password' className='form-control rounded-0' />
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>Sign Up</button>
                    <p>You are agree to our terms and policies</p>
                    <Link to='/login' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
                </form>
            </div>
        </>
    );
}
export default Signup