import React from 'react';
import "../design/styleFooter.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faLinkedin,
    faGithub
} from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <div className="footer">
            <div className="utilLinks">
                <li>
                    <a href="#">Home</a>
                    <p>-</p>
                    <a href="#">Produse</a>
                </li>
            </div>
            <div className="social">
            <a href="#"
               className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
                <a href="#"
                   className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="#" className="linkedin social">
                    <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                </a>
                <a href="#"
                className="github social">
                    <FontAwesomeIcon icon={faGithub} size="2x"/>
                </a>

            </div>

            <div className="companyName">
                <p>Outstock &copy; 2023</p>
            </div>
        </div>

    );
}

export default Footer