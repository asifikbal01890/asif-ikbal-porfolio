import React from 'react';

const Footer = () => {
    return (
        <div className='bg-base-300 mt-16 py-10'>
            <footer className="footer text-base-content xl:w-[1280px] xl:mx-auto mx-4">
                <div>
                    <h1 className='text-2xl font-semibold'>Asif Ikbal</h1>
                    <p>MERN-Stack Web Developer</p>
                    <p>Front-End Web Developer</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;