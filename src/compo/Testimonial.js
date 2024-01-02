import React from 'react'

const Testimonial = () => {
    return (
        <div>
            <section className="Testimonials wow slideInLeft">
                <div className="container d-flex">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="Testimonials-img">
                                <img src="img/love-illustration.c759090fa833369ad6ffb6eb19cacb3e.svg" alt="about" />
                            </div>

                        </div>
                        <div className="col-lg-6">
                            <div className="Testimonials-box">
                                <span className="qua">Testimonials</span>
                                <h2>Our Clients<span className="mx-3">Love Us.</span></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.</p>
                            </div>
                            <div className="swiper myswiper">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                                        <h5>Amazing User Experience</h5>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                                        <div className="row">
                                            <div className="col-4">
                                                <img src="img/photo-1494790108377-be9c29b29330.avif" />
                                            </div>
                                            <div className="col-4 para">
                                                <h5>Charlotte Hale</h5>
                                                <p>Director, Delos Inc.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide d-none">
                                        <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                                        <h5>Love the Developer Experience and Design Principles !</h5>
                                        <p>Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                        <div className="row">
                                            <div className="col-4">
                                                <img src="img/photo-1531427186611-ecfd6d936c79.avif" />
                                            </div>
                                            <div className="col-4 para">
                                                <h5>Adam Cuppy</h5>
                                                <p>Founder, EventsNYC</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slide">
                                    <div className="btn next btn-light rounded-circle"><i className="fa-solid fa-arrow-left"></i></div>
                                    <div className="btn prev btn-light rounded-circle"><i className="fa-solid fa-arrow-right"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial
