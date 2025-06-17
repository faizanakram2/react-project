import './App.css';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import Platforms from './components/Platforms';
import Features from './components/Features';
import TokenSaleSection from './components/TokenSales';
import Timeline from './components/Timeline';
import TeamSection from './components/TeamSection';
import Testimonials from './components/Testimonials';
import Download from './components/Download';
import FaqSection from './components/Faq';
import Latestnews from './components/Latestnews';
import Contact from './components/Contact';
function App() {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Platforms />
      <Features />
      <TokenSaleSection />
      <Timeline />
      <TeamSection />
      <Testimonials />
      <Download />
      <FaqSection />
      <Latestnews />
      <Contact />
    </div>
  );
}

export default App;
