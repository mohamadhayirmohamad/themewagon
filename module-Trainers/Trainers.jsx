import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import styles from './Trainer.module.css'
function Trainers() {


    const teamMembers = [
        {
            image: "https://themewagon.github.io/Mentor/assets/img/team/team-1.jpg",
            name: "Walter White",
            role: "Business",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
            twitter: "#",
            facebook: "#",
            instagram: "#",
            linkedin: "#",
        },
        {
            image: "https://themewagon.github.io/Mentor/assets/img/team/team-2.jpg",
            name: "Sarah Jhonson",
            role: "Marketing",
            description: "Labore ipsum sit consectetuer adipiscing elit dolor.",
            twitter: "#",
            facebook: "#",
            instagram: "#",
            linkedin: "#",
        },
        {
            image: "https://themewagon.github.io/Mentor/assets/img/team/team-3.jpg",
            name: "William Anderson",
            role: "Maths",
            description: "Illum minima ea autem doloremque ipsum quidem quas aspernatur.",
            twitter: "#",
            facebook: "#",
            instagram: "#",
            linkedin: "#",
        },

    ];

    const teamMembers1 = [
        {
            image: "https://themewagon.github.io/Mentor/assets/img/team/team-4.jpg",
            name: "Amanda Jepson",
            role: "Foreign Languages",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
            twitter: "#",
            facebook: "#",
            instagram: "#",
            linkedin: "#",
        },
        {
            image: "https://themewagon.github.io/Mentor/assets/img/team/team-5.jpg",
            name: "Brian Doe",
            role: "Web Development",
            description: "Labore ipsum sit consectetuer adipiscing elit dolor.",
            twitter: "#",
            facebook: "#",
            instagram: "#",
            linkedin: "#",
        },
        {
            image: "https://themewagon.github.io/Mentor/assets/img/team/team-6.jpg",
            name: "Josepha Palas",
            role: "Business",
            description: "Illum minima ea autem doloremque ipsum quidem quas aspernatur.",
            twitter: "#",
            facebook: "#",
            instagram: "#",
            linkedin: "#",
        },

    ];

    return (
        <>
            {/* Trainers strat  */}

            <div>
                {/* الجزء العلوي الأخضر */}
                <section className={styles.heroSection}>
                    <div className="container text-center">
                        <h1 className={styles.title1}>Trainers</h1>
                        <p className={styles.description}>
                            Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas
                            consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint.
                            Sit quaerat ipsum dolorem.
                        </p>
                    </div>
                </section>


                <section className={styles.breadcrumbSection}>
                    <div className="container text-start">
                        <span className={styles.breadcrumb}>Home</span> / <span className={styles.breadcrumb}>Trainers</span>
                    </div>
                </section>
            </div>

            {/* Trainers end  */}



            {/* cards start  */}


            <div className="mt-5" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
                {teamMembers.map((member, index) => (
                    <div key={index} className={styles.cardContainer}>
                        <div className={styles.imageContainer}>
                            <img src={member.image} alt={member.name} className={styles.image} />
                            <div className={styles.socialIcons}>
                            <div className=" mb-5">
                                    <a href={member.twitter} className={styles.icon1}>
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                    <a href={member.facebook} className={styles.icon1}>
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                </div>
                                <div className="mb-5">
                                    <a href={member.instagram} className={styles.icon1}>
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                    <a href={member.linkedin} className={styles.icon1}>
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <h5 className={styles.name}>{member.name}</h5>
                        <p className={styles.role}>{member.role}</p>
                        <p className={styles.description}>{member.description}</p>
                    </div>
                ))}
            </div>


            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
                {teamMembers1.map((member, index) => (
                    <div key={index} className={styles.cardContainer}>
                        <div className={styles.imageContainer}>
                            <img src={member.image} alt={member.name} className={styles.image} />
                            <div className={styles.socialIcons}>
                                <div className="mb-5">
                                    <a href={member.twitter} className={styles.icon1}>
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                    <a href={member.facebook} className={styles.icon1}>
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                </div>
                                <div className="">
                                    <a href={member.instagram} className={styles.icon1}>
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                    <a href={member.linkedin} className={styles.icon1}>
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <h5 className={styles.name}>{member.name}</h5>
                        <p className={styles.role}>{member.role}</p>
                        <p className={styles.description}>{member.description}</p>
                    </div>
                ))}
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

export default Trainers