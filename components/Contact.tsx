
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto glass rounded-[3rem] overflow-hidden border border-white/5">
          <div className="grid md:grid-cols-2">
            <div className="p-12 md:p-16 bg-gradient-to-br from-purple-900/40 to-cyan-900/20">
              <h2 className="text-4xl font-bold font-heading mb-8">Ready to start a project?</h2>
              <p className="text-gray-400 mb-12 text-lg">
                I'm currently available for freelance work and full-time positions. Let's create something amazing together.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center group-hover:bg-cyan-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">Email me at</p>
                    <p className="font-bold underline decoration-cyan-500/30 underline-offset-4">singhshyoraj29@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center group-hover:bg-purple-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">Current Location</p>
                    <p className="font-bold">India, U.P</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-12 md:p-16">
              <form className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors resize-none" placeholder="How can I help you?"></textarea>
                </div>
                <button className="w-full py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/20">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
