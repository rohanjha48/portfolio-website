"use client"; // Required for interactivity in Next.js App Router
import React, { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const sendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with your actual WhatsApp number with country code (e.g., 91 for India)
    const phoneNumber = "919122596462"; 
    const text = `Hi Rohan, I am ${name}. ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-black text-white border-t border-gray-800">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-6xl font-bold uppercase mb-6 leading-tight">Let's Build<br/>Together</h2>
          <p className="text-gray-400 mb-8">
            Have an idea, project, or collaboration in mind? Send me a message and let's create something impactful.
          </p>
          <div className="flex gap-4">
             <button className="p-4 bg-accent rounded-full hover:bg-gray-800 transition-colors">
                <MessageCircle size={24} />
             </button>
          </div>
        </div>

        <div className="bg-accent p-8 rounded-2xl border border-gray-800">
          <form onSubmit={sendToWhatsApp} className="flex flex-col gap-6">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              Send Message <span className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-400">DIRECT</span>
            </h3>
            <p className="text-sm text-gray-500">Your message opens directly in WhatsApp—no spam, just real connection.</p>
            
            <input 
              type="text" 
              placeholder="Your Name" 
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-black border border-gray-700 p-4 rounded-lg focus:outline-none focus:border-white transition-colors"
            />
            
            <textarea 
              placeholder="Write your message..." 
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-black border border-gray-700 p-4 rounded-lg focus:outline-none focus:border-white transition-colors resize-none"
            />
            
            <button 
              type="submit" 
              className="bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-200 transition-colors flex justify-center items-center gap-2 uppercase tracking-wider"
            >
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
