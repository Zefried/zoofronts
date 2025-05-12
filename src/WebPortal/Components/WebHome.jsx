import react from 'react';
import '../assets/css/style.css';
import buyImg from '../assets/img/buy.png';
import dealImg from '../assets/img/deal.png';
import locationImg from '../assets/img/location-pin.png';
import businessImg from '../assets/img/business-address.png';
// house-edge ends here

// highlight section images
import img1 from '../assets/img/img1.jpg';
import img2 from '../assets/img/img2.jpg';
import img3 from '../assets/img/img3.jpg';



import CommercialSlider from './SubCompo/CommercialSlider';
// highlight section images ends here

const WebHome = () => {

    return (
        <>
            <div>

            <div className="top-navbar">
                <div className="webMenu">
                <div className="logo-section">
                    <div className="logo-img">
                    <img src="assets/img/logo1.png" alt />
                    </div>
                    <div className="logo-text">
                    <h3>Zroperties</h3>
                    </div>
                </div>
                <div className="menu-section">
                    <ul className="menu-ul">
                    <li>test</li>
                    <li className="dropdown">
                        <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        test
                        </a>
                        <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </li>
                        </ul>
                    </li>
                    <li>test</li>
                    <li>test</li>
                    <li className="post-prop">
                        Post Property
                        <div className="free-text">Free</div>
                    </li>
                    <li>
                        <div className="side-menu">
                        <i className="fa-solid fa-bars" />
                        </div>
                    </li>
                    </ul>
                </div>
                </div>
            </div>

            <section className="slider-section">
                <div className="overlay" />
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                    <div className="header-text">
                        <h1>Properties to buy in Guwahati</h1>
                        <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Voluptatem?
                        </p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                        <div className="slider-search">
                            <div className="row justify-content-center align-items-center">
                            <div className="col-lg-9">
                                <div className="search">
                                <input type="text" placeholder="Search for locality, landmark, projects or building " />
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="search-btn">
                                <button>
                                    <i className="fa-solid fa-magnifying-glass" /> Search
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="buy-option">
                            <ul className="buy-ul">
                            <li>Buy</li>
                            <li>Rent</li>
                            <li>Plots</li>
                            <li>Commercial</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <section className="house-edge">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="title-text">
                        <div className="title">
                            <h1>Housing-Edge</h1>
                            <p>Explore Property related Services</p>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-3">
                            <div className="house-edge-cards">
                            <div className="card-img">
                                <img src={buyImg} alt="Buy" />
                            </div>
                            <div className="card-text">
                                <h3>Buy</h3>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="house-edge-cards">
                            <div className="card-img">
                                <img src={dealImg} alt="Rent" />
                            </div>
                            <div className="card-text">
                                <h3>Rent</h3>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="house-edge-cards">
                            <div className="card-img">
                                <img src={locationImg} alt="Plot" />
                            </div>
                            <div className="card-text">
                                <h3>Plot</h3>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="house-edge-cards">
                            <div className="card-img">
                                <img src={businessImg} alt="Commercial" />
                            </div>
                            <div className="card-text">
                                <h3>Commercial</h3>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <section className="highlight-section">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="title-text">
                        <div className="title">
                            <h1>Top Highlighted Projects</h1>
                            <p>Explore Property related Services</p>
                        </div>
                        </div>
                        <div className="highlight-cards">
                        <div className="row">
                            <div className="col-lg-4">
                            <div className="highlight-outerbox">
                                <div className="highlight-img">
                                <img src={img3} alt="Project 1" />
                                </div>
                                <div className="highlight-content">
                                <div className="row">
                                    <div className="col-lg-7">
                                    <div className="highlight-content-info">
                                        <h6>Divine Bliss</h6>
                                        <p>2,3,4 BHK Apartments</p>
                                    </div>
                                    </div>
                                    <div className="col-lg-5">
                                    <div className="highlight-content-price">
                                        <p>₹ 25.6 L - 80.3 L</p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4">
                            <div className="highlight-outerbox">
                                <div className="highlight-img">
                                <img src={img2} alt="Project 2" />
                                </div>
                                <div className="highlight-content">
                                <div className="row">
                                    <div className="col-lg-7">
                                    <div className="highlight-content-info">
                                        <h6>Divine Bliss</h6>
                                        <p>2,3,4 BHK Apartments</p>
                                    </div>
                                    </div>
                                    <div className="col-lg-5">
                                    <div className="highlight-content-price">
                                        <p>₹ 25.6 L - 80.3 L</p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4">
                            <div className="highlight-outerbox">
                                <div className="highlight-img">
                                <img src={img1} alt="Project 3" />
                                </div>
                                <div className="highlight-content">
                                <div className="row">
                                    <div className="col-lg-7">
                                    <div className="highlight-content-info">
                                        <h6>Divine Bliss</h6>
                                        <p>2,3,4 BHK Apartments</p>
                                    </div>
                                    </div>
                                    <div className="col-lg-5">
                                    <div className="highlight-content-price">
                                        <p>₹ 25.6 L - 80.3 L</p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <section className="banner-section">
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                    <div className="banner" />
                    </div>
                </div>
                </div>
            </section>

       
            <section className="commercial-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="title-text">
                            <div className="title">
                                <h1>Commercial Space</h1>
                                <p>Explore Property related Services</p>
                            </div>
                            <div className="seeMore-btn"><a href="#">See More</a></div>
                            </div>

                            <div className="slider-container">
                            <div className="slider">
                                <div className="slide">
                                <img src={img1} alt="Image 1" />
                                <div className="slider-text">
                                    <h3>Image 1</h3>
                                    <p>Description for image 1.</p>
                                </div>
                                </div>
                                <div className="slide">
                                <img src={img2} alt="Image 2" />
                                <div className="slider-text">
                                    <h3>Image 2</h3>
                                    <p>Description for image 2.</p>
                                </div>
                                </div>
                                <div className="slide">
                                <img src={img3} alt="Image 3" />
                                <div className="slider-text">
                                    <h3>Image 3</h3>
                                    <p>Description for image 3.</p>
                                </div>
                                </div>
                                <div className="slide">
                                <img src={img1} alt="Image 4" />
                                <div className="slider-text">
                                    <h3>Image 4</h3>
                                    <p>Description for image 4.</p>
                                </div>
                                </div>
                                <div className="slide">
                                <img src={img2} alt="Image 5" />
                                <div className="slider-text">
                                    <h3>Image 5</h3>
                                    <p>Description for image 5.</p>
                                </div>
                                </div>
                            </div>
                                <CommercialSlider/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <section className="commercial-section">
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                    <div className="title-text">
                        <div className="title">
                        <h1>Ware Houses</h1>
                        <p>
                            Your surrounding matters. With us, find the best possible
                            space to set up your business within your convenience.
                        </p>
                        </div>
                        <div className="seeMore-btn"><a href>See More</a></div>
                    </div>
      
                    <div className="slider2-container">
                        <div className="slider2">
                        <div className="slide2">
                            <img src="assets/img/img1.jpg" alt="Image 1" />
                            <div className="slider2-text">
                            <h3>Image 1</h3>
                            <p>Description for image 1.</p>
                            </div>
                        </div>
                        <div className="slide2">
                            <img src="assets/img/img2.jpg" alt="Image 2" />
                            <div className="slider2-text">
                            <h3>Image 1</h3>
                            <p>Description for image 1.</p>
                            </div>
                        </div>
                        <div className="slide2">
                            <img src="assets/img/img3.jpg" alt="Image 3" />
                            <div className="slider2-text">
                            <h3>Image 1</h3>
                            <p>Description for image 1.</p>
                            </div>
                        </div>
                        <div className="slide2">
                            <img src="assets/img/img1.jpg" alt="Image 4" />
                            <div className="slider2-text">
                            <h3>Image 1</h3>
                            <p>Description for image 1.</p>
                            </div>
                        </div>
                        <div className="slide2">
                            <img src="assets/img/img2.jpg" alt="Image 5" />
                            <div className="slider2-text">
                            <h3>Image 1</h3>
                            <p>Description for image 1.</p>
                            </div>
                        </div>
                        </div>
                        <div className="nav-buttons2">
                        <button onclick="prevSlide2()">❮</button>
                        <button onclick="nextSlide2()">❯</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section> */}

            <section className="banner-section">
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                    <div className="banner" />
                    </div>
                </div>
                </div>
            </section>

            {/* <section className="commercial-section">
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                    <div className="title-text">
                        <div className="title">
                        <h1>Residential Flat</h1>
                        <p>Explore Property related Services</p>
                        </div>
                        <div className="seeMore-btn"><a href>See More</a></div>
                    </div>
                
                    <div className="slider3-container">
                        <div className="slider3">
                        <div className="slide3">
                            <img src="assets/img/img1.jpg" alt="Image 1" />
                            <div className="slider3-text">
                            <h3>Image 1</h3>
                            <p>Description for image 1.</p>
                            </div>
                        </div>
                        <div className="slide3">
                            <img src="assets/img/img2.jpg" alt="Image 2" />
                            <div className="slider3-text">
                            <h3>Image 1</h3>
                            <p>Description for image 1.</p>
                            </div>
                        </div>
                        <div className="slide3">
                            <img src="assets/img/img3.jpg" alt="Image 3" />
                            <div className="slider3-text">
                            <h3>Image 1</h3>
                            <p>Description for image 1.</p>
                            </div>
                        </div>
                        <div className="slide3">
                            <img src="assets/img/img1.jpg" alt="Image 4" />
                            <div className="slider3-text">
                            <h3>Image 1</h3>
                            <p>Description for image 1.</p>
                            </div>
                        </div>
                        <div className="slide3">
                            <img src="assets/img/img2.jpg" alt="Image 5" />
                            <div className="slider3-text">
                            <h3>Image 1</h3>
                            <p>Description for image 1.</p>
                            </div>
                        </div>
                        </div>
                        <div className="nav-buttons3">
                        <button onclick="prevSlide3()">❮</button>
                        <button onclick="nextSlide3()">❯</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section> */}

            <section className="footer-section">
                <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-10">
                    <div className="row justify-content-center">
                        <div className="col-lg-4">
                        <div className="footer-img">
                            <img src="assets/img/logo1.png" alt />
                        </div>
                        <div className="footer-text">
                            <h4>Zroperties</h4>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="quick-links">
                            <h4>Quick Links</h4><hr className="footer-line" />
                            <ul>
                            <li>Test</li>
                            <li>Test</li>
                            <li>Test</li>
                            <li>Test</li>
                            <li>Test</li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="address">
                            <h4>Address</h4><hr className="footer-line" />
                            <div className="location">
                            <i className="fa-solid fa-location-dot footer-icons" />
                            Guwahati, Assam, 781002
                            </div>
                            <div className="phone">
                            <i className="fa-solid fa-phone footer-icons" />
                            +91 9876543210
                            </div>
                            <div className="email">
                            <i className="fa-solid fa-envelope footer-icons" />
                            info@example.com
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <hr />
                <div className="copyright-text text-center">
                    <p> © Copyright 2025 - Zroperties | All rights reserved | Designed By <a href="https://webinfotech.net.in/">Web InfoTech</a></p>
                </div>
                </div>
            </section>

            </div>

        </>
    )
}

export default WebHome;