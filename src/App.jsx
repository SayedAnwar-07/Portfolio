import Navbar from "./components/Navbar";
import ParticleBackground from "./components/Particle";
import About from "./components/About";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Banner from "./components/Banner/Banner";

const App = () => {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <Banner />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
