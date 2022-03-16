import "./App.css";
import Header from "./components/header/Header";
import AboutSection from "./components/about-section/AboutSection";
import ServicesSection from "./components/services-section/ServicesSection";
import Footer from "./components/footer/Footer";
import ReviewSection from "./components/review-section/ReviewSection";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AboutSection />
      <ServicesSection />
      <ReviewSection />
      <Footer />
    </div>
  );
}

export default App;
