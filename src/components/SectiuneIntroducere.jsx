import React from "react";
import "../design/styleSectiuneIntroducere.css";
import background from "../pics/scaunHomePage.jpg";

function SectiuneaIntroducere() {
    return (
        <div>
            <div className="container">
                <div className="info">
                    <h1>Drop Chair</h1>
                    <h1>The Black Leather Edition</h1>
                    <p>The Drop&#8482; chair was designed by Arne Jacobsen in 1958 as part of his masterpiece, the legendary Radisson Blue Royal Hotel in Copenhagen.</p>
                    <a href="/produse" >
                        {/*target="_blank" rel="noopener noreferrer" - iti deschide un nou tab catre link-ul setat*/}
                    <button className="button" type="button">Discover now</button>
                </a>
                </div>
            </div>
                <img className="scaun"
                     src={background}
                     alt="logo"
                />
        </div>
    );
}

export default SectiuneaIntroducere;
