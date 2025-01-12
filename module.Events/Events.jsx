import styles from './Event.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function Events() {
    return (
        <>

            {/* Events strat  */}

            <div>
                {/* الجزء العلوي الأخضر */}
                <section className={styles.heroSection}>
                    <div className="container text-center">
                        <h1 className={styles.title1}>Events</h1>
                        <p className={styles.description}>
                            Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas
                            consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint.
                            Sit quaerat ipsum dolorem.
                        </p>
                    </div>
                </section>


                <section className={styles.breadcrumbSection}>
                    <div className="container text-start">
                        <span className={styles.breadcrumb}>Home</span> / <span className={styles.breadcrumb}>Events</span>
                    </div>
                </section>
            </div>

            {/* Events end  */}




            {    /* cards strat  */}




            <div className={`container ${styles.container}`}>
                <div className="row justify-content-center">
                    {/* الكارت الأول */}
                    <div className="col-md-6 mb-4">
                        <div className={`card ${styles.card}`}>
                            <div className={styles.imageWrapper}>
                                <img
                                    src="https://themewagon.github.io/Mentor/assets/img/events-item-1.jpg" // استبدل برابط الصورة المطلوبة
                                    alt="Marketing Strategies"
                                    className={`card-img-top ${styles.cardImage}`}
                                />
                            </div>
                        </div>
                        <div className={`card-body  ${styles.cardBody}`}>
                            <div className="">
                                <div className="  ">
                                    <h5 className={styles.cardTitle}>Marketing Strategies</h5>
                                    <p className={styles.cardDate}>Sunday, November 15th at 7:00 pm</p>
                                    <p className={styles.cardDescription}>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium,
                                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                                        beatae vitae dicta sunt explicabo.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* الكارت الثاني */}
                    <div className="col-md-6 mb-4">
                        <div className={`card ${styles.card}`}>
                            <div className={styles.imageWrapper}>
                                <img
                                    src="https://themewagon.github.io/Mentor/assets/img/events-item-2.jpg" // استبدل برابط الصورة المطلوبة
                                    alt="Marketing Strategies"
                                    className={`card-img-top ${styles.cardImage}`}
                                />
                            </div>
                        </div>
                        <div className={`card-body  ${styles.cardBody}`}>
                            <div className="">
                                <div className="  ">
                                    <h5 className={styles.cardTitle}>Marketing Strategies</h5>
                                    <p className={styles.cardDate}>Sunday, November 15th at 7:00 pm</p>
                                    <p className={styles.cardDescription}>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium,
                                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                                        beatae vitae dicta sunt explicabo.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>









            {/* cards end  */}

















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





        </>
    )
}

export default Events