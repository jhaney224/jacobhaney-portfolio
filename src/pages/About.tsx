import Hero from '../components/Hero.tsx';
import Features from '../components/Features.tsx';
import { useState, useEffect, useRef } from 'react';
import { gsap } from '../gsapUtils.tsx';

const educationCards = [
    {
        title: "Web Development Certificate",
        description: [
            "<i>Johnson County Community College, Overland Park, KS (Jan 2023 - Dec 2024)</i>",
            "• Phi Theta Kappa Honor Society",
            "• VP, Neurodiversity Support Club",
            "• Includes IT 120: CompTIA A+ Core 2, a course aligned with the CompTIA A+ Core 2 certification exam."
        ]
    },
    { title: "PHP For WordPress", description: ["<i>LinkedIn (Earned in Jul 2025)</i>"]},
    { title: "Learning Webflow", description: ["<i>LinkedIn (Earned in Jul 2025)</i>"]},
    { title: "SEO Foundations", description: ["<i>LinkedIn (Earned in Jul 2025)</i>"]},
    { title: "Vue.js Certificate", description: ["<i>W3Schools (Earned in Jan 2025)</i>"] },
    { title: "Node.js Certificate", description: ["<i>W3Schools (Earned in Dec 2024)</i>"] },
    { title: "Modern Web Dev Certificate", description: ["<i>W3Schools (Earned in Dec 2024)</i>"] },
    { title: "Project Orion", description: ["<i>MineAcademy (Started in Nov 2019, Earned in Nov 2023)</i>"] },
    { title: "Java Masterclass", description: ["<i>MineAcademy (Started in Nov 2019, Earned in Nov 2023)</i>"] },
    { title: "SANS Foundations", description: ["<i>SANS Institute (Jun 2022 - Aug 2022)</i>"] }
];

const workExperienceCards = [
    {
        title: "Moore RMG - Topeka, KS",
        description: [
            "<i>Credit Card Clerk • Sept 2025 – Present</i>",
            "• Key in customer info from donation mailings.",
            "• Verify info to ensure accuracy and compliance.",
            "• Complete takeouts, removing declined transactions from completed batches."
        ]
    },
    {
        title: "Ulti Studios – Remote",
        description: [
            "<i>Technical Team Lead • Oct 2020 – Oct 2025</i>",
            "• Delivered technical solutions for end-users and clients, including diagnosing and resolving issues, configuring systems, and implementing software features.",
            "• Managed client communications, documentation, and technical project timelines.",
            "• Coordinated a remote team to deliver custom technical solutions to clients."
        ]
    },
    { 
        title: "Dillons – Lawrence, KS", 
        description: [
            "<i>Cashier/Front-End Associate • Jul 2023 – Feb 2025</i>", 
            "• Assisted customers with checking out, finding items and mobile app navigation.",
            "• Adapted quickly to different roles (cashier, bagger, self-checkout attendant) to meet staffing needs."
        ]
    },
    { 
        title: "Freddy’s Frozen Custard & Steakburgers – Lawrence, KS", 
        description: ["<i>Coldline Team Member • Nov 2022 – Apr 2023</i>", "• Took and fulfilled guest orders, cleaned prep stations, and supported team tasks."]
    },
    { 
        title: "Visiting Nurses Association – Lawrence, KS", 
        description: [
            "<i>Data Entry Summer Intern • Jun 2022 – Aug 2022</i>", 
            "• Maintained patient, employee, and financial records with accuracy and confidentiality.",
            "• Audited billing records to identify and correct errors.",
            "• Answered phones and handled customer inquiries."
        ]
    }
];

const funFactCards = [
    { title: "#1", description: ["A couple of other things I enjoy are creative writing and storytelling."] },
    { title: "#2", description: ["Faith and empathy guide how I approach end-user support, collaboration, and client work."] },
    { title: "#3", description: ["I’m on the autism spectrum, which means I’m often the one who spots what others overlook."] },
    { title: "#4", description: ["I enjoy learning how things work — whether it’s software or a mechanical keyboard."] }
]

