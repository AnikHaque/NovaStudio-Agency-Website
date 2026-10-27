import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/home/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Service from './pages/Service'
import Projects from "./pages/Projects";

function App() {
 
  return (
    <>
      <div>
        <BrowserRouter>
      <Navbar/>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
           <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
      </div>
    </>
  )
}

export default App
