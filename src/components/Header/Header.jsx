import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="header">
            <div className="header-left">
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰ <span>Open Menu</span>
                </button>
                <img src="https://centrumslniecko.sk/wp-content/themes/centrumslniecko2/assets/img/logo-cs.svg" alt="Logo" />
            </div>
            <div className={`header-right ${menuOpen ? 'open' : ''}`}>
                <ul className="menu">
                    <li className="item"><Link to="/">Home</Link></li>
                    <li className="item"><Link to="/sponsors">Sponsors</Link></li>
                    <li className="item"><Link to="/about">About</Link></li>
                    <li className="item"><Link to="/articles">Articles</Link></li>
                    <li className="item"><Link to="/donate">Donate</Link></li>
                </ul>
            </div>
        </div>
    );
}
