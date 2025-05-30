import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div>
      {/* ───── Hero ───── */}
      <section className="bg-black py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Have questions or feedback? Reach out and we’ll get back to you
              as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* ───── Contact Cards ───── */}
      <section className="bg-neutral-950 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

            {/* Email */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-8 text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center
                              rounded-full bg-neutral-800 mb-4">
                <Mail className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-400 break-all">saraswailm03@gmail.com</p>
              <p className="text-gray-400 break-all">info@fishix.com</p>
            </div>

            {/* Phone */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-8 text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center
                              rounded-full bg-neutral-800 mb-4">
                <Phone className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-400">+962 770 239 323</p>
              <p className="text-gray-400">Mon-Fri, 9 am-5 pm EST</p>
            </div>

            {/* Location */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-8 text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center
                              rounded-full bg-neutral-800 mb-4">
                <MapPin className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-400">
                Al Balqa Applied University<br />
                Salt, Jordan
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
