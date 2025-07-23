// import { Mail, MapPin, Phone, Instagram } from 'lucide-react';

// export default function Contact() {
//   return (
//     <div className="bg-[#fff] text-black font-sans p-6 md:p-12">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

//         {/* Left: Contact Info */}
//         <div className="space-y-6">
//           <h2 className="text-3xl font-bold text-[#DAA520]">Get in Touch</h2>
//           <p className="text-lg">We’d love to hear from you. Whether you’re curious about our spices or want to make a bulk order, just get in touch.</p>

//           <div className="space-y-4">
//             <div className="flex items-start gap-3">
//               <MapPin className="text-[#DAA520] text-md" />
//               <p>Lashibi Comm 17, Behind Transcort House, Accra, Ghana</p>
//             </div>
//             <div className="flex items-start gap-3">
//               <Phone className="text-[#DAA520]" />
//               <p>+233 20 123 4567</p>
//             </div>
//             <div className="flex items-start gap-3">
//               <Mail className="text-[#DAA520]" />
//               <p>bestsiblingslimited@gmail.com
// </p>
//             </div>
//             <div className="flex items-start gap-3">
//               <Instagram className="text-[#DAA520]" />
//               <a href="https://instagram.com/bestsiblings" target="_blank" rel="noopener noreferrer" className="text-[#000] hover:text-[#DAA520]">Follow us on Instagram</a>
//             </div>
//           </div>
//         </div>

//         {/* Right: Contact Form */}
//         <div className="bg-[#f9f9f9] shadow-md rounded-xl p-6 space-y-4">
//           <h3 className="text-xl font-semibold text-[#DAA520]">Send Us a Message</h3>
//           <form action="mailto:info@bestsiblings.com" method="post" encType="text/plain" className="space-y-4">
//             <input type="text" name="Name" placeholder="Your Name" required className="w-full p-2 border border-gray-300 rounded" />
//             <input type="email" name="Email" placeholder="Your Email" required className="w-full p-2 border border-gray-300 rounded" />
//             <textarea name="Message" placeholder="Your Message" rows="5" required className="w-full p-2 border border-gray-300 rounded"></textarea>
//             <button type="submit" className="bg-[#DAA520] text-white px-4 py-2 rounded hover:bg-black transition">Send</button>
//           </form>
//         </div>
//       </div>

//       {/* Google Maps */}
//       <div className="mt-16">
//         <iframe
//           title="Best Siblings Location"
//           src="https://www.google.com/maps?q=Lashibi+Comm+17,+Behind+Transcort+House,+Accra,+Ghana&output=embed"
//           width="100%"
//           height="400"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           className="rounded-xl shadow-md"
//         ></iframe>
//       </div>
//     </div>
//   );
// }

// Updated Best Siblings Contact Page
import React from "react";
import {
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
} from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const emailBody = `From: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:info@bestsiblings.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className=" bg-[#be9717] p-2 rounded-lg">
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4 mt-16 ">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-[#CA8A04]  mb-4">
            Contact Best Siblings
          </h1>
          <div className="w-52 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Reach out for inquiries, bulk orders, or to learn more about our
            products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-[#CA8A04] mb-6">
              Company Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-[#be9717] text-xl mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Location</h3>
                  <p className="text-gray-600">
                    Lashibi Comm 17, Behind Transcort House, Accra, Ghana
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-[#be9717] text-xl" />
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <Link
                    to="tel:+233505866555 "
                    className="text-gray-600 hover:text-yellow-700"
                  >
                    +233 505 866 555 
                  </Link>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-[#be9717] text-xl" />
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <Link
                    to="mailto:bestsiblingslimited@gmail.com"
                    className="text-gray-600 hover:text-[#be9717]"
                  >
                    bestsiblingslimited@gmail.com
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                Connect With Us
              </h3>
              <div className="flex justify-center space-x-6">
                <Link
                  to="https://www.instagram.com/bestsiblingscom.ltd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                >
                  <FaInstagram className="text-[#be9717] text-2xl font-bold" />
                </Link>
                <Link
                  to="https://www.facebook.com/share/1CYkK4Hxjh/?mibextid=wwXIfr"
                  target="_blank"
                >
                  <FaFacebook className="text-[#be9717] text-2xl font-bold" />
                </Link>
                <Link
                                    to="#">
                                    <FaLinkedin className="text-gold-600 text-xl" />
                                  </Link>
                                  <Link
                                    to="#"
                                  >
                                    <FaXTwitter className="text-gold-600 text-xl" />
                                  </Link>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-[#be9717] mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="your email address"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="What is this about?"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#be9717] text-white py-3 rounded-lg hover:bg-yellow-600 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <FaEnvelope />
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <h3 className="font-semibold text-gray-800 mb-4 text-xl">
            Our Location
          </h3>
          <div className="rounded-lg overflow-hidden h-[400px]">
            <iframe
              title="Best Siblings Location"
              src="https://www.google.com/maps?q=Lashibi+Comm+17,+Behind+Transcort+House,+Accra,+Ghana&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Contact;
