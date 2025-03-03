import AboutSection from "../../../Component/HomeComponents/AboutSection";
import GallerySection from "../../../Component/HomeComponents/GallerySection";
import IntroPage from "../../../Component/HomeComponents/introPage";
import ServicesSection from "../../../Component/HomeComponents/ServicesSection";

function Home() {
  return (
    <div className="">
      <IntroPage />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
    </div>
  );
}

export default Home;
