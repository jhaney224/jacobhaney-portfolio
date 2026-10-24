import { useEffect, useRef } from 'react';
import { gsap } from '../gsapUtils';

interface TextCardProps {
    id: string;
    name: string;
    description: string;
    showcaseImg?: string;
    showcaseImgAltText?: string;
}

export default function TextCard({id, name, description, showcaseImg, showcaseImgAltText}: TextCardProps) {
    const cardRef = useRef<HTMLElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial state
            gsap.set([titleRef.current, imageRef.current, descRef.current], {
                opacity: 0,
                y: 30
            });

            // ScrollTrigger entrance animation
            gsap.timeline({
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            })
            .to(titleRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out"
            })
            .to(imageRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.4")
            .to(descRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out"
            }, "-=0.4");
        }, cardRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={cardRef} className="m-5 text-center flex flex-col h-full" id={id}>
            <h3 ref={titleRef} className="mb-4">{name}</h3>
            <img ref={imageRef} src={showcaseImg} alt={showcaseImgAltText} className="mb-4 w-full object-cover"/>
            <p ref={descRef} className="mb-6 flex-grow">{description}</p>
        </section>
    );
}
