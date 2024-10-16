// Header.js
import React from 'react';
import './Header.css'; // Importando o CSS

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="Mario.jpg" alt="Logo do Site" />
            </div>
            <nav className="menu">
                <ul>
                    <li><a href="#categoria1">Categoria 1</a></li>
                    <li><a href="#categoria2">Categoria 2</a></li>
                    <li><a href="#categoria3">Categoria 3</a></li>
                    <li><a href="#categoria4">Categoria 4</a></li>
                    <li><a href="#categoria5">Categoria 5</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;