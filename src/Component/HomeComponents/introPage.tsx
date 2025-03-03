import { useNavigate } from "react-router";

function IntroPage() {
  const navigate = useNavigate();
  return (
    <div className="mt-15 md:mt-0 p-3">
      <div className="flex w-full h-[80vh] flex-col-reverse md:flex-row relative">
        {/* Text Section */}
        <div className="w-full h-full bg-green-950 flex items-center justify-center p-6 md:w-1/2">
          <div className="max-w-lg text-center md:text-left">
            <h1 className="text-4xl font-bold text-white">
              Seamless Parking, Effortless Convenience
            </h1>
            <p className="mt-4 text-lg text-white">
              Experience stress-free valet parking with professional service and
              top-tier security.
            </p>
            <button
              className="mt-6 px-6 py-2 bg-white text-green-600 font-semibold rounded-md hover:bg-gray-100 transition-all cursor-pointer"
              onClick={() => navigate("/contact")}
            >
              Book Now
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="mx-auto py-auto w-full h-90 md:w-1/2 md:h-full relative">
          <img
            src="Images/luxevalet.jpg"
            alt="Luxe Valet"
            className="w-full h-full object-contain md:object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default IntroPage;
