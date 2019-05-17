import * as React from 'react';

export interface iSectionTitleProps {
    title: string;
}

export const SectionTitle = (props: iSectionTitleProps) => {
    return (
        <div className="section-title">
           { props.title }
        </div>
    );
}