const categoriesAndSkills = [
    { title: "📞 IT Support Skills", items: ["End-User Support", "Hardware/Software Troubleshooting", "Familiar with Ticketing Systems", "System Configuration", 
        "Basic Networking"]},
    { title: "</> Frontend", items: ["HTML", "CSS", "JavaScript", "React.js", "Vue.js", "TypeScript"]}, 
    { title: "⚙️ Backend", items: ["Java", "PHP", "Node.js", "TypeScript", "Express.js", "SQL"]}, 
    { title: "🛠️ Tools", items: ["Canva", "Figma", "IntelliJ", "Visual Studio Code", "MySQL", "WordPress", "Webflow", "Git", "GitHub", "Trello", "Tailwind CSS", 
        "NPM (Node Package Manager)", "Rocky Linux", "Windows", "Vite", "PuTTY", "Google Workspace", "Microsoft 365"]}
];

export default function About() {
    // Metadata
    useEffect(() => {
        document.title = 'Jacob Haney | About';

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) metaDescription.setAttribute('content', 'More in-depth detail about Jacob, his skillset, education, etc.');
    });

    // Animations
    const [selectedTab, setSelectedTab] = useState(categoriesAndSkills[0].title);
    const introRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const skillsetRef = useRef<HTMLElement>(null);
    const skillsetTitleRef = useRef<HTMLHeadingElement>(null);
    const tabsRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial state
            gsap.set([textRef.current, imageRef.current, skillsetTitleRef.current, tabsRef.current, contentRef.current], {
                opacity: 0,
                y: 30
            });

            // Intro section animation
            gsap.timeline({
                scrollTrigger: {
                    trigger: introRef.current,
                    start: "top 75%",
                    end: "bottom 25%",
                    toggleActions: "play none none reverse"
                }
            })
            .to(textRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out"
            })
            .to(imageRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                rotation: 0.01 // Slight rotation for visual interest
            }, "-=0.4");

            // Skillset section animation
            gsap.timeline({
                scrollTrigger: {
                    trigger: skillsetRef.current,
                    start: "top 75%",
                    end: "bottom 25%",
                    toggleActions: "play none none reverse"
                }
            })
            .to(skillsetTitleRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out"
            })
            .to(tabsRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out"
            }, "-=0.3")
            .to(contentRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out"
            }, "-=0.3");
        });

        return () => ctx.revert();
    }, []);

    // Main Content
    return (
    <>
        <Hero heading="About Me" subtext=""/>

        <div ref={introRef} className='grid grid-cols-1 gap-5 md:grid-cols-3'>
            <p ref={textRef} className='md:col-start-1 md:col-end-3'>
                I have an entry-level IT background with experience in technical troubleshooting, end-user support, and customer service. My web development background 
                gives me a different approach to IT problems, with experience in building and maintaining software and websites.
            </p>
            <img ref={imageRef} className='rounded-4xl' src="/jacobhaneypfp-300x300.png" alt="Picture of Jacob Haney." />
        </div>

        <section ref={skillsetRef} id="skillset">
            <h2 ref={skillsetTitleRef}>Skillset</h2>
            
            {/* Tab Navigation */}
            <div ref={tabsRef} className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                {categoriesAndSkills.map((category) => (
                    <button key={category.title} onClick={() => setSelectedTab(category.title)}
                        className={`px-4 py-2 font-medium text-sm rounded-t-lg transition-colors duration-200`}>
                        {category.title}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div ref={contentRef} className="min-h-[200px] p-4 rounded-lg">
                {categoriesAndSkills.filter(category => category.title === selectedTab).map((category) => (
                    <div key={category.title}>
                        <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {category.items.map((skill, index) => (
                                <div key={index} className="card">{skill}</div>
                            ))}
                        </div>
                    </div>
                    ))
                }
            </div>
        </section>

        <Features id='education' title='Education' detailCards={educationCards}/>
        <Features id='work' title='Work Experience' detailCards={workExperienceCards}/>
        <Features id='fun-facts' title='Fun Facts' detailCards={funFactCards}/>
    </>
    )
}
