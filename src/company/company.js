import React from 'react';
import Company1 from './company1.jpg'
import Company2 from './company2.png'
import Company3 from './company3.png'
import Company4 from './company4.jpg'
import Company5 from './company5.png'
import Company6 from './company6.png'
import './company.css'

const company = () => {
    return ( 
<section class="individual-companies">

<div class="container">
    <h3 >INSURANCE COMPANIES</h3>

    <div class="second">
      <div class="card-deck">
          <div class="card" id="company">
            <img src={Company1} class="card-img-top" alt="..." width="80px" height="150px"/>
          </div>
          <div class="card " id="company">
            <img src={Company2} class="card-img-top" alt="..." width="80px" height="150px"/>
          </div>
          <div class="card" id="company">
            <img src={Company3} class="card-img-top" alt="..." width="80px" height="150px"/>
          </div>
        </div>
      </div>

      <div class="second">
        <div class="card-deck">
            <div class="card" id="company">
              <img src={Company4} class="card-img-top" alt="..." width="80px" height="150px"/>
            </div>
            <div class="card " id="company">
              <img src={Company5} class="card-img-top" alt="..." width="80px" height="150px"/>
            </div>
            <div class="card" id="company">
              <img src={Company6} class="card-img-top" alt="..." width="80px" height="150px"/>
            </div>
          </div>
        </div>
</div>

</section>

     );
}
 
export default company;