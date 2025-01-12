import styles from './Pricin.module.css'

function Pricing() {

    const plans = [
        { title: "Free", price: 0, features: ["Aida dere", "Nec feugiat nisl", "Nulla at volutpat dola", "Pharetra massa"], highlighted: false },
        { title: "Business", price: 19, features: ["Aida dere", "Nec feugiat nisl", "Nulla at volutpat dola", "Pharetra massa"], highlighted: true },
        { title: "Developer", price: 29, features: ["Aida dere", "Nec feugiat nisl", "Nulla at volutpat dola", "Pharetra massa"], highlighted: false },
        { title: "Ultimate", price: 49, features: ["Aida dere", "Nec feugiat nisl", "Nulla at volutpat dola", "Pharetra massa"], highlighted: false, badge: "Advanced" },
      ];

    return (<>
        {/* Pricing strat  */}

        <div>
            {/* الجزء العلوي الأخضر */}
            <section className={styles.heroSection}>
                <div className="container text-center">
                    <h1 className={styles.title1}>Pricing</h1>
                    <p className={styles.description}>
                        Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas
                        consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint.
                        Sit quaerat ipsum dolorem.
                    </p>
                </div>
            </section>


            <section className={styles.breadcrumbSection}>
                <div className="container text-start">
                    <span className={styles.breadcrumb}>Home</span> / <span className={styles.breadcrumb}>Pricing</span>
                </div>
            </section>
        </div>

        {/* Pricing end  */}




{/* start cards  */}




<div className={`container my-5`}>
      <div className="row text-center">
        {plans.map((plan, index) => (
          <div className="col-lg-3 col-md-6 mb-4" key={index}>
            <div className={`${styles.card} ${plan.highlighted ? styles.highlighted : ""}`}>
              {plan.badge && <div className={styles.badge}>{plan.badge}</div>}
              <h5 className={styles.title}>{plan.title}</h5>
              <h6 className={styles.price}>
                ${plan.price} <span className={styles.perMonth}>/month</span>
              </h6>
              <ul className={styles.features}>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button className={`${styles.button} btn btn-success`}>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>







{/* end cards  */}







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



export default Pricing