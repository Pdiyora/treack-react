import React from 'react'

const Banner = () => {
    return (
        <div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-5">
                        <div className="Design-box">
                            <h2>Beautiful React Templates <span>for you.</span></h2>
                            <p>Our templates are easy to setup, understand and customize. Fully modular components with a variety of pages and components.</p>
                            <div className="update">
                                <form action="">

                                    <button>Get Started</button>
                                </form>
                            </div>
                            <div className="bvxthK">
                                <p>OUR TRUSTED CUSTOMERS</p>
                                <img src="img/react-section1.png" alt="logo" />
                            </div>
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="Design-img">
                            <img src="img/react template-1.svg" alt="about" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Banner
