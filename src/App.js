import './App.css';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import Techscroll from './components/TechScroll';
import Platforms from './components/Platforms';
import Features from './components/Features';
import TokenSaleSection from './components/TokenSales';
import Timeline from './components/Timeline';
import Download from './components/Download';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundWaves from './components/Backgroundwaves';
import logo from './assets/IMG_7880.jpg';
import ScrollToTopButton from './components/ScrollToTopButton';
<img src={logo} alt="Logo" />
function App() {
  return (
    <div>
      {/* <BackgroundWaves /> */}
      <Navbar />
      <Herosection />
      <Techscroll />
      <Platforms />
      <Features />


      <TokenSaleSection />
      <Timeline />
      <Download />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
