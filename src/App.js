import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import AboutSection from "./components/about-section/AboutSection";
import ServicesSection from "./components/services-section/ServicesSection";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AboutSection />
      <ServicesSection />
    </div>
  );
}

export default App;
