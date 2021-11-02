import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import AboutSection from "./components/about-section/AboutSection";
import ServicesSection from "./components/services-section/ServicesSection";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AboutSection />
      <ServicesSection />
      <Footer />
    </div>
  );
}

export default App;
