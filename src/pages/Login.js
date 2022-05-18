import { useState, useEffect, useContext } from 'react'
import logo from '../assets/Frame.png';
import { Button } from 'react-bootstrap';
import {Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/userContext'

const Login = () => {

  const [state, dispatch] = useContext(UserContext)
  console.log(state);
 
  useEffect(() => {
      console.log("App comp did mount");
      
  }, [])

  const handleOnSubmit = (e) => {
      e.preventDefault()
      const email = document.getElementById('email').value
      const password = document.getElementById('password').value
      const data = {
          email: email,
          password: password
      }

      dispatch({
          type: 'LOGIN SUCCESS',
          payload: data
      })
      navigate("/home")
  }

  // call that hooks here and store to variable
  const navigate = useNavigate()
  // create function here for handle push to another pages
  const handleClick = () => {
    console.log("berhasil navigate");
    navigate("/")
  }
  return (
    <>
        <div className="login">
            <div className="login-left ml-5">
                <img src={logo} alt=""></img>
                <div className="h1 text-light mt-5">Easy, Fast and Reliable</div>
                <p className="text-muted">Go shopping for merchandise, just go to dumb merch <br></br>
                shopping. the biggest merchandise in <b>indonesia</b></p>
            
                <div className="mt-5">
                    <Button onClick={handleClick} type="button" className="btn btn-danger">
                    Login
                    </Button>
                    <Link className="register text-decoration-none text-light ml-5" to="/register">Register</Link>
                </div>
            </div>
            <div className="login-right">
                <div className="card-login mt-5 ml-2"> 
                    <form onSubmit={handleOnSubmit}>
                      <div className="label h4 mt-4 text-light ml-3">Login</div>
                      <input 
                        type="email"  
                        id="email" 
                        name="email" 
                        className="form-control mt-4" 
                        placeholder="email">
                      </input>
                      <input 
                        type="password"  
                        id="password" 
                        name="password" 
                        className="form-control" 
                        placeholder="password">
                      </input>
                      <button type="submit" className="btn btn-danger mt-5">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </> 
  );
}

export default Login;
