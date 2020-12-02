import React from 'react';
import './login.css'

const Login = () => {
    return ( 
        <section>
        <div class=" container">
            <div class="row">
                <div class="col-md-6">
                    <h4> Login to your Account</h4>
                    <h5>Begin your journey!</h5>
                </div>
          
                <div class="col-md-6">
                    <form> 
                        <div class="form-row">
                            <input type="text" class="form-control" placeholder="Email Address"/>
        
                            <input type="text" class="form-control" placeholder="Password"/>
                        </div>
        
                    </form>
                    <div class="button">
                        <button type="submit" class="btn btn-primary">LOGIN</button>
                        <h6>Don't have an Account? <a href="/signup/signup.html">Sign Up</a>
                        </h6>
                    </div>
               </div>
        
            </div>
          
    
        </div>
             
     </section>
       
     );
}
 
export default Login;