const servicesData = [
  {
    title: "Event Valet Parking",
    description:
      "Hosting an event? Our professional valet team ensures seamless parking solutions, enhancing your guests' experience with top-tier service.",
    image: "/Images/eventparking.jpg",
  },
  {
    title: "Hotel & Restaurant Valet",
    description:
      "Partner with Luxe Valet to provide your guests with a stress-free parking experience, allowing them to enjoy their stay or meal without worries.",
    image: "/Images/hotelvalet.jpg",
  },
  {
    title: "Corporate & VIP Valet",
    description:
      "Offering a sophisticated valet service for businesses, executives, and VIP events, ensuring a luxurious first impression.",
    image: "/Images/corporatevalet2.jpg",
  },
  {
    title: "Airport Valet Service",
    description:
      "Flying out? Leave your car with us at the airport, and we’ll ensure it’s parked securely while you travel hassle-free.",
    image: "/Images/airportvalet2.jpg",
  },
  {
    title: "Shopping Mall Valet",
    description:
      "Enjoy a hassle-free shopping experience with our convenient valet service. Drop off your car at the entrance, and we’ll handle the parking while you shop.",
    image: "/Images/mallvalet.jpg",
  },
];

function Services() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-green-600 mb-8">
        Our Services
      </h1>

      <div className="max-w-5xl mx-auto space-y-12">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-1/2">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 p-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                {service.title}
              </h2>
              <p className="text-lg text-gray-700 mt-2">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
