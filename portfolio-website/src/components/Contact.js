import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import emailConfig from '../config/emailjs.config.js';
import '../styles/main.css';
const Contact = ({ onClose }) => {
    const [formData, setFormData] = useState({
        from_name: '',
        reply_to: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const form = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate form data
        if (!formData.from_name || !formData.reply_to || !formData.message) {
            setFormStatus('Please fill in all fields');
            return;
        }

        setFormStatus('Sending...');
        
        try {
            const result = await emailjs.sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            );

            console.log('EmailJS Response:', result);
            setFormStatus('Message sent successfully!');
            setFormData({ from_name: '', reply_to: '', message: '' });
            setTimeout(() => {
                onClose();
            }, 2000);
        } catch (error) {
            console.error('Error sending email:', error);
            setFormStatus('Failed to send message. Please try again.');
        }
    };

    return (
        <div className="bg-[var(--bg-card)] text-white rounded-lg shadow-xl overflow-hidden">
            <div id='contact-header' className="py-16">
                <div className="container mx-auto">
                    <h1 className="text-6xl font-bold text-center">Contact</h1>
                    <h2 className='py-4 text-center'>Get in touch</h2>
                </div>
            </div>
            <div id='contact-content' className="container mx-auto py-4">
                <form ref={form} onSubmit={handleSubmit} className="max-w-lg mx-auto card">
                    <div className="mb-4">
                        <label htmlFor="from_name" className="block text-white-700 text-sm font-bold mb-2">Name</label>
                        <input
                            type="text"
                            id="from_name"
                            name="from_name"
                            value={formData.from_name}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    
                    <div className="mb-4">
                        <label htmlFor="reply_to" className="block text-white-700 text-sm font-bold mb-2">Email</label>
                        <input
                            type="email"
                            id="reply_to"
                            name="reply_to"
                            value={formData.reply_to}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                  
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-white-700 text-sm font-bold mb-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                            required
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="submit" className="btn-contact-submit text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Send Message
                        </button>
                    </div>
                </form>
                {formStatus && <p className="mt-4 text-center text-green-600">{formStatus}</p>}
            </div>
        </div>
    );
}   

export default Contact;
