import React from 'react';


const SingIn = ({open, handleSubmit, handleSuccess}) => {

    const [email, setEmail] = React.useState('');
    const [emailError, setEmailError] = React.useState(null);
    const [password, setPassword] = React.useState('');
    const [passwordError, setPasswordError] = React.useState(null);

    function handle(e) {
        
        e.preventDefault();//помогает избежать обновления страницы при отправке формы
        if(email === '' ) {
            setEmailError('Enter email');
            return false;
        }else if(password === ''){
            setPasswordError('Enter password');
            return false;
        }
        if(!emailError && !passwordError){
            handleSuccess();//компонент "успешно!"
            console.log('Отправлена форма входа!');
        }else{
            return false;
        }
    }

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    function isValidPassword(password) {
        const withoutSpecialChars = /^[^-() /]*$/;
        const minimum8Chars = /^.{8,}$/;

        if(withoutSpecialChars.test(password)
            && minimum8Chars.test(password)){
            return true; 
            }   
        else return false;
    }

    function onChangeEmail(e){

        if(!isValidEmail(e.target.value))
        {
            setEmailError('Error validation email');
        }else{
            setEmailError(null);
        }
        setEmail(e.target.value);
        console.log(email);
    }
    
    function onChangePassword(e){
        if(!isValidPassword(e.target.value))
        {
            setPasswordError('Min 8 chars: 0-9, a-z, A-Z');
        }else{
            setPasswordError(null);
        }
        setPassword(e.target.value);
        console.log(password);
    }

    return(
        <>
            <form className={`form ${open ? '':'hide'} `}
                onSubmit={handle} noValidate> 
                <h1>Sign in</h1>
                <div className='input_div'>
                    <label htmlFor="email" >Email</label>
                    <input 
                        id="email"
                        className={`${emailError ? 'error':''}`} 
                        type='email' 
                        value={email} 
                        onChange={onChangeEmail}
                    ></input>
                    {emailError && <p id='error_message'>{emailError}</p>}
                </div>
                <div className='input_div password'>
                    <label htmlFor="password">Password</label>
                    <input 
                        id="password" 
                        className={`${passwordError ? 'error':''}`} 
                        type='password' 
                        value={password} 
                        onChange={onChangePassword}
                    ></input>
                    {passwordError && <p id='error_message'>{passwordError}</p>}
                </div>
                <button type="submit" className='btn'>Login</button>
                <div className='btn_signup'><a href='' onClick={handleSubmit}>Sign up</a></div>
                
            </form>
        </>
    );
}

export default SingIn;