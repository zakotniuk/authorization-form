import React from 'react';
import '../styles/main.scss';
import SignIn from './form_login';
import SignUp from './form_regist';
import Success from './success';

const App = () => {

  const [open, setOpen] = React.useState(true);
  const [success, setSuccess] = React.useState(false);
  
  const handleSubmit = (event)=> {
    //помогает избежать обновления страницы
    // при переключении между формами входа и регистрации
    event.preventDefault();
    console.log('переключились');
    setOpen(!open);
  }

  const handleSuccess = () =>{
    setSuccess(true);
  }
 
  return (
    <div className='content'>
      
      
      {success ? (
        <Success />
      )
      :(
        <>
          <SignIn open={open} handleSubmit={handleSubmit} handleSuccess={handleSuccess}/>
          <SignUp open={open} handleSubmit={handleSubmit} />
        </>
      )
      }
      
      
      
    </div>
  );
}

export default App;
