
import styles from './Contact.module.css'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
function Contact() {



    return (<>

        {/* contact strat  */}

        <div>
            {/* الجزء العلوي الأخضر */}
            <section className={styles.heroSection}>
                <div className="container text-center">
                    <h1 className={styles.title1}>contact</h1>
                    <p className={styles.description}>
                        Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas
                        consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint.
                        Sit quaerat ipsum dolorem.
                    </p>
                </div>
            </section>


            <section className={styles.breadcrumbSection}>
                <div className="container text-start">
                    <span className={styles.breadcrumb}>Home</span> / <span className={styles.breadcrumb}>contact</span>
                </div>
            </section>
        </div>

        {/* contact end  */}



        {/* map start  */}


        <div>
            {/* Google Map */}
            <div className="embed-responsive embed-responsive-16by9">
                <iframe
                    className="embed-responsive-item"
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.0018131969395!2d-77.03687028464733!3d38.90719217957069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7b9b1e3bb13%3A0x3310bfa54f8b5f97!2sWashington%2C%20DC%2C%20USA!5e0!3m2!1sen!2seg!4v1616026669656!5m2!1sen!2seg"
                    style={{ border: 0, width: "100%", height: "400px" }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>

            {/* Contact Section */}
            <div className="container my-5">
                <div className="row">
                    {/* Contact Info */}
                    <div className={`col-md-6 ${styles.contactInfo}`}>
                        <div className={styles.infoItem}>
                            <FaMapMarkerAlt className={styles.icon} />
                            <div>
                                <h5 className={styles.infoTitle}>Address</h5>
                                <p className={styles.infoText}>A108 Adam Street, Washington, DC, 535022</p>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <FaPhoneAlt className={styles.icon} />
                            <div>
                                <h5 className={styles.infoTitle}>Call Us</h5>
                                <p className={styles.infoText}>+1 5589 55488 55</p>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <FaEnvelope className={styles.icon} />
                            <div>
                                <h5 className={styles.infoTitle}>Email Us</h5>
                                <p className={styles.infoText}>info@example.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="col-md-6">
                        <form className={styles.contactForm}>
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="text" className={`form-control mb-3 ${styles.input}`} placeholder="Your Name" />
                                </div>
                                <div className="col-md-6">
                                    <input type="email" className={`form-control mb-3 ${styles.input}`} placeholder="Your Email" />
                                </div>
                            </div>
                            <input type="text" className={`form-control mb-3 ${styles.input}`} placeholder="Subject" />
                            <textarea className={`form-control mb-3 ${styles.textarea}`} rows="5" placeholder="Message"></textarea>
                            <button type="submit" className={`btn btn-success w-100 ${styles.submitButton}`}>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>







        {/* end map  */}






        {/* footer strat  */}
        <footer className={`py-4 mt-5 ${styles.footer}`}>
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



        {/* footer end  */}
    </>)
}

export default Contact 