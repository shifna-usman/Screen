import { useState } from "react";
import './SignUp.css';
import validator from "validator";

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('abc@gmail.com');
  const [message, setMessage] = useState('');
  const [errormessage, setErrormessage] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    console.log('Form Data:', {
      name,
      email,
      password,
    });

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
      setErrormessage('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.');
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
