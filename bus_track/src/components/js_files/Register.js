import React, { useEffect, useState,useContext} from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import UserContext from './UserContext';
import '../css_files/Login.css';
function Login() {
    const {setUser} = useContext(UserContext);
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [name,setName]=useState('')
    const [address,setAddress]=useState('')
    const [mobile,setMobile]=useState('')
    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/signup",{
                email,password,name,address,mobile
            })
            .then(res=>{
                if(res.data.status=="exist"){
                    alert("User already exists")
                }
                else if(res.data.status=="notexist"){
                    setUser(res.data.user);
                    history("/homepage")
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

            <h1>Signup</h1>

            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" required />
                <input type="name" onChange={(e) => { setName(e.target.value) }} placeholder="Name" required />
                <input type="tel" onChange={(e) => { setMobile(e.target.value) }} placeholder="Mobile no" required />
                <input type="text" onChange={(e) => { setAddress(e.target.value) }} placeholder="Address" required/>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" required />
                <input type="submit" onClick={submit} />

            </form>

            <br />
            {/* <p>OR</p>
            <br />

            <Link to="/login">Login Page</Link> */}

        </div>
    )
}

export default Login