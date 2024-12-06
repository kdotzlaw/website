import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a backend service
        // For now, we'll just simulate sending an email
        console.log('Sending email to katrina@dotzlaw.com with:', formData);
        setFormStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div id='body' className="pt-12 bg-gunmetal text-white  px-4 sm:px-6 lg:px-8">
            <div id='contact-header' className="py-16">
                <div className="container mx-auto">
                    <h1 className="text-6xl font-bold text-center">Contact</h1>
                    <h2 className='py-4 text-center'>Get in touch</h2>
                </div>
            </div>
            <div id='contact-content' className="container mx-auto py-4">
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto card">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-white-700 text-sm font-bold mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-black-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-white-700 text-sm font-bold mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-black-700 leading-tight focus:outline-none focus:shadow-outline"
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
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-black-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                            required
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
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
