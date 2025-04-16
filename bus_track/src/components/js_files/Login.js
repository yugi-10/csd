import React, { useEffect, useState ,useContext } from "react"
import axios from "axios";
import UserContext from './UserContext';
import { useNavigate, Link } from "react-router-dom"
import '../css_files/Login.css';

function Login() {
    const history=useNavigate();
     const {setUser} = useContext(UserContext);
     const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data.status=="exist"){
                    setUser(res.data.user);
                    history("/homepage")
                }
                else if(res.data.status=="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }
    

    return (
    
        <div className="login">

            <h1>Login</h1>

            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  required/>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" required />
                <input type="submit" onClick={submit} />

            </form>

            <br />
            <p>Don't have an account?<Link to="/signup"> Sign Up </Link></p>

        </div>
    )
}

export default Login
