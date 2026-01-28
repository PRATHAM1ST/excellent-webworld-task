import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Carousel() {
  const name = 'PRATHAM';
  const nameArray = name.split('');
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    // animate left to right

    // scroll trigger l to r on down scroll and r to l on up scroll
    const scrollTrigger = ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        const boxes = document.querySelectorAll('.box');
        if (self.direction === 1) {
          // down scroll
          boxes.forEach((box) => {
            (box as HTMLElement).classList.add('box-reverse');
          });
        } else {
          // up scroll
          boxes.forEach((box) => {
            (box as HTMLElement).classList.add('box');
            (box as HTMLElement).classList.remove('box-reverse');
          });
        }
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center justify-center bg-[#FAF3E1] py-20 px-4 md:py-24">
      <div className="mb-16 md:mb-20 text-center max-w-3xl">
        <h2 className="text-5xl md:text-6xl font-bold text-[#222222] mb-6">Interactive Carousel</h2>
        <p className="text-lg md:text-xl text-[#222222]/80 leading-relaxed">
          Scroll down to see the letters animate from left to right. Scroll up to reverse the animation direction.
        </p>
      </div>
      <div ref={containerRef} className="w-full h-full flex items-center justify-center overflow-hidden gap-3 py-8">
        <div ref={contentRef} className="box flex items-center justify-center gap-3 relative">
          {nameArray.map((letter, index) => (
            <div
              key={index}
              className="text-[#FA8112] text-4xl md:text-5xl font-bold w-20 h-20 md:w-24 md:h-24 bg-[#F5E7C6] flex items-center justify-center rounded-xl shadow-xl border-2 border-[#FA8112] transition-all duration-300 hover:scale-110 hover:shadow-2xl"
            >
              {letter}
            </div>
          ))}
        </div>
        <div ref={contentRef} className="box absolute flex items-center justify-center gap-3">
          {nameArray.map((letter, index) => (
            <div
              key={index}
              className="text-[#FA8112] text-4xl md:text-5xl font-bold w-20 h-20 md:w-24 md:h-24 bg-[#F5E7C6] flex items-center justify-center rounded-xl shadow-xl border-2 border-[#FA8112] transition-all duration-300 hover:scale-110 hover:shadow-2xl"
            >
              {letter}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
