import React from 'react'
import './signup.css'

const Signup = () => {
    return (  
        <section>
        <div class=" container">
            <div class="row">
                <div class="col-md-6">
                    <h4> Create an account</h4>
                    <h5>Begin your journey!</h5>
                </div>
          
                <div class="col-md-6">
                    <form> 
                        <div class="form-row">
                            <div class="form-row">
                                <div class="col" id="form">
                            <input type="text" class="form-control" placeholder="First name"/>
                                </div>
                                <div class="col" id="form">
                            <input type="text" class="form-control" placeholder="Last name"/>
                                </div>
                            </div>
                       
                            <input type="text" class="form-control" placeholder="Phone Number"/>
        
                            <input type="text" class="form-control" placeholder="Email Address"/>
        
                            <input type="text" class="form-control" placeholder="Password"/>
                        </div>
        
                    </form>
                    <div class="button">
                        <button type="submit" class="btn btn-primary">SIGN UP</button>
                        <h6>Got an account? <a href="./login.html">Log in</a>
                        </h6>
                    </div>
               </div>
        
            </div>
          
    
        </div>
             
     </section>
        
    );
}
 
export default Signup;