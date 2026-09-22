import NavBar from './component/NavBar';
import HeroSection from './component/HeroSection';
import Additionally from './component/Additionally'
import Products from './component/Products';
import AboutSection from './component/AboutSection';
import NewsLetter from './component/NewsLetter'
import Footer from './component/Footer';

function App() {
return (
  <div className="flex flex-col gap-30">
    <NavBar/>
    <HeroSection/>
    <Additionally/>
    <Products/>
    <AboutSection/>
    <NewsLetter/>
    <Footer/>
    
  </div>
  
);
}

export default App;