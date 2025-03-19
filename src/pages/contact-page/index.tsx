"use client"
import "@/styles/gradient.css"

import React, { useState } from 'react'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here, such as sending the data to an API or email service
        console.log('Form submitted:', formData);
        // Reset form after submission
        setFormData({ name: '', email: '', message: '' });
        alert('Thank you for your message! We will get back to you soon.');
    };

    return (
        <>
        <div className="container mx-auto mt-3 p-5 min-h-screen bg-gradient-to-r from-purple-400 via-indigo-500 to-violet-600 animate-gradient-flow rounded-3xl">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800 mt-10">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Contact Us
            </span>
        </h1>
        
        <div className="max-w-2xl mx-auto mb-10 text-center">
            <p className="text-lg text-gray-600">
            Have questions or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
            </p>
        </div>
        
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.02] border border-gray-100">
            <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-2">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-base p-3 transition-colors duration-300"
                required
                placeholder="Your name"
            />
            </div>

            <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-2">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-base p-3 transition-colors duration-300"
                required
                placeholder="your.email@example.com"
            />
            </div>
        
            <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-semibold text-gray-700 mb-2">Message</label>
            <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-base p-3 transition-colors duration-300"
                required
                placeholder="Your message here..."
                />
            </div>

            <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] shadow-md"
            >
            Send Message
            </button>
        </form>
        </div>
    </>
    );
}
