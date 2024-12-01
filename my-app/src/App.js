import './App.css';
import AboutUs from './components/Aboutus';
import AppointmentForm from './components/Apoinmentf';
import Stats from './components/Card';
import Footer from './components/Footer';
import Hero from './components/header';
import Pricing from './components/Pricing';
import Services from './components/Service';

function App() {
  return (
    <div className="App">
      <Hero/>
      <AboutUs/>
      <Stats/>
      <Services/>
      <Pricing/>
      <AppointmentForm/>
      <Footer/>
    </div>
  );
}

export default App;
