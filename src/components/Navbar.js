import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Navbar({ title = 'Set title here', aboutText = 'About text here', mode, toggleMode, toggleColor }) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg bg-body-tertiary bg-${mode}`} data-bs-theme={mode}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{aboutText}</Link>
                            </li>
                        </ul>
                        <input className='form-group mx-2' type="color" id="color" name="color" onChange={toggleColor} title='Apply color to body' />
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" onClick={toggleMode} id="switchCheckDefault" />
                        </div>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
};