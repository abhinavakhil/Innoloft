import React from "react";

import "../components/Header.css";

 const Header = () => {
    return (
        <div className="Header">
            <div className="Header__Logo">
              <img className="Header__Logo__image" src="https://lh3.googleusercontent.com/proxy/0AhLixGk9VCYxTLVeam67bnKqOqcoDwP8xroxp3Ygq-Kcr6kkYvJCBpjQHZFD3yTgWUoBNGqS-DySsJn1z16zAleEz9g2hXShGRDpoTp-XqVA6l1LDR2DoagtT_lnEodPi6osAOJiZfACC9GU5WHbTx3l2YFR4jYiCbI5w" />
            </div>
           <div className="Header-Right">
             <a className="item"><i className="fas fa-globe-africa"></i> En</a>
             <a className="item"><i className="fas fa-envelope"></i></a>
             <a className="item"><i className="fas fa-bell"></i></a>
           </div>   
        </div>
    )
}

export default Header
