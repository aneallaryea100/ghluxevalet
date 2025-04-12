import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import XIcon from "@mui/icons-material/X";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (API request or email service)
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="p-6 lg:p-12 bg-white text-gold-950">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-green-950">Get in Touch</h2>
          <p className="text-gray-900">
            Need a valet service? Contact us for bookings, inquiries, or special
            requests. Luxe Valet is always ready to serve you.
          </p>

          <div className="flex items-center space-x-3">
            <FaPhoneAlt className="text-green-950" />
            <span>
              <a href="tel:+233531974520" className="hover:underline">
                +233 53 197 4520
              </a>
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-green-950" />
            <span>
              <a
                href="mailto:luxevaletgh@gmail.com"
                className="hover:underline"
              >
                luxevaletgh@gmail.com
              </a>
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-green-950" />
            <span>Accra, Ghana</span>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/share/15zp4J7XgH/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-950 hover:text-green-900"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/luxevalet.gh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-950 hover:text-green-900"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://x.com/luxevaletgh?s=21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-950 hover:text-green-900"
            >
              <XIcon />
            </a>
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-green-950 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Book a Service</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white border border-gray-600 focus:border-green-950 text-black"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white border border-gray-600 focus:border-green-950 text-black"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white border border-gray-600 focus:border-green-950 text-black"
              required
            />
            <textarea
              name="message"
              placeholder="Your Request or Booking Details"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white border border-gray-600 focus:border-green-950 text-black"
              required
            />
            <button
              type="submit"
              className="w-full bg-white hover:bg-green-600 text-green-950 py-3 rounded-lg font-bold"
            >
              Send Request
            </button>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-12">
        <iframe
          title="Luxe Valet Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.846948065884!2d-0.1962235844975688!3d5.614818735187932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10208d77b3aecd0f%3A0x3b9b1f129a7e73f3!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1700000000000"
          width="100%"
          height="400"
          loading="lazy"
          className="rounded-lg shadow-lg"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
