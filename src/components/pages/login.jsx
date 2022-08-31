import React from "react";
import { useNavigate } from "react-router-dom"
import Header from "../partials/header";
import Footer from "../partials/footer";

const Login = () => {
    const navigate = useNavigate();
    return (
        
        <div className="form-body">
            <Header/>
            <form className="form-container">
                <div>
                    <label className="form__label" >Username</label>
                    <input className="form__input" type="text" name="uname" placeholder="Email or Username" required />
                </div>
                <div >
                    <label className="form__label" >Password</label>
                    <input className="form__input" type="password" name="pass" placeholder="Password" required />
                </div>
                <div className="form-btns">
                    <button type="submit" class="btn" onClick={() => navigate('/')}>Back</button>
                    <button type="submit" class="btn">Login</button>
                </div>
            </form>
            <Footer/>
        </div>
    )
}
export default Login;