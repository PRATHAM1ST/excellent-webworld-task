import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Star() {
  const conatinerRef = useRef<HTMLDivElement>(null);
  const starRef = useRef<SVGPathElement>(null);
  useEffect(() => {
    const container = conatinerRef.current;
    const star = starRef.current;
    if (!container || !star) return;

    const totalLength = star.getTotalLength();
    gsap.set(star, {
      strokeDasharray: totalLength,
      strokeDashoffset: totalLength,
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });
    timeline.to(star, {
      strokeDashoffset: 0,
      duration: 1,
      ease: 'power2.inOut',
    });

    return () => {
      timeline.kill();
    };
  }, []);
  return (
    <div
      ref={conatinerRef}
      style={{
        height: '300vh',
      }}
      className="star text-[#222222] min-h-screen w-full bg-[#F5E7C6]"
    >
      <div className="sticky h-screen w-full bg-[#FAF3E1] top-0 flex flex-col items-center justify-center px-4 py-20">
        <div className="text-center mb-16 max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-bold text-[#222222] mb-6">Scroll-Triggered Animation</h2>
          <p className="text-lg md:text-xl text-[#222222]/80 leading-relaxed">
            As you scroll, watch the star path draw itself. The animation is synchronized with your scroll position.
          </p>
        </div>
        <svg
          width="250px"
          height="250px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-2xl"
        >
          <path
            ref={starRef}
            fill="none"
            stroke="#FA8112"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            d="M12,4,9.22,9.27,3,10.11l4.5,4.1L6.44,20,12,17.27,17.56,20,16.5,14.21l4.5-4.1-6.22-.84Z"
          />
        </svg>
      </div>
    </div>
  );
}
