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
                <NavbarButton title="Memory" destination="/memory" />
                <NavbarButtonPDF title="Resume" pdf="resume.pdf" />
            </div>
            <div className="navbar-email">hanusaj@gmail.com</div>
        </div>
    )
}

interface iNavbarVerticalState {
    visible: boolean;
}

class NavbarVertical extends React.Component<{},iNavbarVerticalState> {
    constructor(props: any) {
        super(props);
        this.state = {
            visible: false
        }
    }

    onClickBurger = () => {
        this.setState((prevState, props) => {
            return { 
                visible: !prevState.visible
            }
        });
    }

    render() {
        const active = this.state.visible ? " active" : "";
        return (
            <div className="navbar-vertical">
                <div className="navbar-burger-container">
                    <div className="navbar-burger" onClick={this.onClickBurger}>
                        <i className="fa fa-bars"></i>
                    </div>
                    <div className="navbar-email">hanusaj@gmail.com</div>
                </div>
                <div className={"navbar-buttons-container" + active}>
                    <div className="navbar-buttons">
                        <NavbarButton title="Home" destination="/" />
                        <NavbarButton title="Projects" destination="/projects" />
                        <NavbarButton title="Memory" destination="/memory" />
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