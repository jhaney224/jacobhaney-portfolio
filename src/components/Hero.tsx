import { useEffect, useRef } from 'react';
import { gsap } from '../gsapUtils';

interface HeroProps {
    heading: string;
    subtext: string;
    heroButtons?: {label: string, url: string, openInNewTab: boolean}[]
}

export default function Hero({heading, subtext, heroButtons} : HeroProps) {
    const heroRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const subtextRef = useRef<HTMLParagraphElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial state - elements start invisible and offset
            gsap.set([headingRef.current, subtextRef.current, buttonsRef.current], {
                opacity: 0,
                y: 50
            });

            // Create timeline for entrance animations
            const tl = gsap.timeline();
            
            tl.to(headingRef.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out"
            })
            .to(subtextRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.5")
            .to(buttonsRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out"
            }, "-=0.3");
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={heroRef} className="relative min-h-[55vh] flex flex-col bg-cover bg-no-repeat bg-fixed items-center justify-center text-center md:min-h-[70vh]">
            <div className="absolute inset-0 bg-animated-gradient opacity-30 blur-2xl z-0" />

            <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <h1 ref={headingRef} className="text-4xl">{heading}</h1>
                <p ref={subtextRef} className="text-xl mt-4">{subtext}</p>

                { (heroButtons !== undefined && heroButtons.length > 0) &&
                <div ref={buttonsRef}>
                    {
                        heroButtons.map((item, index) => (
                            <button key={index} onClick={() => window.open(item.url, item.openInNewTab ? '_blank' : '_self', 
                                'noopener,noreferrer')}>{item.label}</button>
                        ))
                    }
                </div>
                }
            </div>
        </div>
    );
}
