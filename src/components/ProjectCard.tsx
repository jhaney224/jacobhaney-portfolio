import { useEffect, useRef } from 'react';
import { gsap } from '../gsapUtils';

interface ProjectCardProps {
    projectId: string;
    projectName: string;
    showcaseImg: string;
    showcaseImgAltText: string;
    description: string;
    techTags: string[];
    gitHubURL?: string;
    previewURL?: string;
}

export default function ProjectCard({projectId, projectName, showcaseImg, showcaseImgAltText, description, techTags, gitHubURL, previewURL}: ProjectCardProps) {
    const cardRef = useRef<HTMLElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);
    const tagsRef = useRef<HTMLDivElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial state
            gsap.set([titleRef.current, imageRef.current, descRef.current, tagsRef.current, buttonsRef.current], {
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
            }, "-=0.4")
            .to(tagsRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out"
            }, "-=0.3")
            .to(buttonsRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out"
            }, "-=0.3");
        }, cardRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={cardRef} className="m-5 text-center flex flex-col h-full" id={projectId}>
            <h3 ref={titleRef} className="mb-4">{projectName}</h3>
            <img ref={imageRef} src={showcaseImg} alt={showcaseImgAltText} className="mb-4 w-full object-cover"/>
            <p ref={descRef} className="mb-6 flex-grow">{description}</p>

            <div ref={tagsRef} className="mt-auto mb-6">
                <h4 className="mb-4">Tech Tags</h4>
                <ul className="list-none flex flex-wrap justify-center gap-2 min-h-[80px] items-start">
                    {
                        techTags.map((item, index) => (
                            <li key={index} className="card text-sm px-3 py-2 m-1">{item}</li>
                        ))
                    }
                </ul>
            </div>

            <div ref={buttonsRef} className="flex flex-col gap-2 mt-auto">
                { (previewURL !== undefined && previewURL !== "") && 
                    <button onClick={() => window.open(previewURL, '_blank', 'noopener,noreferrer')}>Preview Project</button>
                }

                { (gitHubURL !== undefined && gitHubURL !== "") && 
                    <button onClick={() => window.open(gitHubURL, '_blank', 'noopener,noreferrer')}>Source Code</button>
                }
            </div>
            
        </section>
    );
}
