import {  useState } from "react"
import "./LogIn.css"

export const LogIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
    console.log(email, password);
    };
  
    return (
      <>
      <form onSubmit={handleSubmit}>
        <label for="email">Email</label>
        <input
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <label for="password">password</label>
        <input 
          type="password" 
          placeholder="**********" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Login</button>
       </form>
       <button>Don't have an Account? Register here</button>
    </>
    );
  };
  



  

