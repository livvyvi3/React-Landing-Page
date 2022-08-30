import React, { useEffect } from 'react'
import Footer from '../partials/footer';
import Header from '../partials/header';
import hero from '../../images/illustration-mockups.svg'
import { useNavigate } from "react-router-dom"

const Landing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const navigate = useNavigate();
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
                        <div>
                            <button type="submit" class="btn" onClick={() => navigate('/register')}>Register</button>
                            <button type="submit" class="btn" onClick={() => navigate('/login')}>Login</button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>

    )
}
export default Landing;