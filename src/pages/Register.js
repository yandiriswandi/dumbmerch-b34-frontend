import { useState } from 'react'
import logo from '../assets/Frame.png';
import { Button } from 'react-bootstrap';
import {Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const [state, setState] = useState({
        fullname: "",
        email: "",
        password: ""
      })
    
      const handleOnChange = (e) => {
        // setState here
        setState({
          ...state,
          [e.target.name]: e.target.value
        })
    
        console.log(e.target.value);
      }
    
      const handleOnSubmit = (e) => {
        e.preventDefault()
        //print state value with console.log here
        console.log(state);
        navigate("/")
    
      }  
     
  const navigate = useNavigate()

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
                <Link className="register text-decoration-none text-light ml-5" to="/register">
                    Register
                </Link>
                </div>
            </div>
            <div className="login-right">
                <div className="card-login mt-5 ml-2"> 
                    <form onSubmit={handleOnSubmit}>
                        <div className="label h4 mt-4 text-light ml-3">Register</div>
                        <input  
                            onChange={handleOnChange} 
                            value={state.fullname} 
                            name="fullname" 
                            type="text" 
                            className="form-control mt-4" 
                            placeholder="Name">
                        </input>
                        <input  
                            onChange={handleOnChange} 
                            value={state.email} 
                            name="email" type="email" 
                            className="form-control" 
                            placeholder="email">
                        </input>
                        <input  
                            onChange={handleOnChange} 
                            value={state.password} 
                            name="password" type="password" 
                            className="form-control" 
                            placeholder="password">
                        </input>
                        <button type="submit" className="btn btn-danger mt-4">Register</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  );
}

export default Register;
