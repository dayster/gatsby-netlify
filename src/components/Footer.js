import React from 'react';
import footerStyle from "./Footer.module.css"

const Footer = () => (
    <footer className={footerStyle.footer}>
        <div className="container">
            <span className="text-muted">© Gatsby-Bootstrap Project 2019</span>
        </div>
    </footer>
)

export default Footer;