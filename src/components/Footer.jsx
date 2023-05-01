import React from 'react';
import "../design/styleFooter.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faTwitter,
    faLinkedinIn,
    faGithub
} from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <div className="footer">
        <div className="csz">
            <div className="utilLinks">
                    <a href="/home">Home</a>
                    <p> - </p>
                    <a href="/produse">Produse</a>
            </div>
            <div className="social">
            <a href="https://www.facebook.com/cozmiinn/"
               className="facebook-social">
                <FontAwesomeIcon icon={faFacebookF} size="2x" />
            </a>
                <a href="https://www.linkedin.com/in/cosmin-mihalescul-4382b6188/" className="linkedin-social">
                <FontAwesomeIcon icon={faLinkedinIn} size="2x"/>
            </a>
                <a href="#"
                   className="twitter-social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>

                <a href="https://github.com/cozmiinn"
                className="github-social">
                    <FontAwesomeIcon icon={faGithub} size="2x"/>
                </a>

            </div>

            <div className="companyName">
                <p>Outstock &copy; 2023</p>
            </div>
        </div>
        </div>

    );
}

export default Footer