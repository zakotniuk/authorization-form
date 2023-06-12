import React from 'react';

const SignUp = ({open, handleSubmit, handleSuccess}) => {
    
    const [email, setEmail] = React.useState('');
    const [emailError, setEmailError] = React.useState(null);
    const [password, setPassword] = React.useState('');
    const [passwordError, setPasswordError] = React.useState(null);
    const [confirmPassword, setConfPassword] = React.useState('');
    const [confPasswordError, setConfPasswordError] = React.useState(null);


    function handle(e) {
        //помогает избежать обновления страницы при отправке формы
        e.preventDefault();
        if(email === '' ) {
            setEmailError('Enter email');
            return false;
        }else if(password === ''){
            setPasswordError('Enter password');
            return false;
        }else if(confirmPassword === ''){
            setConfPasswordError('Confirm password');
            return false;
        }
        if(!emailError && !passwordError && !confPasswordError){
            handleSuccess();//компонент "успешно!"
            console.log('Отправлена форма регистрации!');
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

    const onChangeEmail = (e) => {
        if(!isValidEmail(e.target.value))
            setEmailError('Error validation email');
        else
            setEmailError(null);
        setEmail(e.target.value);
        console.log(email);
    }
    
    const onChangePassword = (e) => {
        if(!isValidPassword(e.target.value))
            setPasswordError('Min 8 chars: 0-9, a-z, A-Z');
        else
            setPasswordError(null);
        setPassword(e.target.value);
        setConfPassword('');
        console.log('password1:',password);
    }

    const onChangeConfPassword = (e) => {
        if(password !== e.target.value)
            setConfPasswordError('Check passwords');   
        else
            setConfPasswordError(null);
        setConfPassword(e.target.value);
        console.log('password2:',confirmPassword);
    }


    return(
        <>
           <form className={`form ${open ? 'hide':''}`} 
                onSubmit={handle}> 
                <h1>Sign up</h1>
                <div className='input_div'>
                    <label htmlFor="email">Email</label>
                    <input id="email" type='email'
                        className={`${emailError ? 'error':''}`} 
                        value={email} 
                        onChange={onChangeEmail}
                    ></input>
                    {emailError && <p id='error_message'>{emailError}</p>}
                </div>
                <div className='input_div password'>
                    <label htmlFor="password">Password</label>
                    <input id="password" 
                        className={`${passwordError ? 'error':''}`} 
                        type='password' 
                        value={password} 
                        onChange={onChangePassword}
                    ></input>
                    {passwordError && <p id='error_message'>{passwordError}</p>}
                </div>
                <div className='input_div password'>
                    <label htmlFor="password">Confirm password</label>
                    <input id="password2" 
                        type='password'
                        className={`${confPasswordError ? 'error':''}`} 
                        value={confirmPassword} 
                        onChange={onChangeConfPassword}
                    ></input>
                    {confPasswordError && <p id='error_message'>{confPasswordError}</p>}
                </div>
                <button type="submit" className="btn">Continue</button>
                <div className='btn_signup'><a href=''onClick={handleSubmit}>Sign in</a></div>
                
                
            </form>
        </>
    );

}

export default SignUp;
