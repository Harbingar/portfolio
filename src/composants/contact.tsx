import React from 'react';
import { ContactProps } from '../interfaces/contactInterface';

const Contact: React.FC<ContactProps> = ({ title, linkText, linkHref }) => {
    return (
        <div className="flex md:w-1/4 w-3/4 h-1/5 flex-col items-center justify-around text-xl">
            <h1 className="text-3xl text-border text-bestWhite">{title}</h1>
            <a className="w-full md:text-lg text-sm rounded py-3 text-center border-2 border-bestWhite text-bestWhite hover:text-border-high hover:shadow-bestWhite hover:shadow-md" href={linkHref}>{linkText}</a>
        </div>
    );
}

export default Contact;
