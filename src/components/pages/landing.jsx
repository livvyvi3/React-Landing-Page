import React, { useEffect } from 'react'
import Footer from '../partials/footer';
import Header from '../partials/header';
import hero from '../../images/illustration-mockups.svg'
import {BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import Register from './register';
import Login from './login';


const Landing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const Root = () => {
        const navigate = useNavigate();

        const navToLogin = () => {
            //  navigate to /login page
            navigate('/login');
        };
        const navToRegis = () => {
            //  navigate to registration page
            navigate('/register');
        };
        return (
        <div>
            <button type="submit" class="btn" onClick={navToRegis}>Register</button>
            <button type="submit" class="btn" onClick={navToLogin}>Login</button>
            <Routes>
                <Route exact path="/register" component={<Register />} />
                <Route exact path="/login" component={<Login />} />
            </Routes>
        </div>
        )
    }

    return (
        <div className='bg'>
            <div className='main-container'>
                <Header />
                <div class="huddle-hero-container">
                    <div class="hero-image">
                        <img alt="hero" src={hero} />
                    </div>
                    <div class="hero-description">
                        <div>
                            <h1>Build The Community Your Fans Will Love</h1>

                            <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
                                Create connections with your users as you engage in genuine discussion.</p>
                        </div>
                        <BrowserRouter>
                        <Root />
                        </BrowserRouter>
                    </div>
                </div>
                <Footer />
            </div>
        </div>

    )
}
export default Landing;