import React from 'react'

const Faq = () => {
  return (
    <div>
    <section className="Tools wow slideInRight">
    <div className="container">        
     <div className="Tools-info">
      <h6>faqs</h6>
      <h2>You have <span>Questions ?</span></h2>
      <p>And we have got answers to all of them. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
     </div>        
    </div>
    <div className="faqs">
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
       <h2 className="accordion-header" id="headingOne">
       <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <span><b>Are all the templates easily customizable ?</b></span> 
       </button>
     </h2>
       <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        Yes, they all are. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
       </div>
      </div>      
      <div className="accordion-item my-3">
        <h2 className="accordion-header" id="headingTwo">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
           <span> <b>How long do you usually support an standalone template for ?</b></span>
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </div>
      </div>
      <div className="accordion-item my-3">
        <h2 className="accordion-header" id="headingThree">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <span><b>What kind of payment methods do you accept ?</b></span>
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div className="accordion-body">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </div>
      </div>
      <div className="accordion-item my-3">
        <h2 className="accordion-header" id="headingfour">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
           <span><b> Is there a subscribption service to get the latest templates ?</b></span>
          </button>
        </h2>
        <div id="collapsefour" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div className="accordion-body">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </div>
      </div>
      <div className="accordion-item my-3">
        <h2 className="accordion-header" id="headingfive">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
            <span><b>Are the templates compatible with the React ?</b></span>
          </button>
        </h2>
        <div id="collapsefive" className="accordion-collapse collapse" aria-labelledby="headingfive" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         </div>
        </div>
      </div>
      <div className="accordion-item my-3">
        <h2 className="accordion-header" id="headingsix">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
            <span><b>Do you really support Internet Explorer 11 ?</b></span>
          </button>
        </h2>
        <div id="collapsesix" className="accordion-collapse collapse" aria-labelledby="headingsix" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         </div>
        </div>
      </div>
    </div>
   </div> 
  </section>
    </div>
  )
}

export default Faq
