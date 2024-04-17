

// import Header from './Components/Header/Header';
import Header from '../../Components/Header/Header';
import HomeSection from '../../Components/Home/Home';
// import ProfileCards from '../../Components/People/People';
import Testimonials from '../../Components/Testimonial/Testimonial';
import NumberCountingAnimation from '../../Components/Counter/Counter';
import AboutSection from '../../Components/About/About';
import IconsSection from '../../Components/Icons/Icon';
import FooterSection from '../../Components/footer/Footer';
import ServicesSection from '../../Components/Services/Services';
import PricingComponent from '../../Components/Pricing/Pricing';
function Home() {
  return (
    <div className="App">
    <Header/>
    <HomeSection/>
    <AboutSection/>
    <IconsSection/>
    <NumberCountingAnimation/>
    <ServicesSection/>
  <PricingComponent/>
    <Testimonials/>
    <FooterSection/>
    {/* <ProfileCards/> */}
    </div>
  );
}

export default Home;
