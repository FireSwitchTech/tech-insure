import React from 'react';
import Landing from './landing/landing'
import Services from './services/services'
import Company from './company/company'
import Footer from './footer/footer'
const HomePage = () => {
    return ( 
        <div>
            <Landing/>
            <Services/>
            <Company/>
            <Footer/>
        </div>
     );
}
 
export default HomePage;