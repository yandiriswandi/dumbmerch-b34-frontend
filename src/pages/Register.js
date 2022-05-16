import logo from './Frame.png';
import {Link } from 'react-router-dom';

const Register = () => {
  return (
<div>
    <div className="login">
    <div className="login-left ml-5">
        <img src={logo} alt=""></img>
        <div className="h1 text-light mt-5">Easy, Fast and Reliable</div>
        <p className="text-muted">Go shopping for merchandise, just go to dumb merch <br></br>
        shopping. the biggest merchandise in <b>indonesia</b></p>
       
        <div className="mt-5">
            <button type="button" className="btn btn-danger">
                <Link  className="text-decoration-none text-light" to="/">Login</Link>
            </button>
            <Link className="register text-decoration-none text-light ml-5" to="/register">Register</Link>
        </div>
    </div>
    <div className="login-right">
        <div className="card-login mt-5 ml-2"> 
            <form>
             <div className="label h4 mt-4 text-light ml-3">Register</div>
             <input type="text" className="form-control mt-4" placeholder="Name"></input>
             <input type="email" className="form-control" placeholder="email"></input>
             <input type="password" className="form-control" placeholder="password"></input>
             <button type="button" className="btn btn-danger mt-4">Register</button>
            </form>
        </div>
    </div>
</div>
</div>
    
  );
}

export default Register;
