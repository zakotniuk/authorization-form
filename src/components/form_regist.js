import React from 'react';

const SignUp = ({open, handleSubmit}) => {
    
    function handle(e) {
        //помогает избежать обновления страницы при отправке формы
        e.preventDefault();
        console.log('Отправлена форма регистрации!');
      }
    
    return(
        <>
           <form className={`form ${open ? 'hide':''}`} 
                onSubmit={handle}> 
                <h1>Sign up</h1>
                <div className='input_div'>
                    <label htmlFor="email">Email</label>
                    <input id="email" type='email'></input>
                </div>
                <div className='input_div password'>
                    <label htmlFor="password">Password</label>
                    <input id="password" type='password'></input>
                </div>
                <div className='input_div password'>
                    <label htmlFor="password">Confirm password</label>
                    <input id="password2" type='password'></input>
                </div>
                <button type="submit" className="btn">Continue</button>
                <div className='btn_signup'><a href=''onClick={handleSubmit}>Sign in</a></div>
                
                
            </form>
        </>
    );

}

export default SignUp;
