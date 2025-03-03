import { Link } from "react-router";

function ServicesSection() {
  return (
    <div className="p-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-green-950">
            Our Premium Services
          </h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            At Luxe Valet, we offer professional valet parking solutions
            tailored to your needs. Whether it’s for luxury hotels, corporate
            events, restaurants, or private gatherings, our expert valets ensure
            a smooth and hassle-free parking experience.
          </p>
          <p className="mt-2 text-lg text-gray-700">
            With a focus on efficiency, security, and customer satisfaction, we
            take pride in delivering top-tier parking services.
          </p>

          {/* Services Button */}
          <Link
            to="/services"
            className="mt-6 inline-block px-6 py-3 bg-green-950 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-amber-800 transition-all duration-300"
          >
            View Services
          </Link>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="Images/serviceImg.jpg"
            alt="Valet Parking Service"
            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
