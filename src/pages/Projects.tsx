import { useEffect, useRef } from 'react';
import Hero from '../components/Hero.tsx';
import ProjectCard from '../components/ProjectCard.tsx';
import { gsap } from '../gsapUtils.tsx';

export default function Projects() {
    // Metadata
    useEffect(() => {
        document.title = 'Jacob Haney | Projects';

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) metaDescription.setAttribute('content', 'Curious to see what Jacob has been working on? Check out his projects here.');
    });

    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    // Animations
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial state
            gsap.set([descriptionRef.current, gridRef.current], {
                opacity: 0,
                y: 30
            });

            // Staggered entrance animation
            gsap.timeline({
                scrollTrigger: {
                    trigger: descriptionRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            })
            .to(descriptionRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out"
            })
            .to(gridRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.3");

        });

        return () => ctx.revert();
    }, []);

    // Main Content
    return (
    <>
        <Hero heading="Projects" subtext=""/>
        <p ref={descriptionRef} className='text-center'>Here are some projects I've built, contributed to, or maintained.</p>

        <div ref={gridRef} className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr'>
            <ProjectCard projectId='ulti-studios-website' projectName='Ulti Studios Website' showcaseImg='/ultistudiosweb.png' 
            showcaseImgAltText='The homepage of the Ulti Studios site.'
            description="The current website of my entrepreneur project, Ulti Studios."
            techTags={['Vue.js', 'Nuxt', 'Tailwind CSS', 'Netlify']} 
            previewURL='https://ultistudios.co/'
            gitHubURL='https://github.com/jhaney224/ulti-studios-site-showcase'/>

            <ProjectCard projectId='skyhavenmc' projectName='SkyhavenMC Website' showcaseImg='/skyhavenmc.png' 
            showcaseImgAltText='The homepage of the SkyHavenMC site.'
            description="A fictional Minecraft server landing page."
            techTags={['React.js', 'Vite', 'Tailwind CSS', 'Motion']} 
            previewURL='https://skyhavenmc.netlify.app'
            gitHubURL='https://github.com/jhaney224/skyhavenmc'/>

           <ProjectCard projectId='reactjs-habit-tracker' projectName='React.js Habit Tracker' showcaseImg='/reactjs-habit-tracker.png' 
            description="A basic habit tracker built using React.js that showcases a few React concepts like components and custom hooks."
            showcaseImgAltText='A page where you can manage your habits.'
            techTags={['React.js', 'HTML/CSS', 'Vite']} 
            gitHubURL='https://github.com/jhaney224/reactjs-habit-tracker'/>

            <ProjectCard projectId='php-weather-forecaster' projectName='PHP Weather Forecaster' showcaseImg='/php-weather-forecaster.png'
            showcaseImgAltText='A page where you search for the weather of a U.S. city.'
            description="An improved PHP weather forecaster from my PHP class, allowing to get the weather forecast of any city in the United States."
            techTags={['PHP', 'HTML/CSS']} 
            gitHubURL='https://github.com/jhaney224/php-weather-forecaster'/>

            <ProjectCard projectId='todo-app' projectName='TODO App' showcaseImg='/todo-app.png' 
            showcaseImgAltText='A page where you can manage your TODO tasks.'
            description="A simple TODO application made from my API class."
            techTags={['HTML/CSS', 'TypeScript', 'Node.js', 'Express.js']} 
            gitHubURL='https://github.com/jhaney224/todo-app'/>

            <ProjectCard projectId='progressive-web-apps' projectName='All About Progressive Web Applications' showcaseImg='/progressive-web-apps.png'
            showcaseImgAltText='The hero and navigation of the site.' 
            description="From my CSS Midterm, this is a website describing about what Progressive Web Applications are and more about them."
            techTags={['HTML/CSS', 'JavaScript']} 
            gitHubURL='https://github.com/jhaney224/css-midterm'/>

            <ProjectCard projectId='js-calculator' projectName='JavaScript Calculator' showcaseImg='/js-calculator.png' 
            showcaseImgAltText='Showcases a simple calculator with basic operations.' 
            description="A simple calculator from my JavaScript II class."
            techTags={['HTML/CSS', 'JavaScript']} 
            gitHubURL='https://github.com/jhaney224/javascript-final'/>

            <ProjectCard projectId='meta-your-page' projectName='Meta Your Page' showcaseImg='/meta-website.png' 
            showcaseImgAltText='Showcases the main page of the site.' 
            description="From my HTML & CSS final, this is a website that explains about meta tags and why they should be used."
            techTags={['HTML/CSS']} 
            gitHubURL='https://github.com/jhaney224/html-css-final'/>
        </div>
    </>
    )
}
