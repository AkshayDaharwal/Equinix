import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/About/AboutSection";
import Ecosystem from "../components/Ecosystem/Ecosystem";
import Service from "../components/Service";
import Leadership from "../components/Leadership";
import Infrastructure from "../components/Infrastructure";
import DefiProgram from "../components/DefiProgram";
import Vision from "../components/Vision";
import Faq from "../components/Faq";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <Ecosystem/>
      <Service/>
      <Leadership/>
      <Infrastructure/>
      <DefiProgram/>
      <Vision/>
      <Faq/>
      <Footer/>
    </div>
  );
};

export default Home;