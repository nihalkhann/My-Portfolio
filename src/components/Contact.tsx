"use client"
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xpwzowbw");
  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="bg-black/20 border-2 border-blue-500 shadow-2xl rounded-xl p-10 max-w-md w-full text-center transform transition duration-500 hover:scale-105">
          <div className="relative">
            <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-black w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
              <svg className="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="pt-12 space-y-4">
            <h2 className="text-3xl font-bold text-gray-400">Submission Received!</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Your message has landed! I&apos;am excited to dive into your submission and will be in touch shortly with a personalized response.
            </p>
            <div className="flex justify-center space-x-4 pt-4">
              <button
                className="bg-gradient-to-r from-blue-600 to-black hover:from-blue-700 hover:to-gray-900 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-110 shadow-md"
                onClick={() => window.location.href = '/'}
              >
                Return Home
              </button>
              <button
                className="bg-blue-100 text-blue-700 hover:bg-blue-200 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-110 shadow-md"
                onClick={() => window.history.back()}
              >
                Previous Page
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
    
      
  
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12  text-gray-300 text-center">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block  text-gray-300 text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 text-gray-300 bg-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block   text-gray-300 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 bg-black/30  text-gray-300 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
                <ValidationError 
                 prefix="Email" 
                 field="email"
                errors={state.errors}
                />
            </div>
            <div>
              <label htmlFor="message" className="block   text-gray-300 text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-2 text-gray-300 bg-black/30 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
              <ValidationError 
               prefix="Message" 
               field="message"
               errors={state.errors}
                />
            </div>
            <button
              type="submit" disabled={state.submitting}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default ContactForm;