function About() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="max-w-4xl ">
        <h1 className="text-4xl font-bold text-green-600 text-center">
          About Us
        </h1>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed text-center">
          Luxe Valet is a premier valet parking and parking management company
          dedicated to delivering seamless, efficient, and high-quality parking
          solutions. Our goal is to enhance the guest experience while providing
          businesses with reliable and professional parking management tailored
          to their needs.
        </p>

        <p className="mt-4 text-lg text-gray-700 leading-relaxed text-center">
          With a commitment to excellence, we combine innovation,
          professionalism, and exceptional customer service to simplify parking
          for our clients. Our highly trained valet attendants and parking
          management teams ensure smooth operations, safety, and convenience at
          every location we serve. Whether it’s a luxury hotel, corporate event,
          shopping center, or private function, we provide a first-class
          experience from arrival to departure.
        </p>

        <h2 className="text-2xl font-semibold text-green-600 mt-6 text-center">
          At Luxe Valet, we take pride in offering:
        </h2>
        <ul className="mt-3 text-gray-700 text-lg list-disc list-inside space-y-2">
          <li>
            Expert Valet Parking Services – Professional attendants delivering
            top-tier customer service.
          </li>
          <li>
            Comprehensive Parking Management – Streamlined solutions for
            businesses, including traffic flow optimization and lot supervision.
          </li>
          <li>
            Cutting-Edge Technology – Innovative parking solutions to enhance
            efficiency and guest satisfaction.
          </li>
          <li>
            A Highly Trained Team – Courteous and skilled staff committed to
            excellence and hospitality.
          </li>
          <li>
            To be the leading valet service provider in Ghana, setting a new
            benchmark in luxury, convenience, and customer satisfaction.
          </li>
        </ul>

        <p className="text-lg text-gray-700 mt-3 text-center">
          <span className="text-green-600 fs-bold font-extrabold">We</span> are
          committed to setting the standard for valet and parking management
          services by ensuring a stress-free, professional, and customer-focused
          experience. Let{" "}
          <span className="text-green-600 fs-bold font-extrabold">
            Luxe Valet Services
          </span>{" "}
          handle your parking needs so you can focus on what matters most.
        </p>
      </div>
    </div>
  );
}

export default About;
