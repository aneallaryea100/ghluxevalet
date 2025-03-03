import { Link } from "react-router";

function GallerySection() {
  return (
    <div
      className="relative h-[80vh] bg-fixed bg-center bg-cover flex items-center justify-end px-6 md:px-12"
      style={{ backgroundImage: "url('Images/galleryBg.jpg')" }}
    >
      {/* Card Section */}
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl w-full md:w-1/3 text-center md:text-left">
        <h2 className="text-3xl font-bold text-green-950">LuxeValet Gallery</h2>
        <p className="mt-4 text-gray-700">
          Explore moments of our premium valet service in action. From luxury
          events to corporate hospitality, our gallery showcases the excellence
          of LuxeValet.
        </p>

        {/* View Gallery Button */}
        <Link
          to="/gallery"
          className="mt-6 inline-block px-6 py-3 bg-green-950 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-amber-800 transition-all duration-300"
        >
          Discover
        </Link>
      </div>
    </div>
  );
}

export default GallerySection;
