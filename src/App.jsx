import About from "./Componenta/About/About"
import Skills from "./Componenta/Skills/Skills"
import Footer from "./Componenta/Footer/Footer"
import Home from "./Componenta/Home/Home"
import Navbar from "./Componenta/Navbar/Navbar"
import Projects from "./Componenta/Projects/Projects"
import Contact from "./Componenta/Contact/Contact"



function App() {
  

  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About/>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  
  )
}

export default App
