import React from 'react';
import landing from './landing.png'
import './landing.css'
const Landing = () => {
    return ( 
        <section class="header">
            <div class="row" id="row" >
                <div class="col-md-6 " >
                <img src={landing} alt="" height="90%" width="100%"/>
                </div>

                <div class="col-md-6 " id="hi">
                    <p>Insurance is a means of protection  from financial loss. It is a form of risk  magnagement,primarily used to hedge against the risk of a contingent or uncertain loss</p>
                    <button class="btn" id="started" type= 'submit'>Get Started</button>
                </div>
            </div>

        </section>
     );
}
 
export default Landing;