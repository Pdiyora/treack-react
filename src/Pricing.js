import React from 'react'

const Pricing = () => {
    return (
        <div>
            <section className="pricing wow slideInRight">
                <div className="container">
                    <div className="Tools-info">
                        <h6>PRICING</h6>
                        <h2>Reasonable & Flexible<span> Plans.</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4">
                            <div className="planHighlight"></div>
                            <div className="green">
                                <span className="name">Personal</span>
                                <span className="price">$17.99</span>
                                <span className="duration">Monthly</span>
                            </div>
                            <div className="large">
                                <span className="mainFeature">For Individuals</span>
                                <span className="feature">30 Templates</span>
                                <span className="feature">7 Landing Pages</span>
                                <span className="feature">12 Internal Pages</span>
                                <span className="feature">Basic Assistance</span>
                            </div>
                            <div className="buy">
                                <button className="hUyVug leQIMz">Buy Now</button>
                            </div>
                        </div>
                        <div className="col-lg-4 bMXqgj">
                            <div className="green text-light">
                                <span className="name">Business</span>
                                <span className="price">$37.99</span>
                                <span className="duration text-light">Monthly</span>
                            </div>
                            <div className="large large-2">
                                <span className="mainFeature mainFeature-2">For Small Businesses</span>
                                <span className="feature feature-2">60 Templates</span>
                                <span className="feature feature-2">15 Landing Pages</span>
                                <span className="feature feature-2">22 Internal Pages</span>
                                <span className="feature feature-2">BPriority Assistance</span>
                            </div>
                            <div className="buy">
                                <button className="hUyVug hUyVug-2 leQIMz-2">Buy Now</button>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="planHighlight planHighlight-2"></div>
                            <div className="green">
                                <span className="name">Enterprise</span>
                                <span className="price">$57.99</span>
                                <span className="duration">Monthly</span>
                            </div>
                            <div className="large">
                                <span className="mainFeature">For Large Companies</span>
                                <span className="feature">90 Templates</span>
                                <span className="feature">27 Landing Pages</span>
                                <span className="feature">37 Internal Pages</span>
                                <span className="feature">Personal Assistance</span>
                            </div>
                            <div className="buy">
                                <button className="hUyVug leQIMz-3">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Pricing
