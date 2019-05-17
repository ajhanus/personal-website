import * as React from 'react';
import { Link } from 'react-router-dom';

export interface iNavbarProps {
}

export interface iNavbarButtonProps {
    title: string;
    destination: string;
}

export const Navbar = (props: iNavbarProps) => {
    return (
        <div className="navbar">
            <div className="navbar-buttons">
                <NavbarButton title="Home" destination="/" />
                <NavbarButton title="Projects" destination="/projects" />
                <NavbarButtonResume />
            </div>
            <div className="navbar-email">hanusaj@gmail.com</div>
        </div>
    );
}

const NavbarButtonResume = () => {
    return (
        <a href="/pdfs/resume.pdf" className="navbar-button" target="_blank">Resume</a>
    );
}

const NavbarButton = (props: iNavbarButtonProps) => {
    return (
        <Link to={props.destination} className="navbar-button">{ props.title }</Link>
    );
}