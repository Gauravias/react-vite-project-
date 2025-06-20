import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => (
    <footer className="footer">
        <div className="footer-container">
            <div className="footer-grid">
                {/* About Section */}
                <div className="footer-about">
                    <h3 className="footer-heading">Brand</h3>
                    <p className="footer-text">Crafting digital experiences that inspire and connect people.</p>
                </div>

                {/* Links */}
                <div className="footer-links">
                    <h3 className="footer-heading">Quick Links</h3>
                    <ul>
                        <li><a href="#" className="footer-link">About Us</a></li>
                        <li><a href="#" className="footer-link">Services</a></li>
                        <li><a href="#" className="footer-link">Blog</a></li>
                        <li><a href="#" className="footer-link">Contact</a></li>
                    </ul>
                </div>

                {/* Legal */}
                <div className="footer-links">
                    <h3 className="footer-heading">Legal</h3>
                    <ul>
                        <li><a href="#" className="footer-link">Privacy Policy</a></li>
                        <li><a href="#" className="footer-link">Terms of Service</a></li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className="footer-heading">Follow Us</h3>
                    <div className="footer-socials">
                        <a href="#" className="footer-social-link"><Facebook size={20} /></a>
                        <a href="#" className="footer-social-link"><Twitter size={20} /></a>
                        <a href="#" className="footer-social-link"><Instagram size={20} /></a>
                        <a href="#" className="footer-social-link"><Linkedin size={20} /></a>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <p>&copy; {new Date().getFullYear()} Brand. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

export default Footer;
