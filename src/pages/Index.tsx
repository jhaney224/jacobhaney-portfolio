import { useEffect, useRef } from 'react';
import '../assets/css/App.css'
import Hero from '../components/Hero.tsx';
import TechTag from '../components/TechTag.tsx';
import { SiTypescript } from "react-icons/si";
import { FaJava, FaNodeJs, FaVuejs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import ProjectCard from '../components/ProjectCard.tsx';
import { gsap } from '../gsapUtils.tsx';

export default function Index() {
  // Metadata
  useEffect(() => {
    document.title = 'Jacob Haney | Home';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'The home page showcasing at a brief level who Jacob is and what he does.');
  });

  // Animations
  const skillsRef = useRef<HTMLElement>(null);
  const skillsTitleRef = useRef<HTMLHeadingElement>(null);
  const skillsGridRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLElement>(null);
  const featuredTitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Skills section animation
      gsap.set([skillsTitleRef.current, skillsGridRef.current], {
        opacity: 0,
        y: 40
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play none none reverse"
        }
      })
      .to(skillsTitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      })
      .to(skillsGridRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4");

      // Featured project section animation
      gsap.set([featuredTitleRef.current], {
        opacity: 0,
        y: 40
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: featuredRef.current,
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play none none reverse"
        }
      })
      .to(featuredTitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      });

    });

    return () => ctx.revert();
  }, []);

  // Main Content
  return (
    <>
      <Hero heading="Hi, I'm Jacob." subtext='Aspiring Web Developer. Problem Solver. Builder of cool things.'
        heroButtons={[
          {
            label: "View Projects",
            url: "/projects",
            openInNewTab: false
          },
          {
            label: "About Me",
            url: "/about",
            openInNewTab: false
          }
      ]}/>

      <section ref={skillsRef} id="skills-snapshot">
        <h2 ref={skillsTitleRef} className="text-center">Skills Snapshot</h2>

        <div ref={skillsGridRef} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between'>
          <TechTag name='React.js' reactIcon={FaReact}/>
          <TechTag name='Vue.js' reactIcon={FaVuejs}/>
          <TechTag name='Tailwind CSS' reactIcon={RiTailwindCssFill}/>
          <TechTag name='Node.js' reactIcon={FaNodeJs}/>
          <TechTag name='Java' reactIcon={FaJava}/>
          <TechTag name='Typescript' reactIcon={SiTypescript}/>
        </div>
      </section>

      <section ref={featuredRef} id="featured-project">
        <h2 ref={featuredTitleRef} className="text-center">Featured Project</h2>

        <ProjectCard projectId='ulti-studios' projectName='Ulti Studios' showcaseImg='/ultistudiosweb.png' showcaseImgAltText='The homepage of the Ulti Studios site.'
          description="An entrepreneur project, where I provide Minecraft server services through a small team. I've developed and design its site and I currently maintain it."
          techTags={['Vue.js', 'Nuxt', 'Tailwind CSS', 'Netlify', 'Node.js']} 
          previewURL='https://ultistudios.co/'/>
      </section>
    </>
  )
}
