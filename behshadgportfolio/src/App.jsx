import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import { portfolioData } from './data/portfolio';
import './index.css';

function App() {
  return (
    <div className="page-shell text-stone-100">
      <div className="page-grid" aria-hidden="true" />
      <Navbar
        navLinks={portfolioData.navLinks}
        socialLinks={portfolioData.socialLinks}
      />
      <main className="relative z-10">
        <Home hero={portfolioData.hero} stats={portfolioData.stats} />
        <About about={portfolioData.about} />
        <Projects projects={portfolioData.projects} />
        <Skills skillGroups={portfolioData.skillGroups} />
        <Resume resume={portfolioData.resume} />
        <Contact contact={portfolioData.contact} />
      </main>
    </div>
  );
}

export default App;
