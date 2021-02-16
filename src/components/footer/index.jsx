import './style.css';
import {GrPinterest} from "react-icons/gr";
import {FiInstagram, FiMail} from "react-icons/fi";
import {FaFacebookF, FaLinkedinIn} from "react-icons/fa";

const FooterComponent = () => {
    return (
        <>
            <footer>
                <div className="footer">
                    <div>
                        <FiMail /><h3>veronicavaldevilt@gmail.com</h3>
                    </div>

                    <div className="footer-links">
                        <a href="#">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.instagram.com/veronicavaldeviltdesign/">
                            <FiInstagram /> 
                            @veronicavaldeviltdesign 
                        </a>
                        <a href="#">
                            <GrPinterest />
                        </a>
                        
                        <a href="https://ar.linkedin.com/in/veronica-valdevilt-84b9b258">
                            <FaLinkedinIn />
                        </a>
                    </div>
                    <div className="footer-copyright">
                        <p>All rights reserved CopyrightIcon 2021</p>
                    </div>
                </div>
            </footer>
        </>
    )
};

export default FooterComponent;