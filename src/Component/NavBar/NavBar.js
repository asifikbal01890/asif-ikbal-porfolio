import React from 'react';
import { Link } from 'react-scroll';
import resumeFile from '../../Files/Asif_Ikbal_Resume.pdf'

const NavBar = () => {

    const menuContent = <React.Fragment>
        <li><Link to="home" spy={true} smooth={true} duration={1000}>Home</Link></li>
        <li><Link to="skill" spy={true} smooth={true} duration={1000}>Skills</Link></li>
        <li><Link to="project" spy={true} smooth={true} duration={1000}>Project</Link></li>
        <li><Link to="contact" spy={true} smooth={true} duration={1000}>Contact</Link></li>
    </React.Fragment>
    return (
        <div className='fixed shadow-md  z-50 w-full flex justify-between items-center bg-base-100'>
            <div className="navbar xl:w-[1280px] w-full mx-3 md:mx-10 lg:mx-16 xl:mx-auto">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuContent}
                        </ul>
                    </div>
                    <Link to="home" spy={true} smooth={true} duration={1000} className="btn bg-base-100 hover:bg-base-100 border-none normal-case text-xl">Asif Ikbal</Link> 
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuContent}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href={resumeFile} className="btn btn-primary">Resume</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;