import styles from './Courses.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUser, faHeart,  } from "@fortawesome/free-solid-svg-icons";



const courses = [
    {
        category: "Web Development",
        title: "Website Design",
        price: "$169",
        description: "Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.",
        image: "https://themewagon.github.io/Mentor/assets/img/course-1.jpg",
        author: "Antonio",
        imss: "https://themewagon.github.io/Mentor/assets/img/trainers/trainer-1-2.jpg",
        students: 50,
        likes: 65,
    },
    {
        category: "Marketing",
        title: "Search Engine Optimization",
        price: "$250",
        description: "Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.",
        image: "https://themewagon.github.io/Mentor/assets/img/course-2.jpg",
        author: "Lana",
        imss: "https://themewagon.github.io/Mentor/assets/img/trainers/trainer-2-2.jpg",
        students: 35,
        likes: 42,
    },
    {
        category: "Content",
        title: "Copywriting",
        price: "$180",
        description: "Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.",
        image: "https://themewagon.github.io/Mentor/assets/img/course-3.jpg",
        author: "Brandon",
        imss: "https://themewagon.github.io/Mentor/assets/img/trainers/trainer-3-2.jpg",
        students: 20,
        likes: 85,
    },
];

function Courses (){
    return(
        <>
               <div>
                        {/* الجزء العلوي الأخضر */}
                        <section className={styles.heroSection}>
                            <div className="container text-center">
                                <h1 className={styles.title1}>Courses</h1>
                                <p className={styles.description}>
                                    Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas
                                    consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint.
                                    Sit quaerat ipsum dolorem.
                                </p>
                            </div>
                        </section>
        
        
                        <section className={styles.breadcrumbSection}>
                            <div className="container text-start">
                                <span className={styles.breadcrumb}>Home</span> / <span className={styles.breadcrumb}> Courses</span>
                            </div>
                        </section>
                    </div>


{/* start cards  */}
 <div className="container mt-5">
                <div className="d-flex">

                    <h3 className={styles.sectionTitle}>COURSES </h3>
                    <hr style={{ color: "green" }} className=' w-25' />
                </div>
                <h1 className={styles.mainTitle}>POPULAR COURSES</h1>
                <div className="row">
                    {courses.map((course, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className={`card ${styles.courseCard}`}>
                                <img src={course.image} className="card-img-top" alt={course.title} />
                                <div className="card-body">
                                    <div className="">
                                        <span className={`${styles.badge}`}>{course.category}</span>

                                        <span className={styles.price}>{course.price}</span>
                                    </div>

                                    <h5 className={styles.cardTitle}>{course.title}</h5>
                                    <p className={styles.cardText}>{course.description}</p>
                                    <hr className={styles.hrs} />
                                    <div className={styles.user}>
                                        <img className={`${styles.ims}`} src={course.imss} alt="" />
                                        <span className={styles.author}>{course.author}</span>

                                    </div>
                                    <div className="d-flex justify-content-end  mt-3">
                                        <span className='px-2 text-black-50'>
                                            <FontAwesomeIcon className='' icon={faUser} /> {course.students}
                                        </span>
                                        <span className='pb-2 text-black-50'>
                                            <FontAwesomeIcon icon={faHeart} /> {course.likes}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


{/* end cars  */}

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
export default Courses;
