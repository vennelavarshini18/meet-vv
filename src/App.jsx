import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";


export default function App() {
return (
<div className="bg-gradient-to-br from-[#05070f] via-[#0b1020] to-[#120c1f] text-white min-h-screen">
<Navbar />
<Hero />
<About />
<Skills />
<Experience />
<Projects />
<Achievements />
<Contact />
</div>
);
}

