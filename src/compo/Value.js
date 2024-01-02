import React from 'react'

const Value = () => {
  return (
    <div>
    <section className="value wow slideInLeft">   
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-sm-12">
            <div className="value-box me-5">
              <span className="qua">VALUES</span>
                <h2>We Always Abide by Our<span className="ms-3">Principles.</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
              <div className="row">
              <div className="col-5">
                  <div className="Abide">                    
                    <span className="textContainer">
                         <div className="icon d-flex">
                          <i className="fa-solid fa-dollar-sign"></i>
                          <h5 className="ms-4">Affordable</h5>
                        </div>
                        <p>We promise to offer you the best rate we can - at par with the industry standard</p>
                    </span>                           
                  </div>
              </div> 
              <div className="col-5 ms-md-5">
                      <div className="Abide">                        
                        <span className="textContainer">
                          <div className="icon d-flex ">
                            <i className="fa-solid fa-suitcase"></i>
                            <h5 className="ms-4">Professionalism</h5>
                          </div>
                            <p>We assure you that our templates are designed and created by professional designers.</p>
                                                        
                        </span>                               
                      </div>
                </div> 
              </div>    
              <button>Learn More</button>      
            </div>              
                          
        </div>
        <div className="col-lg-6 col-sm-12">
            <div className="value-img">
                <img src="img/prototype-illustration.21bc4b3f612a2f257c3d361067582485.svg" alt="about"/>
            </div>
        </div>                       
      </div>
    </div>
  </section>
    </div>
  )
}

export default Value
