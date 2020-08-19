import React from 'react';
import './services.css'
import Services1 from './services1.png'
import Services2 from './services2.png'
import Services3 from './services3.png'
import Services4 from './services4.png'

const services = () => {
    return (
        <section class="services ">
  <div class="container">
    <h3 class="mb-5 "> Services</h3>

    <div>
      <button  class="btn btn1">INDIVIDUAL</button>
      <a href="#" class="more"> <p> see more  </p></a>

      <div class="row row-cols-1 row-cols-md-3 mt-5
      mt-5" >
        <div class="col  " >
          <div class="card h-100" id="card">
            <img src={Services1} class="card-img-top " alt="..."/>
            <div class="card-body">
              <p class="card-text">Vehicles</p>
             
            </div>
          </div>
        </div>

        <div class="col  " >
          <div class="card h-100" id="card">
            <img src={Services2} class="card-img-top " alt="..."/>
            <div class="card-body">
              <p class="card-text">Health</p>
             
            </div>
          </div>
        </div>

        <div class="col " >
          <div class="card h-100 " id="card">
            <img src={Services3} class="card-img-top  " alt="..."/>
            <div class="card-body">
              <p class="card-text">Properties</p>
             
            </div>
          </div>
        </div>
        
      </div>

      
    </div>

    <div>
      <button  class="btn btn1">CORPORATE</button>
      <a href="#" class="more"> <p> see more </p></a>

      <div class="row row-cols-1 row-cols-md-3 mt-5
      mt-5" >
        <div class="col mb-5 " >
          <div class="card h-100" id="card">
            <img src={Services4} class="card-img-top " alt="..."/>
            <div class="card-body">
              <p class="card-text">Comprehensive</p>
             
            </div>
          </div>
        </div>

        <div class="col mb-5 " >
          <div class="card h-100" id="card">
            <img src={Services2} class="card-img-top " alt="..."/>
            <div class="card-body">
              <p class="card-text">Aviation</p>
             
            </div>
          </div>
        </div>

        <div class="col mb-5 " >
          <div class="card h-100 " id="card">
            <img src={Services3} class="card-img-top  " alt="..."/>
            <div class="card-body">
              <p class="card-text">Third party</p>
             
            </div>
          </div>
        </div>
        
      </div>

      
    </div>

  </div>
</section>

      );
    }
 
export default services;