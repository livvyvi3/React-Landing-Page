import React from "react";
import Footer from "../partials/footer";
import Header from "../partials/header";
import { useNavigate } from "react-router-dom"

const Register = () => {
    const navigate = useNavigate();
    return (
        <div className="form-body">
            <Header/>
            <div className="form-container ">
                <div >
                    <label className="form__label" for="email">Email </label>
                    <input type="email" id="email" className="form__input" placeholder="Email" />
                </div>
                <div >
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password" id="password" placeholder="Password" />
                </div>
                <div >
                    <label className="form__label" for="confirmPassword">Confirm Password </label>
                    <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password" />
                </div>
                <div className="form-btns">
                    <button type="submit" class="btn" onClick={() => navigate('/')}>Back</button>
                    <button type="submit" class="btn">Register</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Register;