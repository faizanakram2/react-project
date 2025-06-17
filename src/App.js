import './App.css';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import Platforms from './components/Platforms';
import Features from './components/Features';
import TokenSaleSection from './components/TokenSales';
function App() {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Platforms />
      <Features />
      <TokenSaleSection />
    </div>
  );
}

export default App;
