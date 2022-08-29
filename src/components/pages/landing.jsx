import React, { useEffect } from 'react'
import Footer from '../partials/footer';
import Header  from '../partials/header';

const Landing = () =>{
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <div className='bg'>
            <div className='main-container'>
            <Header/>
            <Footer></Footer>
            </div>
        </div>
        
    )
}
export default Landing;