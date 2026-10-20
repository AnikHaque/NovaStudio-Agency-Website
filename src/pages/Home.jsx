import About from "../components/home/About";
import BrandStrip from "../components/home/BrandStrip";
import Hero from "../components/home/Hero";
import Projects from "../components/home/Projects";
import Services from "../components/home/Services";


export default function Home() {
  return (
    <div>
        <Hero></Hero>
        <BrandStrip></BrandStrip>
        <Services></Services>
        <Projects></Projects>
        <About></About>
    </div>
  )
}
