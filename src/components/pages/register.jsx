import React from "react";
import Footer from "../partials/footer";
import { useNavigate } from "react-router-dom"

const Register = () => {
    const navigate = useNavigate();
    return (
        <div className="bg">
            <div className="form-container form-body">
                <div className="username">
                    <label className="form__label" for="firstName">First Name </label>
                    <input className="form__input" type="text" id="firstName" placeholder="First Name" />
                </div>
                <div className="lastname">
                    <label className="form__label" for="lastName">Last Name </label>
                    <input type="text" name="" id="lastName" className="form__input" placeholder="LastName" />
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input type="email" id="email" className="form__input" placeholder="Email" />
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password" id="password" placeholder="Password" />
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">Confirm Password </label>
                    <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password" />
                </div>
                <div>
                    <button type="submit" class="btn" onClick={() => navigate('/')}>Back</button>
                    <button type="submit" class="btn">Register</button></div>
            </div>
            <Footer />
        </div>
    )
}
export default Register;