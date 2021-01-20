import * as React from 'react';
import { Link } from 'react-router-dom';

export interface iNavbarProps {
    mobile: boolean;
}

export interface iNavbarButtonProps {
    title: string;
    destination: string;
}

export interface iNavbarButtonPDFProps {
    title: string;
    pdf: string;
}

export class Navbar extends React.Component<iNavbarProps, {}> {
    render() {
        if (this.props.mobile) {
            return (
                <NavbarVertical />
            );
        }
        return (
            <NavbarHorizontal />
        );
    }
}

const NavbarHorizontal = () => {
    return (
        <div className="navbar-horizontal">
            <div className="navbar-buttons">
                <NavbarButton title="Home" destination="/" />
                <NavbarButton title="Projects" destination="/projects" />
                <NavbarButtonPDF title="Resume" pdf="resume.pdf" />
            </div>
            <div className="navbar-email">hanusaj@gmail.com</div>
        </div>
    )
}

interface iNavbarVerticalState {
    navVisible: boolean;
    userVisible: boolean;
}

class NavbarVertical extends React.Component<{},iNavbarVerticalState> {
    constructor(props: any) {
        super(props);
        this.state = {
            navVisible: false,
            userVisible: false
        }
    }

    onClickBurger = () => {
        this.setState((prevState, props) => {
            return { 
                navVisible: !prevState.navVisible,
                userVisible: false
            }
        });
    }

    onClickName = () => {
        this.setState((prevState, props) => {
            return { 
                navVisible: false,
                userVisible: !prevState.userVisible
            }
        });
    }

    render() {
        const navActive = this.state.navVisible ? " active" : "";
        const userActive = this.state.userVisible ? " active" : "";
        return (
            <div className="navbar-vertical">
                <div className="navbar-burger-container">
                    <div className="navbar-burger" onClick={this.onClickBurger}>
                        <i className="fa fa-bars"></i>
                    </div>
                    <div className="navbar-name" onClick={this.onClickName}>
                        AJ Hanus
                        { userActive ? <i className="fa fa-angle-down"></i> : <i className="fa fa-angle-up"></i> }
                    </div>
                </div>
                <div className={"name-info-container" + userActive}>
                    <div className="name-info">
                        <div>hanusaj@gmail.com</div>
                    </div>
                </div>
                <div className={"navbar-buttons-container" + navActive}>
                    <div className="navbar-buttons">
                        <NavbarButton title="Home" destination="/" />
                        <NavbarButton title="Projects" destination="/projects" />
                        <NavbarButtonPDF title="Resume" pdf="resume.pdf" />
                    </div>
                </div>
            </div>
        )
    }
}

const NavbarButtonPDF = (props: iNavbarButtonPDFProps) => {
    return (
        <a href={"/pdfs/" + props.pdf} className="navbar-button" target="_blank" rel="noopener noreferrer">{props.title}</a>
    )
}

const NavbarButton = (props: iNavbarButtonProps) => {
    return (
        <Link to={props.destination} className="navbar-button">{ props.title }</Link>
    );
}