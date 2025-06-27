import { useEffect, useRef } from 'react';
import parse from 'html-react-parser';
import { gsap } from '../gsapUtils';

interface FeaturesProps {
    id: string;
    title: string;
    detailCards: {title: string, description?: string[]}[];
}

export default function Features({id, title, detailCards}: FeaturesProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial state
            gsap.set([titleRef.current, gridRef.current], {
                opacity: 0,
                y: 40
            });

            // Section entrance animation
            gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    end: "bottom 25%",
                    toggleActions: "play none none reverse"
                }
            })
            .to(titleRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out"
            })
            .to(gridRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.4");

            // Individual card animations
            const cards = gridRef.current?.querySelectorAll('.card');
            cards?.forEach((card, index) => {
                gsap.set(card, { opacity: 0, y: 30, scale: 0.95 });
                
                gsap.to(card, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    ease: "back.out(1.7)",
                    delay: index * 0.1,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        end: "bottom 15%",
                        toggleActions: "play none none reverse"
                    }
                });

                // Hover animation for cards
                const hoverTl = gsap.timeline({ paused: true });
                hoverTl.to(card, {
                    y: -5,
                    scale: 1.02,
                    duration: 0.3,
                    ease: "power2.out"
                });

                card.addEventListener('mouseenter', () => hoverTl.play());
                card.addEventListener('mouseleave', () => hoverTl.reverse());
            });

        }, sectionRef);

        return () => ctx.revert();
    }, [detailCards]);

    return (
        <section ref={sectionRef} id={id}>
            <h2 ref={titleRef}>{title}</h2>

            <div ref={gridRef} className='grid mt-5 grid-cols-1 gap-5 md:grid-cols-3'>
                {
                    detailCards.map((card, index) => (
                        <div key={index} className="card">
                            <h3>{card.title}</h3>
                            {(card.description !== undefined && card.description.length > 0) &&
                                card.description.map((descriptionPart, index) => (
                                    <div key={index}>{parse(descriptionPart)}</div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </section>
    );
}
