import React from 'react';


const insureForm = () => {
    return ( 

        <section>
        <div class=" container">
            <div class="row">
                <div class="col-md-6">
                    <h4>Insurance Form</h4>
                    <h5>Fill the required field</h5>
                </div>
          
                <div class="col-md-6">
                    <form > 
                        <div class="form-row">
                            <div class="form-row">
                                <div class="col" id="form">
                            <input type="text" class="form-control" placeholder="First name"/>
                                </div>
                                <div class="col" id="form">
                            <input type="text" class="form-control" placeholder="Last name"/>
                                </div>
                            </div>
                       
                            <input type="text" class="form-control" placeholder="Name of Car"/>
        
                            <input type="text" class="form-control" placeholder="Chasis Number"/>
        
                            <input type="text" class="form-control" placeholder="Registration Number"/>

                            <input type="text" class="form-control" placeholder="Valued Sum"/>
                        </div>
        
                    </form>
                    <div class="button">
                        <button type="submit" class="btn btn-primary">SUBMIT</button>
                    </div>
               </div>
        
            </div>
          
    
        </div>
             
     </section>




     );
}
 
export default insureForm;