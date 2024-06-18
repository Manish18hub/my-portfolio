import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Technologies from './components/Technologies';
import Education from './components/Education'; 
import Projects from './components/Projects';

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased  selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_40%_10%,#000_40%,#030637_90%)]">

      
      
      </div>
      </div>
     
     <div className="container mx-auto px-6">
     
     <Navbar />
     <Hero />
     <About />
     <Technologies/>
     <Education />
     <Projects/>
     </div>
    
    </div>
  );
};

export default App;
