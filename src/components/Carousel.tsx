import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

export default function Carousel() {
  const name = 'PRATHAM';
  const nameArray = name.split('');
  // Duplicate content for seamless infinite loop
  const duplicatedArray = [...nameArray, ...nameArray];
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const currentDirectionRef = useRef<number>(-1); // -1 for left, 1 for right

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    let scrollTrigger: ScrollTrigger | null = null;
    let singleSetWidth = 0;

    // Wait for next frame to ensure DOM is fully rendered
    requestAnimationFrame(() => {
      // Calculate the actual width of one set of letters dynamically
      // Measure from the first element to the start of the second set
      const firstElement = content.children[0] as HTMLElement;
      const secondSetStart = content.children[nameArray.length] as HTMLElement;
      
      if (!firstElement || !secondSetStart) return;
      
      const firstRect = firstElement.getBoundingClientRect();
      const secondRect = secondSetStart.getBoundingClientRect();
      singleSetWidth = secondRect.left - firstRect.left;
      
      // Set initial position
      gsap.set(content, { x: 0 });

      // Create animation function
      const createAnimation = (direction: number) => {
        // Kill existing animation if any
        if (animationRef.current) {
          animationRef.current.kill();
        }

        // Get current position
        const currentX = gsap.getProperty(content, 'x') as number;
        
        // Calculate target position
        // For seamless loop: move by one full set width
        // Negative direction = left (translateX negative)
        // Positive direction = right (translateX positive)
        const targetX = currentX - (direction * singleSetWidth);

        // Create smooth animation from current position
        animationRef.current = gsap.to(content, {
          x: targetX,
          duration: 10,
          ease: 'none',
          onComplete: () => {
            // Reset position for seamless loop
            const newX = (gsap.getProperty(content, 'x') as number) + (direction * singleSetWidth);
            gsap.set(content, { x: newX });
            // Continue animation
            createAnimation(direction);
          },
        });
      };

      // Start initial animation (left to right, which is negative translateX)
      createAnimation(-1);

      // Scroll trigger to change direction
      scrollTrigger = ScrollTrigger.create({
        trigger: container,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          // direction 1 = scrolling down (animate right/positive)
          // direction -1 = scrolling up (animate left/negative)
          const newDirection = self.direction === 1 ? 1 : -1;
          
          // Only change direction if it actually changed
          if (newDirection !== currentDirectionRef.current) {
            currentDirectionRef.current = newDirection;
            
            // Get current position
            const currentX = gsap.getProperty(content, 'x') as number;
            
            // Kill current animation
            if (animationRef.current) {
              animationRef.current.kill();
            }

            // Calculate new target position from current position
            const targetX = currentX - (newDirection * singleSetWidth);

            // Create new animation from current position in new direction
            animationRef.current = gsap.to(content, {
              x: targetX,
              duration: 10,
              ease: 'none',
              onComplete: () => {
                // Reset position for seamless loop
                const newX = (gsap.getProperty(content, 'x') as number) + (newDirection * singleSetWidth);
                gsap.set(content, { x: newX });
                // Continue animation
                createAnimation(newDirection);
              },
            });
          }
        },
      });
    });

    // Cleanup function
    return () => {
      if (scrollTrigger) {
        scrollTrigger.kill();
      }
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [nameArray.length]);

  return (
    <div ref={containerRef} className="w-full h-full min-h-screen flex flex-col items-center justify-center bg-[#FAF3E1] py-20 px-4 md:py-24">
      <div className="mb-16 md:mb-20 text-center max-w-3xl">
        <h2 className="text-5xl md:text-6xl font-bold text-[#222222] mb-6">Interactive Carousel</h2>
        <p className="text-lg md:text-xl text-[#222222]/80 leading-relaxed">
          Scroll down to see the letters animate from left to right. Scroll up to reverse the animation direction.
        </p>
      </div>
      <div className="w-full h-full flex items-center justify-center overflow-hidden gap-3 py-8">
        <div ref={contentRef} className="box flex items-center justify-center gap-3 relative">
          {duplicatedArray.map((letter, index) => (
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
