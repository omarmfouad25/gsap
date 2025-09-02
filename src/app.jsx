import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all'
import NavBar from './components/Navbar';
import { useGSAP } from '@gsap/react';
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';
import About from './components/About';
import Art from './components/Art';
import Menu from './components/Menu';
import Contact from './components/Contact';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    useGSAP(()=>{
        const navTween = gsap.timeline({
            scrollTrigger:{
                trigger:'nav',
                start: 'bottom top'
            }
        })
        navTween.fromTo(
            'nav',
             { backgroundColor:'transparent' },
             { 
                backgroundColor:'#00000050',
                backdropFilter: 'blur(10px)',
                duration:1,
                ease:'power1.inOut'
            }
        )
    })
  return (
    <main>
      <NavBar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />

    </main>
  )
}

export default App