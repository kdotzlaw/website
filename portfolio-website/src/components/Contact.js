import React, { useState } from 'react';
import '../styles/main.css';
const Contact = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('handling submit');
        try{
            const resp = await fetch({
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    to: `katrina@dotzlaw.com`,
                    subject: `Message from ${formData.name}`,
                    text: `From: ${formData.name}\n\n${formData.message}`

                })
            });
            if (resp.ok) {
                setFormStatus('Message sent successfully!');
                setFormData({name: '', email: '', message: ''});
                setTimeout(() => {
                    onClose();
                }, 2000);
            } else {
                setFormStatus('Error sending message');
            }
        }catch (error){
            console.log(error);
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
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto card">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-white-700 text-sm font-bold mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
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
