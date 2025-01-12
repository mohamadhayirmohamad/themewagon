import styles from './Abou.module.css'
// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import CountUp from "react-countup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faStar } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook, faInstagram, faTwitter, faXTwitter } from "@fortawesome/free-brands-svg-icons";
// import { faUser, faHeart, faChartBar, faGem, faBurger, faEye, faInfinity, faGraduationCap, faStar, faDiagramProject, faToolbox } from "@fortawesome/free-solid-svg-icons";

function About() {
    return (
        <>
            <div>
                {/* الجزء العلوي الأخضر */}
                <section className={styles.heroSection}>
                    <div className="container text-center">
                        <h1 className={styles.title1}>About Us</h1>
                        <p className={styles.description}>
                            Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas
                            consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint.
                            Sit quaerat ipsum dolorem.
                        </p>
                    </div>
                </section>


                <section className={styles.breadcrumbSection}>
                    <div className="container text-start">
                        <span className={styles.breadcrumb}>Home</span> / <span className={styles.breadcrumb}>About Us</span>
                    </div>
                </section>
            </div>


            <div className="container my-5">
                {/* القسم العلوي */}
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h2 className={styles.title}>Voluptatem dignissimos provident quasi corporis</h2>
                        <p className={styles.subtitle}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <ul className="list-unstyled">
                            <li className="d-flex align-items-center mb-2">
                                <i className={`fa-solid fa-check  `} style={{ color: "#28a745", fontSize: "1.2rem", marginRight: "0.5rem" }}></i>
                                <span className="ms-2">Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <i className={`fa-solid fa-check ${styles.greenCheck}`}></i>
                                <span className="ms-2">Duis aute irure dolor in reprehenderit in voluptate velit.</span>
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <i className={`fa-solid fa-check ${styles.greenCheck}`}></i>
                                <span className="ms-2">Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                            </li>
                        </ul>
                        <button className={`btn btn-success ${styles.button}`}>Read More →</button>
                    </div>
                    <div className="col-md-6">
                        <img
                            src="https://themewagon.github.io/Mentor/assets/img/about-2.jpg"
                            alt="Team"
                            className="img-fluid rounded"
                        />
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className={`row text-center mt-5 ${styles.countt}`}>
                    <div className="col-md-3">
                        <h3 className={styles.stat}>
                            <CountUp start={0} end={1232} duration={7} />+
                        </h3>
                        <p>Students</p>
                    </div>
                    <div className="col-md-3">
                        <h3 className={styles.stat}>
                            <CountUp start={0} end={64} duration={10} />+
                        </h3>
                        <p>Courses</p>
                    </div>
                    <div className="col-md-3">
                        <h3 className={styles.stat}>
                            <CountUp start={0} end={42} duration={11} />+
                        </h3>
                        <p>Events</p>
                    </div>
                    <div className="col-md-3">
                        <h3 className={styles.stat}>
                            <CountUp start={0} end={24} duration={18} />+
                        </h3>
                        <p>Trainers</p>
                    </div>
                </div>
            </div>


            {/* carosel strat  */}
            {/* Indicators */}




       

            <div className="container my-5">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="d-flex">
                                <div className={styles.cardContainer}>
                                    <div className={styles.imageContainer}>
                                        <img
                                            src="https://themewagon.github.io/Mentor/assets/img/testimonials/testimonials-1.jpg"
                                            alt="User"
                                            className={styles.image}
                                        />
                                    </div>
                                    <div className={styles.textContainer}>
                                        <h5 className={styles.name}>Saul Goodman</h5>
                                        <p className={styles.title}>CEO & Founder</p>
                                        <div className={styles.rating}>
                                            {Array.from({ length: 5 }).map((_, index) => (
                                                <FontAwesomeIcon key={index} icon={faStar} />
                                            ))}
                                        </div>
                                        <p className={styles.quote}>
                                            <span>&ldquo;</span> Proin iaculis purus consequat sem cure digni ssim
                                            donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                                            eget id, aliquam eget nibh et. <span>&rdquo;</span>
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.cardContainer}>
                                    <div className={styles.imageContainer}>
                                        <img
                                            src="https://themewagon.github.io/Mentor/assets/img/testimonials/testimonials-5.jpg"
                                            alt="User"
                                            className={styles.image}
                                        />
                                    </div>
                                    <div className={styles.textContainer}>
                                        <h5 className={styles.name}>Saul Goodman</h5>
                                        <p className={styles.title}>CEO & Founder</p>
                                        <div className={styles.rating}>
                                            {Array.from({ length: 5 }).map((_, index) => (
                                                <FontAwesomeIcon key={index} icon={faStar} />
                                            ))}
                                        </div>
                                        <p className={styles.quote}>
                                            <span>&ldquo;</span> Proin iaculis purus consequat sem cure digni ssim
                                            donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                                            eget id, aliquam eget nibh et. <span>&rdquo;</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex">
                                <div className={styles.cardContainer}>
                                    <div className={styles.imageContainer}>
                                        <img
                                            src="https://themewagon.github.io/Mentor/assets/img/testimonials/testimonials-3.jpg"
                                            alt="User"
                                            className={styles.image}
                                        />
                                    </div>
                                    <div className={styles.textContainer}>
                                        <h5 className={styles.name}>Saul Goodman</h5>
                                        <p className={styles.title}>CEO & Founder</p>
                                        <div className={styles.rating}>
                                            {Array.from({ length: 5 }).map((_, index) => (
                                                <FontAwesomeIcon key={index} icon={faStar} />
                                            ))}
                                        </div>
                                        <p className={styles.quote}>
                                            <span>&ldquo;</span> Proin iaculis purus consequat sem cure digni ssim
                                            donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                                            eget id, aliquam eget nibh et. <span>&rdquo;</span>
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.cardContainer}>
                                    <div className={styles.imageContainer}>
                                        <img
                                            src="https://themewagon.github.io/Mentor/assets/img/testimonials/testimonials-4.jpg"
                                            alt="User"
                                            className={styles.image}
                                        />
                                    </div>
                                    <div className={styles.textContainer}>
                                        <h5 className={styles.name}>Saul Goodman</h5>
                                        <p className={styles.title}>CEO & Founder</p>
                                        <div className={styles.rating}>
                                            {Array.from({ length: 5 }).map((_, index) => (
                                                <FontAwesomeIcon key={index} icon={faStar} />
                                            ))}
                                        </div>
                                        <p className={styles.quote}>
                                            <span>&ldquo;</span> Proin iaculis purus consequat sem cure digni ssim
                                            donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                                            eget id, aliquam eget nibh et. <span>&rdquo;</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex">
                                <div className={styles.cardContainer}>
                                    <div className={styles.imageContainer}>
                                        <img
                                            src="https://themewagon.github.io/Mentor/assets/img/testimonials/testimonials-2.jpg"
                                            alt="User"
                                            className={styles.image}
                                        />
                                    </div>
                                    <div className={styles.textContainer}>
                                        <h5 className={styles.name}>Saul Goodman</h5>
                                        <p className={styles.title}>CEO & Founder</p>
                                        <div className={styles.rating}>
                                            {Array.from({ length: 5 }).map((_, index) => (
                                                <FontAwesomeIcon key={index} icon={faStar} />
                                            ))}
                                        </div>
                                        <p className={styles.quote}>
                                            <span>&ldquo;</span> Proin iaculis purus consequat sem cure digni ssim
                                            donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                                            eget id, aliquam eget nibh et. <span>&rdquo;</span>
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.cardContainer}>
                                    <div className={styles.imageContainer}>
                                        <img
                                            src="https://themewagon.github.io/Mentor/assets/img/testimonials/testimonials-1.jpg"
                                            alt="User"
                                            className={styles.image}
                                        />
                                    </div>
                                    <div className={styles.textContainer}>
                                        <h5 className={styles.name}>Saul Goodman</h5>
                                        <p className={styles.title}>CEO & Founder</p>
                                        <div className={styles.rating}>
                                            {Array.from({ length: 5 }).map((_, index) => (
                                                <FontAwesomeIcon key={index} icon={faStar} />
                                            ))}
                                        </div>
                                        <p className={styles.quote}>
                                            <span>&ldquo;</span> Proin iaculis purus consequat sem cure digni ssim
                                            donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                                            eget id, aliquam eget nibh et. <span>&rdquo;</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="d-flex">
                                <div className={styles.cardContainer}>
                                    <div className={styles.imageContainer}>
                                        <img
                                            src="https://themewagon.github.io/Mentor/assets/img/testimonials/testimonials-2.jpg"
                                            alt="User"
                                            className={styles.image}
                                        />
                                    </div>
                                    <div className={styles.textContainer}>
                                        <h5 className={styles.name}>Saul Goodman</h5>
                                        <p className={styles.title}>CEO & Founder</p>
                                        <div className={styles.rating}>
                                            {Array.from({ length: 5 }).map((_, index) => (
                                                <FontAwesomeIcon key={index} icon={faStar} />
                                            ))}
                                        </div>
                                        <p className={styles.quote}>
                                            <span>&ldquo;</span> Proin iaculis purus consequat sem cure digni ssim
                                            donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                                            eget id, aliquam eget nibh et. <span>&rdquo;</span>
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.cardContainer}>
                                    <div className={styles.imageContainer}>
                                        <img
                                            src="https://themewagon.github.io/Mentor/assets/img/testimonials/testimonials-1.jpg"
                                            alt="User"
                                            className={styles.image}
                                        />
                                    </div>
                                    <div className={styles.textContainer}>
                                        <h5 className={styles.name}>Saul Goodman</h5>
                                        <p className={styles.title}>CEO & Founder</p>
                                        <div className={styles.rating}>
                                            {Array.from({ length: 5 }).map((_, index) => (
                                                <FontAwesomeIcon key={index} icon={faStar} />
                                            ))}
                                        </div>
                                        <p className={styles.quote}>
                                            <span>&ldquo;</span> Proin iaculis purus consequat sem cure digni ssim
                                            donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                                            eget id, aliquam eget nibh et. <span>&rdquo;</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.carouselIndicators}>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="0"
                            className={`${styles.indicatorButton} active`}
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="1"
                            className={styles.indicatorButton}
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="2"
                            className={styles.indicatorButton}
                            aria-label="Slide 3"
                        ></button>

                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="2"
                            className={styles.indicatorButton}
                            aria-label="Slide 3"
                        ></button>


                    </div>
                </div>
            </div>

  {/* carosel end  */}




            {/* strat footer  */}



            <footer className={`py-4 ${styles.footer}`}>
                <div className="container">
                    <div className="row">
                        {/* Mentor Section */}
                        <div className="col-lg-4 col-md-6">
                            <h4 className={styles.footerTitle}>Mentor</h4>
                            <p>
                                A108 Adam Street
                                <br />
                                New York, NY 535022
                            </p>
                            <p>
                                <strong>Phone:</strong> +1 5589 55488 55<br />
                                <strong>Email:</strong> info@example.com
                            </p>
                            <div className="d-flex">
                                <a href="#" className={`${styles.icon} ${styles.iconHover}`}>
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className={`${styles.icon} ${styles.iconHover}`}>
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="#" className={`${styles.icon} ${styles.iconHover}`}>
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className={`${styles.icon} ${styles.iconHover}`}>
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </div>
                        </div>

                        {/* Useful Links */}
                        <div className="col-lg-2 col-md-6">
                            <h4 className={styles.footerTitle}>Useful Links</h4>
                            <ul className={styles.footerList}>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Terms of service</a></li>
                                <li><a href="#">Privacy policy</a></li>
                            </ul>
                        </div>

                        {/* Our Services */}
                        <div className="col-lg-3 col-md-6">
                            <h4 className={styles.footerTitle}>Our Services</h4>
                            <ul className={styles.footerList}>
                                <li><a href="#">Web Design</a></li>
                                <li><a href="#">Web Development</a></li>
                                <li><a href="#">Product Management</a></li>
                                <li><a href="#">Marketing</a></li>
                                <li><a href="#">Graphic Design</a></li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div className="col-lg-3 col-md-6">
                            <h4 className={styles.footerTitle}>Our Newsletter</h4>
                            <p>
                                Subscribe to our newsletter and receive the latest news about
                                our products and services!
                            </p>
                            <form className={styles.subscribeForm}>
                                <input
                                    type="email"
                                    className={` ${styles.input}`}
                                    placeholder="Enter your email"
                                />
                                <button className={styles.subscribeButton} type="submit">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className=" d-flex justify-content-center ">
                    <div className={`text-center mt-4 ${styles.copyright}`}>
                        &copy; Copyright <strong>Mentor</strong>. All Rights Reserved
                        <br />
                        Designed by <a href="#" style={{ textDecoration: "none", color: "green" }} >BootstrapMade</a> | Distributed by <a href="#" style={{ textDecoration: "none", color: "green" }} >ThemeWagon</a>
                    </div>
                </div>
            </footer>



            {/* end footer  */}
        </>
    )


}
export default About