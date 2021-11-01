import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import AboutSection from "./components/about-section/AboutSection";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AboutSection />
    </div>
  );
}

export default App;
