import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './compo/Header';
import Banner from './compo/Banner';
import Feature from './compo/Feature';
import Work from './compo/Work';
import Step from './Step';
import Value from './compo/Value';
import Pricing from './Pricing';
import Testimonial from './compo/Testimonial';
import Faq from './compo/Faq';
import Purpel from './compo/Purpel';
import Footer from './compo/Footer';
import 'swiper/css';


function App() {
  return (
    <div className="App">
       <Header/>
       <Banner/>
       <Feature/>
       <Work/>
       <Step/>
      <Value/>
       <Pricing/>
       <Testimonial/>
       <Faq/>
       <Purpel/>
       <Footer/>
    </div>
  );
}

export default App;
