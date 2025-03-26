import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function FooterSection() {
  return (
    <footer className="bg-green-950 text-white py-5 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-white">Contact Us</h3>
          <div className="flex items-center space-x-3">
            {" "}
            <FaMapMarkerAlt className="text-white" /> <span>Accra, Ghana</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaPhoneAlt className="text-white" />
            <a href="tel:+233531974520" className="hover:underline">
              +233 53 197 4520
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-white" />
            <a href="mailto:luxevaletgh@gmail.com" className="hover:underline">
              luxevaletgh@gmail.com
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">Follow Us</h3>
          <div className="mt-3 flex space-x-4">
            <a
              href="https://facebook.com/LuxeValet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-white hover:text-blue-500 text-2xl transition-all duration-300" />
            </a>
            <a
              href="https://twitter.com/LuxeValet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-white hover:text-blue-400 text-2xl transition-all duration-300" />
            </a>
            <a
              href="https://www.instagram.com/luxevalet.gh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-white hover:text-pink-500 text-2xl transition-all duration-300" />
            </a>
            <a
              href="https://linkedin.com/company/LuxeValet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-white hover:text-blue-600 text-2xl transition-all duration-300" />
            </a>
          </div>
        </div>

        {/* Google Map */}
        <div>
          <h3 className="text-xl font-semibold text-white">Find Us</h3>
          <a
            href="https://www.google.com/maps/place/Accra,+Ghana"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3"
          >
            <img
              src="Images/googleMapImg.jpg"
              alt="Google Map"
              className="w-full h-40 object-cover rounded-md shadow-md hover:opacity-75 transition-all duration-300"
            />
          </a>
        </div>
      </div>

      {/* Copyright & Credits */}
      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Luxe Valet. All Rights Reserved.
        </p>
        <p className="text-sm text-gray-500">Created by PhantomLens</p>
      </div>
    </footer>
  );
}

export default FooterSection;
