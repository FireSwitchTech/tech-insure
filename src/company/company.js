import React from 'react';
import {Link} from 'react-router-dom'
import Company1 from './company1.jpg'
import Company2 from './company2.png'
import Company3 from './company3.png'
import Company4 from './company4.jpg'
import './company.css'

const company = () => {
    return ( <>
<section class="individual-companies">

  <div class="container">

<h3 class="mt-4">INSURANCE COMPANIES</h3>

<div class="row row-cols-1 row-cols-md-3 mt-5
      mt-5" >
        <div class="col" >
          <Link to="/insure-form"> 
          <div class="card h-100" id="card">
            <img src={Company1} class="card-img-top shadow " alt="..."/>
            <div class="card-body">
              <p class="card-text">A INSURANCE</p>
             
            </div>
          </div> </Link>
        </div>

        <div class="col  " >
        <Link to="/insure-form"> 
          <div class="card h-100 " id="card">
            <img src={Company2} class="card-img-top shadow " alt="..."/>
            <div class="card-body">
              <p class="card-text">AFRICAN ALLIANCE</p>
             
            </div>
          </div> </Link>
        </div>

        <div class="col " >
        <Link to="/insure-form"> 
          <div class="card h-100  " id="card">
            <img src={Company4} class="card-img-top shadow  " alt="..."/>
            <div class="card-body">
              <p class="card-text">LEDWAY</p>
             
            </div>
          </div> </Link>
        </div>
        
    

      
</div>

    <div>

      <div class="row row-cols-1 row-cols-md-3 mt-5
      mt-5" >
        <div class="col mb-5 " >
        <Link to="/insure-form"> 
          <div class="card h-100 " id="card">
            <img src={Company4} class="card-img-top shadow " alt="..."/>
            <div class="card-body">
              <p class="card-text">LEDWAY</p>
             
            </div>
          </div> </Link>
        </div>

        <div class="col mb-5 " >
        <Link to="/insure-form"> 
          <div class="card h-100 " id="card">
            <img src={Company2} class="card-img-top shadow " alt="..."/>
            <div class="card-body">
              <p class="card-text">AFRICAN INSURANCE</p>
             
            </div>
          </div> </Link>
        </div>

        <div class="col mb-5 " >
        <Link to="/insure-form"> 
          <div class="card h-100 " id="card">
            <img src={Company3} class="card-img-top shadow  " alt="..."/>
            <div class="card-body">
              <p class="card-text">ANCHOR INSURANCE</p>
             
            </div>
          </div> </Link>
        </div>
        
      </div>

      </div>
      </div>
</section>
</>
     );
}
 
export default company;