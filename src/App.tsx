import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useRef } from 'react';
import Index from './pages/Index.tsx';
import Contact from "./pages/Contact.tsx";
import About from './pages/About.tsx';
import Projects from './pages/Projects.tsx';
import { gsap } from './gsapUtils.tsx';

function AnimatedRoutes() {
    const location = useLocation();
    const routeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Page transition animation
            gsap.fromTo(routeRef.current, 
                {
                    opacity: 0,
                    y: 20
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power2.out"
                }
            );
        }, routeRef);

        return () => ctx.revert();
    }, [location.pathname]);

    return (
        <div ref={routeRef}>
            <Routes location={location}>
                <Route path="/" element={<Index />}/>
                <Route index element={<Index />} />
                <Route path="about" element={<About/>} />
                <Route path="contact" element={<Contact />} />
                <Route path="projects" element={<Projects />} />
            </Routes>
        </div>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <AnimatedRoutes />
        </BrowserRouter>
    )
}
