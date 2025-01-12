import styles from './Navbar.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <>
        <nav className={`navbar navbar-expand-lg bg-white ${styles.navbar}`}>
            <div className="container">
                <a className={`navbar-brand ${styles.logo}`} href="#">
                    MENTOR
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div style={{position:'relative', left:'200px'}} className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <Link className={`nav-link m-2  ${styles.link}`} to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link m-2 ${styles.link}`} to="/about">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link m-2 ${styles.link}`} to="/courses">
                                Courses
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link m-2 ${styles.link}`} to="/trainers">
                                Trainers
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link m-2 ${styles.link}`} to="/events">
                                Events
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link m-2 ${styles.link}`} to="/pricing">
                                Pricing
                            </Link>
                        </li>
                        <li className="nav-item dropdown m-2 ">
                            <Link
                                className={`nav-link dropdown-toggle ${styles.link}`}
                                to="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Dropdown
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link className="dropdown-item " to="#">
                                        Action
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="#">
                                        Another action
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="#">
                                        Something else here
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item m-2">
                            <Link className={`nav-link ${styles.link}`} to="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <button className={`btn btn-success ${styles.getStarted}`}>
                        Get Started
                    </button>
                </div>
            </div>
        </nav>

        </>


    )
}

export default Navbar;

