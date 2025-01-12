import styles from './Hom.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faUser, faHeart, faChartBar, faGem, faBurger, faEye, faInfinity, faGraduationCap, faStar, faDiagramProject, faToolbox } from "@fortawesome/free-solid-svg-icons";




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


const courses1 = [
    {
        image: "https://themewagon.github.io/Mentor/assets/img/trainers/trainer-1.jpg",
        title: "Walter White",
        title2: "Web Development",
        description: "Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut",

    },
    {

        title: "Sarah Jhinson",
        image: "https://themewagon.github.io/Mentor/assets/img/trainers/trainer-2.jpg",
        title2: "Marketing",
        description: "epellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus",


    },
    {

        title: "Copywriting",
        title2: "Content",
        description: "Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara",
        image: "https://themewagon.github.io/Mentor/assets/img/trainers/trainer-3.jpg",


    },
];




// styles
function Home() {
    return (
        <>
            <div className={`img-fluid ${styles.bg_img}`}>
                <div className={`${styles.texts}`}>
                    <div className={`${styles.content}`}>
                        <div className="text-white">
                            <h1>Learning Today,</h1>
                            <h1>Leading Tomorrow</h1>
                            <p>We are a team of talented designers making websites with Bootstrap</p>
                        </div>
                        <button className={styles.outlineBtn}> Get Started  </button>
                    </div>
                </div>
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
                            src="https://themewagon.github.io/Mentor/assets/img/about.jpg"
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


            <div className="container py-5">
                <div className="row g-4">
                    {/* القسم الأخضر */}
                    <div className="col-lg-3">
                        <div className={`${styles.greenBox} p-4 text-white`}>
                            <h4>Why Choose Our Products?</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <button className={`${styles.learnMoreBtn}`}>Learn More ➔</button>
                        </div>
                    </div>

                    {/* البطاقات */}
                    <div className="col-lg-3 ">
                        <div className={`${styles.cards} text-center p-4`}>
                            <FontAwesomeIcon icon={faChartBar} className={`${styles.icon1}`} />
                            <h5>Corporis voluptates officia eiusmod</h5>
                            <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip.</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className={`${styles.cards} text-center p-4`}>
                            <FontAwesomeIcon icon={faGem} className={`${styles.icon1}`} />
                            <h5>Ullamco laboris ladore pan</h5>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className={`${styles.cards} text-center p-4`}>
                            <FontAwesomeIcon icon={faBurger} className={`${styles.icon1}`} />
                            <h5>Labore consequatur incidid dolore</h5>
                            <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere.</p>
                        </div>
                    </div>
                </div>

                {/* الأيقونات */}
                <div className="row g-3 mt-4">
                    <div className="col-lg-2 col-6">
                        <div className={`${styles.iconBox}`}>
                            <FontAwesomeIcon style={{ color: "green", fontSize: "1.5rem" }} icon={faEye} />
                            <span>Lorem Ipsum</span>
                        </div>
                    </div>
                    <div className="col-lg-2 col-6">
                        <div className={`${styles.iconBox}`}>
                            <FontAwesomeIcon style={{ color: "blue", fontSize: "1.5rem" }} icon={faInfinity} />
                            <span>Dolor Sit</span>
                        </div>
                    </div>
                    <div className="col-lg-2 col-6">
                        <div className={`${styles.iconBox}`}>
                            <FontAwesomeIcon style={{ color: "red", fontSize: "1.5rem" }} icon={faGraduationCap} />
                            <span>Sed Perspicatis</span>
                        </div>
                    </div>
                    <div className="col-lg-2 col-6">
                        <div className={`${styles.iconBox}`}>
                            <FontAwesomeIcon style={{ color: "yellow", fontSize: "1.5rem" }} icon={faStar} />
                            <span>Eiusmod </span>
                        </div>
                    </div>
                    <div className="col-lg-2 col-6">
                        <div className={`${styles.iconBox}`}>
                            <FontAwesomeIcon style={{ color: "Pink", fontSize: "1.5rem" }} icon={faDiagramProject} />
                            <span>Dirada Pack</span>
                        </div>
                    </div>
                    <div className="col-lg-2 col-6">
                        <div className={`${styles.iconBox}`}>
                            <FontAwesomeIcon style={{ color: "orange", fontSize: "1.5rem" }} icon={faToolbox} />
                            <span>Moton Ideal</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* cards  */}

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
                                        <span className='p-2 text-black-50'>
                                            <FontAwesomeIcon className='' icon={faUser} /> {course.students}
                                        </span>
                                        <span className='p-2 text-black-50'>
                                            <FontAwesomeIcon icon={faHeart} /> {course.likes}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* catds 2 */}
            <div className="container mt-5">


                <div className="row">
                    {courses1.map((course, index) => (
                        <div className="col-md-4 mb-4  " key={index}>
                            <div className={`card ${styles.courseCard}`}>
                                <img src={course.image} className="card-img-top" alt={course.title} />
                                <div className="card-body">

                                    <h5 className={` text-black-50 text-center ${styles.cardTitle}`}>{course.title}</h5>
                                    <p className={`fw-bold text-black-50 text-center`}>{course.title2}</p>
                                    <p className={` text-black-50 text-center  ${styles.cardText}`}>{course.description}</p>

                                </div>
                                <div className="d-flex justify-content-center p-3 mt-3">
                                    <span className='p-2'>

                                        <FontAwesomeIcon style={{ fontSize: "1.6rem" }} className='  text-black-50 p-2 ' icon={faFacebook} />
                                        <FontAwesomeIcon style={{ fontSize: "1.6rem" }} className=' text-black-50 p-2 ' icon={faInstagram} />

                                        <FontAwesomeIcon style={{ fontSize: "1.6rem" }} className=' text-black-50 p-2 ' icon={faTwitter} />


                                        <FontAwesomeIcon style={{ fontSize: "1.6rem" }} className=' text-black-50 p-2 ' icon={faXTwitter} />
                                    </span>
                                    <span className='p-2'>

                                    </span>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* footer style  */}


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
                        Designed by <a href="#" style={{textDecoration:"none" ,color:"green"}} >BootstrapMade</a> | Distributed by <a href="#"  style={{textDecoration:"none" ,color:"green"}} >ThemeWagon</a>
                    </div>
                </div>
            </footer>


        </>
    )
}

export default Home;