function AboutSection() {
  return (
    <div className="p-6 bg-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-green-950">
            About Luxe Valet
          </h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            At Luxe Valet, we redefine parking convenience. Our professional
            valet service ensures a seamless and stress-free experience for you.
            Whether at high-end events, hotels, or busy city spots, we handle
            your vehicle with care, so you can focus on what truly matters.
          </p>
          <p className="mt-2 text-lg text-gray-700">
            Experience effortless parking with us – efficiency, security, and
            top-tier service in every interaction.
          </p>
        </div>

        {/* Video Section */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-64 md:h-80">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Valet Parking Experience"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
