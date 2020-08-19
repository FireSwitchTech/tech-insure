import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
const Navbar =()=>{
    return(
        <header class="nav">
    <nav class="navbar fixed-top navbar-expand-lg navbar-light">
        <Link class="navbar-brand" to="/"> <strong>InsureTech</strong> </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto reed">
            <li class="nav-item active reed">
              <a class="nav-link" href="#">About <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Article </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">FAQ</a>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/login" > LOG IN </Link>
            </li>
          </ul>
         <Link to="/signup"> 
            <button  class="btn btn-outline-dark my-2 my-sm-0 " type="submit"><strong>SIGN UP  </strong></button>
           </Link>
        </div>
      </nav>
</header>
    )
}

export default Navbar;