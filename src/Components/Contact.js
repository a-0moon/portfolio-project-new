
import React, { useRef } from 'react';
import { useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const [social, setSocial] = useState({
        twitter: 'https://twitter.com/@Diana_ahmadii',
        Instagram: 'https://instagram.com/a_0moon',
        linkedin: 'https:www.linkedin.com/in/diana-ahmadi-47ab9a29b',
    });

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_izdtjid', 'template_yo54fpt', form.current, '0SCv8k5VuJXNZHXHT')
            .then((result) => {
                console.log(result.text);
                console.log(`message sent`)
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };


    return (
        <div id="contact" className='contact-page' >
            <h1>Contact Me</h1>
            <div className="googlemap">
                <p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3293.6158756431014!2d62.16404072529029!3d34.36025300140559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f3ce19bcede1119%3A0xfb62ff13d1af64d7!2zTWFoYWxlIEhhamkgQWJiYXMg2YXYrdmE2Ycg2K3Yp9is24wg2LnYqNin2LM!5e0!3m2!1sfa!2s!4v1700750943124!5m2!1sfa!2s"
                        width="200"
                        height="300"
                        style={{ border: "0" }}
                        allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </p>
            </div>
            <div className='form_container'>

                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" placeholder='Enter your Name' required />
                    <label>Email</label>
                    <input type="email" name="user_email" placeholder='Enter your Email' required />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" className='new-btn' value="Send" />
                </form>


            </div>
            <div className="social">
                <a href={social.twitter}>Twitter</a>
                <a href={social.Instagram}>Instagram</a>
                <a href={social.linkedin}>LinkedIn</a>
            </div>
        </div>
    );
};

export default Contact;
