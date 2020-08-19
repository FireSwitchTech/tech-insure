import React from 'react';
import footer1 from './footer1.jpg'
import footer2 from './footer2.jpg'
import footer3 from './footer3.jpg'
import './footer.css'



const Footer = () => {
    return (  
        <>
        <section class="how-it-works">
    
  <div class="container">
   
        <h3> How it works.</h3>
      <div class="row row-cols-1 row-cols-md-3 mt-5
      mt-5" >
        <div class="col mb-3 " >
          <div class="card h-100" id="card">
            <img src={footer1} class="card-img-top h-70 w-100" alt="..."/>
            <div class="card-body">
              <p class="card-text">1 <br/> Create an Account and Register</p>
             
            </div>
          </div>
        </div>

        <div class="col mb-3 " >
          <div class="card h-100" id="card">
            <img src={footer2} class="card-img-top h-70 w-100" alt="..."/>
            <div class="card-body">
              <p class="card-text">2 <br/> Choose your insurance option</p>
             
            </div>
          </div>
        </div>

        <div class="col mb-3 " >
          <div class="card h-100 " id="card">
            <img src={footer3} class="card-img-top h-70 w-100" alt="..."/>
            <div class="card-body">
              <p class="card-text">3 <br/> Fill the form</p>
             
            </div>
          </div>
        </div>
        
      </div>
      <div>
          <button class="btn btn1" id="btn1">Continue</button>
      </div>
      
  </div>
</section>

<section class="contact-us">
  <div class="container">
      <div class="row">
          <div class="col-md-3">
              <h6 class="contactUs__header">Company</h6>
              <ul class="contactUs__list">
                  <li >About us</li>
                  <li >Press &gt; media</li>
                  <li >Careers</li>
                  <li >Ambassadors</li>
                  <li >Privacy</li>
                  <li >Terms</li>
              </ul>
          </div>
          <div class="col-md-3">
              <h6 class="contactUs__header">Product</h6>
          <ul class="contactUs__list">
              <li >Saving Plans</li>
              <li >investment Plans</li>
              <li >Mutual Funds</li>
              <li >Circles</li>
              <li >Features</li>
          </ul>
          </div>
          <div class="col-md-3">
              <h6 class="contactUs__header">Resources</h6>
          <ul class="contactUs__list">
              <li >Customer Stories</li>
              <li >FAQ</li>
              <li >Security</li>
              <li >Estimate your interest</li>
              <li >Plan Education</li>
              <li >Blog</li>
          </ul>
          </div>
          <div class="col-md-3">
              <h6 class="contactUs__header">Contact</h6>
          <ul class="contactUs__list">
              <li >support@cowrywise.com</li>
              <li >+2349030000857</li>
              <li >+2348022212229</li>
          </ul>
          </div>
      </div>
      <div>
          <h6 class="text-left">5C Reverend Ogunbiyi Street, Ikeja GRA, Lagos Nigeria.</h6>
      </div>
  </div>
</section>

 <section class="footer">
 <div class="container">
     
         <p>
         Instantassured.com is a property of CowryWise Financial Technology Limited, a Company duly registered with CAC with the RC Number 1419869. CowryWise.com provides financial services under a Cooperative License with a registration number 15845. Both CowryWise.com and CowryWise Financial  Technology Limited are legal entities in Nigeria. our investment professionals invest savers funds in financial instruments and manage the investments to optimum return. To ensure security of savers funds, assets are held by Meristem Trustees, a company registered with the security and exchange commission(SEC) on behalf of savers. These assets are marked to market periodically to ensure savers are protected.</p>
     
 </div>
</section>
</>
    );
}
 
export default Footer;
