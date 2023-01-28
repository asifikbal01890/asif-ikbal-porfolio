import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-base-300 mt-16 py-10'>
            <footer className="footer text-base-content xl:w-[1280px] xl:mx-auto mx-4">
                <div>
                    <h1 className='text-2xl font-semibold'>Asif Ikbal</h1>
                    <p>MERN-Stack Web Developer</p>
                    <div className='flex gap-2'>
                       <a href='https://www.facebook.com/asif.ikbal.420' className=' text-white text-3xl'><FaFacebook></FaFacebook></a>
         
                        <a href='https://www.linkedin.com/in/asif-ikbal-948a63259/' className=' text-white text-3xl'><FaLinkedin></FaLinkedin></a>
       
                        <a href='https://github.com/asifikbal01890' className=' text-white text-3xl'><FaGithub></FaGithub></a>

                    </div>
                
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