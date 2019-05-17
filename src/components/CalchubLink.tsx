import * as React from 'react';

export interface iCalchubLinkProps {
    white?: boolean;
}

export const CalchubLink = (props: iCalchubLinkProps) => {
    let styles = "calchub-link ";
    if (props.white) {
        styles += "calchub-link-white";
    } else {
        styles += "calchub-link-black";
    }

    return (
        <a className={ styles } 
           href="https://www.calchub.co">
           Calchub.co
        </a>
    );
}