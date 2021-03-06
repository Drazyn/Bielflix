import React from 'react';
import Logo from '../../assets/img/bielflix-logo.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from '../ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="BielFlix logo" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>

        </nav>
    );
}

export default Menu;