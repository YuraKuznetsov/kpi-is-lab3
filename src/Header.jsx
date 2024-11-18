import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            Профіль
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/doctors" className="nav-link">
                            Пошук персоналу
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/personal" className="nav-link">
                            Замовлення ліків
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/personal" className="nav-link">
                            Клініки
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
