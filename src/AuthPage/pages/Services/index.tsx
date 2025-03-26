import React, { useState } from "react";
import { services } from "./prop";

const servicesData: services[] = [
  {
    title: "Event Valet Parking",
    description:
      "Hosting an event? Our professional valet team ensures seamless parking solutions, enhancing your guests' experience with top-tier service.",
    image: "/Images/eventparking.jpg",
  },
  // {
  //   title: "Shopping Mall Valet",
  //   description:
  //     "Enjoy a hassle-free shopping experience with our convenient valet service. Drop off your car at the entrance, and we’ll handle the parking while you shop.",
  //   image: "/Images/mallvalet.jpg",
  // },
  {
    title: "Golf Cart Shuttling Services",
    description:
      "Luxe Valet Services provides tailored golf cart shuttling solutions, ensuring seamless transportation with trained professionals, advanced safety measures, and unparalleled customer service.",
    image: "/Images/classic.jpg",
    //     details: `
    //     Luxe Valet Services has developed a highly functional shuttle system tailored to meet various business needs. This system includes valuable features that enhance customer service and add to our clients’ marketing strategies. We provide, maintain, and operate golf cart shuttle services customized to suit each client’s specific requirements.

    // Our team at Luxe Valet Services consists of highly trained and professional employees who are always present at designated locations, wearing distinctive and elegant uniforms. Each team member undergoes extensive training and regular assessments, ensuring that only the most qualified individuals are selected to join our company. Our training program covers a wide range of skills, including shuttle operations, leadership, safety and security, hospitality fundamentals, and customer service excellence.

    //     `
  },
  {
    title: "Parking Management",
    description:
      "We simplify parking management with innovative solutions, advanced technology, and a commitment to excellence in traffic control, toll management, and customer service.",
    image: "/Images/parkingM.jpg",
    //     details: `
    //     Our mission is to simplify parking for our clients and customers by providing efficient and reliable parking management services across Ghana. We are committed to delivering top-quality service through innovation and dedication.

    // We eliminate the hassle of parking for our clients by offering a seamless and professional service they can take pride in while ensuring their customers enjoy a smooth and high-quality parking experience. We achieve this through:
    // 	•	Continuous innovation to stay ahead in the parking industry.
    // 	•	Comprehensive staff training to equip our team with industry-leading skills and knowledge, ensuring top-tier service for both clients and customers.
    // 	•	The use of advanced parking management technology to provide the most effective and up-to-date solutions.

    // Our parking management services include:
    // 	•	Traffic Management
    // 	•	Toll Management
    // 	•	Customer Service
    // 	•	Parking Management Implementation
    // 	•	Parking Management Operations

    //     `,
  },
  {
    title: "Luxury Limousine Service",
    description:
      "Experience the pinnacle of luxury and convenience with our premium limousine service. Our meticulously maintained fleet offers the perfect blend of elegance and comfort, ensuring a seamless journey for any occasion.",
    image: "/Images/limoservice.jpg",
    //     details: `
    //     Whether you need transportation for corporate or leisure purposes, let us be your top choice.

    // We take great pride in our services and are committed to delivering an exceptional experience. Our fleet is meticulously cleaned and maintained to the highest standards, ensuring both comfort and reliability. Beyond our premium vehicles, we uphold strict professionalism among our chauffeurs, who are highly trained, courteous, and dedicated to providing outstanding service.

    // Our diverse fleet includes luxury brands such as Mercedes-Benz, Audi, Range Rover, and Toyota, offering both relaxing and exhilarating travel experiences tailored to your needs.

    // By combining our high-end vehicles with professional chauffeurs, we guarantee a smooth, comfortable, and stylish journey.

    // Our personalized corporate transportation services are ideal for a variety of occasions, including airport transfers, dinner events, company parties, and seamless travel between meetings.
    //     `,
  },
  {
    title: "Hotel & Restaurant Valet",
    description:
      "Partner with Luxe Valet to provide your guests with a stress-free parking experience, allowing them to enjoy their stay or meal without worries.",
    image: "/Images/hotelvalet.jpg",
  },
];

function Services() {
  const [selectedService, setSelectedService] = useState<{
    title: string;
    description: string;
    image: string;
    details: string;
  } | null>(null);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-5xl font-bold text-green-600 mb-4">Our Services</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Luxe Valet Services is committed to being Ghana’s leading full-service
          parking management company. We deliver premium valet and parking
          solutions with professionalism, efficiency, and innovation.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              {/* {service?.details && (
                <button
                  onClick={() => setSelectedService(service)}
                  className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Read More
                </button>
              )} */}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center p-6">
          <div className="bg-white rounded-lg max-w-4xl w-full p-6 relative max-h-[90vh] overflow-y-auto shadow-lg mt-14">
            <button
              className="absolute top-3 right-3 text-gray-700 text-2xl font-bold"
              onClick={() => setSelectedService(null)}
            >
              ✖
            </button>
            <div className="">
              {/* Image Section */}
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-auto max-h-96 object-cover rounded-lg"
              />
              {/* Content Section */}
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-semibold text-gray-800">
                  {selectedService.title}
                </h2>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  {selectedService.details}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;
