import { useState } from "react";
import './SignUp.css';
import validator from "validator";
import { useEffect } from "react";
function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('abc@gmail.com');
  const [message, setMessage] = useState('');
  const [errormessage, setErrormessage] = useState('');
  const [password, setPassword] = useState('');

 useEffect=(()=>{
    const data=localStorage.getItem('data');
    if(data){
        const parsedData=JSON.parse(data)
        setName(parsedData.name);
        setEmail(parsedData.email);
        setPassword(parsedData.password);
    }
 },[]);
  function handleSave(){
    const dataToSave=JSON.stringify({name,email,password});
    localStorage.setItem("data",dataToSave);

  }


  const handleSignUp = (e) => {
    e.preventDefault();

    console.log('Form Data:', {
      name,
      email,
      password,
    });
    handleSave();
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    if (!validator.isEmail(newEmail)) {
      setMessage('Please enter a valid email.');
    } else {
      setMessage('');
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (!validator.isStrongPassword(newPassword)) {
      setErrormessage('Password must be at least 8 characters');
    } else {
      setErrormessage('');
    }
  };

  return (
    <div className="Container">
      <div className="Form-container">
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Name"
            id="n"
            name=""
            value={name}
            onChange={(e) => setName(e.target.value)}
          /><br />
          <div>{message}</div>
          <input
            type="email"
            placeholder="Email"
            id="e"
            name=""
            value={email}
            onChange={handleEmail}
          /><br />
          <div>{errormessage}</div>
          <input
            type="password"
            placeholder="Password"
            id="p"
            name=""
            value={password}
            onChange={handlePasswordChange}
          /><br />
          <div className="button-container">
            <button>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
