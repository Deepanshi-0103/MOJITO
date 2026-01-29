import React from 'react'
import Navbar from './components/Navbar'
import { gsap } from "gsap";
import About from './components/About'
import Hero from './components/Hero'
import Art from './components/Art'
import {ScrollTrigger, SplitText} from "gsap/all";
import Cocktails from './components/Cocktails';
gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  return (
    <main>
      <Navbar/> 
      <Hero/>
      <Cocktails/>
      <About/>
      <Art/>
    </main>
  )
}

export default App