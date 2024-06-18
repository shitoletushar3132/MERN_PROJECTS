import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialIcons from "./components/SocialIcons";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialIcons />
    </div>
  );
}

export default App;
