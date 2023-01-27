import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3x0d3kn', 'template_tb6v0a8', form.current, 'tOHIz8wXIzHxQkrPY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='mt-16 xl:w-[1280px] xl:mx-auto mx-4'>
            <div>
                <h2 className='text-4xl font-mono font-semibold my-6'>Contact me</h2>
            </div>
            <form ref={form} onSubmit={sendEmail} className="lg:w-[50%] mx-auto">
                <div className='flex gap-5'>
                    <input type="text" name="user_name" placeholder='Name' className="input input-bordered input-primary w-full" />
                    <input type="email" name="user_email" placeholder='Email' className="input input-bordered input-primary w-full" />
                </div>
                <div className='mt-2'>
                    <label className="label">
                        <span className="label-text text-lg">Message</span>
                    </label>
                    <textarea name="message" className='textarea textarea-primary w-full h-24' />
                </div>
                <input type="submit" value="Send" className="btn btn-accent mt-4 w-28 text-white"/>
            </form> 
        </div>
    );
};

export default Contact;