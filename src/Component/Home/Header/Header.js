import React from 'react';
import resumeFile from '../../../Files/Asif_Ikbal_Resume.pdf'
const Header = () => {
    return (
        <div className='bg-base-300'>
            <div className="hero pt-28 pb-16">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="lg:w-1/2 avatar">
                        <div className="rounded-lg ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://i.ibb.co/4TS4MFX/Pics-Art-12-11-07-14-41.png" alt='' />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold text-start">Nice to meet you</h1>
                        <h1 className="text-5xl font-bold mt-3 text-start">I'm Asif Ikbal</h1>
                        <h1 className="text-5xl font-bold mt-3 text-start">MERN-Stack Web Developer</h1>
                        <p className="py-6 text-start">The goal is to pursue a challenging but rewarding career with an organization that provides opportunities for personal and professional growth.</p>
                        <div className='flex gap-5'>
                            <button className="btn btn-accent">Hire Me</button>
                            <a href={resumeFile} download='Asif Ikbal Resume.pdf' className="btn btn-primary">Download Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;