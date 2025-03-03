import { FaCar, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";

function About() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-green-600">About Luxe Valet</h1>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Welcome to <strong>Luxe Valet</strong>, Ghana’s premier valet parking
          service, dedicated to delivering{" "}
          <strong>seamless, secure, and sophisticated</strong> parking
          experiences.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">
          <FaCar className="inline-block mr-2 text-green-600" />
          Why Choose Luxe Valet?
        </h2>
        <ul className="mt-3 text-gray-700 text-lg list-disc list-inside space-y-2">
          <li>
            <FaStar className="inline-block mr-2 text-green-600" />{" "}
            <strong>Unmatched Experience:</strong> Over 7 years of expertise in
            the valet industry.
          </li>
          <li>
            <FaCar className="inline-block mr-2 text-green-600" />{" "}
            <strong>Elite Service:</strong> A blend of efficiency, security, and
            hospitality.
          </li>
          <li>
            <BsFillShieldLockFill className="inline-block mr-2 text-green-600" />{" "}
            <strong>Premium Care:</strong> Your vehicle is handled with
            precision and professionalism.
          </li>
          <li>
            <FaMapMarkerAlt className="inline-block mr-2 text-green-600" />{" "}
            <strong>Trusted & Reliable:</strong> Serving hotels, restaurants,
            corporate events, and private functions.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">
          <FaMapMarkerAlt className="inline-block mr-2 text-green-600" />
          Our Vision
        </h2>
        <p className="text-lg text-gray-700">
          To be the leading valet service provider in Ghana, setting a new
          benchmark in luxury, convenience, and customer satisfaction.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">
          <BsFillShieldLockFill className="inline-block mr-2 text-green-600" />
          Our Mission
        </h2>
        <p className="text-lg text-gray-700">
          At Luxe Valet, we <strong>don’t just park cars</strong>—we create
          exceptional experiences by ensuring efficiency, professionalism, and
          premium service at all times.
        </p>

        <p className="mt-6 text-lg text-gray-800 font-semibold">
          <FaCar className="inline-block mr-2 text-green-600" />
          Your comfort. Your convenience. Your Luxe Valet.
        </p>
      </div>
    </div>
  );
}

export default About;
