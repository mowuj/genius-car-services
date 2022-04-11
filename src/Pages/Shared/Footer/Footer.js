import React from 'react';

const Footer = () => {
    const today = new Date();
    return (
        <footer>
            <p style={{fontSize:'20px'}}>Copyright &copy; {today.getFullYear()}</p>
        </footer>
    );
};

export default Footer;