import React from 'react'
import {useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom';


function Login() {
   const [email,setEmail] = useState("");
   const [password,setPassword] = useState("");

   const History  = useHistory();
   useEffect(() => {
    if(localStorage.getItem('user-info')){
      console.log('hello');
  //    History.push("/")   //not working
      
    }
   }, [])

  async function login()
  {
    console.warn(email,password)
    let item = {email,password};
    let result = await fetch("http://localhost:8000/api/signin",{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
        "Accept":"*/*",
      },
      body:JSON.stringify(item)
    })
    result = await result.json();
    localStorage.setItem("user-info",JSON.stringify(result))
  //  History.push("/")    ///y kam ni kr r
  }


  return (
    <div>
          <h1>Login Page</h1>
          <div className="col-sm-6 offset-sm-3">
           <input type="text" placeholder="email" 
           onChange={(e)=>setEmail(e.target.value)}  
           className="form-control" />
           <br />
           <input type="password" 
           placeholder="password" 
           onChange={(e)=>setPassword(e.target.value)}
           className="form-control" />
           <br />

           <button onClick={login} className="btn btn-primary" >Login</button>


          </div>
    </div>
  )
}

export default Login
