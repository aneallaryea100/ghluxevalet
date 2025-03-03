import { Route, Routes } from "react-router";
import Home from "./AuthPage/pages/Home";
import About from "./AuthPage/pages/About";
import Client from "./AuthPage/pages/Client";
import Services from "./AuthPage/pages/Services";
import Technology from "./AuthPage/pages/Technology";
import Gallery from "./AuthPage/pages/Gallery";
import Contact from "./AuthPage/pages/Contact";
import Portal from "./AuthPage/pages/Portal";
import Layout from "./Layouts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="client" element={<Client />} />
          <Route path="services" element={<Services />} />
          <Route path="technology" element={<Technology />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portal" element={<Portal />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
