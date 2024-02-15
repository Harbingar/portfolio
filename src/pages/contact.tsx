import React from 'react';
import Nav from "../composants/nav";
import Info from "../composants/infoBar";
import NavMobile from "../composants/navMobile";
import Contact from "../composants/contact";
import { ContactProps } from '../interfaces/contactInterface';

// Liste des contacts
const contacts: ContactProps[] = [
    { title: 'Github', linkText: 'Visit my Github', linkHref: '#' },
    { title: 'Email', linkText: 'thomassyben07@gmail.com', linkHref: '#' },
    { title: 'LinkedIn', linkText: 'Visit my Profil', linkHref: 'https://www.linkedin.com/in/thomas-syben-420360236/' },
];

const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-row">
        <Nav/>
        <NavMobile/>
        <div className="w-screen h-screen flex flex-col items-center justify-around text-white">
            <h1 className="text-4xl font-bold text-border text-bestGrey">CONTACT</h1>
            {contacts.map((contact, index) => (
                <Contact key={index} title={contact.title} linkText={contact.linkText} linkHref={contact.linkHref} />
            ))}
        </div>
        <Info/>
    </div>
  );
}

export default ContactPage;
