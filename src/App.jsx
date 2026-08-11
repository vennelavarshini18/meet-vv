import Navbar from "./components/Navbar";
import Background3D from "./components/Background3D";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import WorkExperience from "./sections/WorkExperience";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";


export default function App() {
return (
<div className="relative bg-darkBase text-textMain min-h-screen selection:bg-primary selection:text-darkBase overflow-hidden">
<Navbar />
<Hero />
<About />
<Skills />
<WorkExperience />
<Experience />
<Projects />
<Achievements />
<Contact />
</div>
);
}


