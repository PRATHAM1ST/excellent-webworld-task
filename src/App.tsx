import Carousel from './components/Carousel';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Star from './components/Star';
import ThreeD from './components/3d';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <main className="w-full min-h-screen bg-[#FAF3E1] transition-colors duration-300">
      <Carousel />
      <Star />
      <ThreeD />
    </main>
  );
}

export default App;
