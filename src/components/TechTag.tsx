import React, { useEffect, useRef } from 'react';
import { type IconType } from 'react-icons';
import { gsap } from '../gsapUtils';

interface TechTagProps {
    name: string;
    reactIcon: IconType;
}

export default function TechTag({name, reactIcon}: TechTagProps) {
    const tagRef = useRef<HTMLDivElement>(null);
    const iconRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial state
            gsap.set([iconRef.current, textRef.current], {
                opacity: 0,
                scale: 0.8,
                y: 20
            });

            // ScrollTrigger entrance animation
            gsap.timeline({
                scrollTrigger: {
                    trigger: tagRef.current,
                    start: "top 85%",
                    end: "bottom 15%",
                    toggleActions: "play none none reverse"
                }
            })
            .to(iconRef.current, {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.5,
                ease: "back.out(1.7)"
            })
            .to(textRef.current, {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.4,
                ease: "power2.out"
            }, "-=0.2");

            // Hover animation
            const hoverTl = gsap.timeline({ paused: true });
            hoverTl.to(tagRef.current, {
                scale: 1.05,
                y: -2,
                duration: 0.2,
                ease: "power2.out"
            });

            tagRef.current?.addEventListener('mouseenter', () => hoverTl.play());
            tagRef.current?.addEventListener('mouseleave', () => hoverTl.reverse());

        }, tagRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={tagRef} className="m-5 card flex flex-row items-center justify-center">
            <div ref={iconRef}>
                {React.createElement(reactIcon, { className: 'mx-5', size: 20 })}
            </div>
            <h3 ref={textRef}>{name}</h3>
        </div>
    );
}
