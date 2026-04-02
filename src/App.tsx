import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import WebExperience from "./components/WebExperience";
import Journey from "./components/Journey";
import Trust from "./components/Trust";
import Continuity from "./components/Continuity";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WebExperience />
      <Journey />
      <Features />
      <Trust />
      <Continuity />
      <Footer />
    </div>
  );
}

export default App;
