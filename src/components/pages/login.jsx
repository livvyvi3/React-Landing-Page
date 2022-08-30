import React from "react";
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate();
    return (

        <div className="form-body">
            <form className="form-container">
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                </div>
                <div>
                    <button type="submit" class="btn" onClick={() => navigate('/')}>Back</button>
                    <button type="submit" class="btn">Login</button>
                </div>
            </form>
        </div>
    )
}
export default Login;