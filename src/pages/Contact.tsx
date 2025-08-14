import { useEffect, useRef } from 'react';
import Hero from '../components/Hero.tsx';
import { gsap } from '../gsapUtils.tsx';

export default function Contact() {
    // Metadata
    useEffect(() => {
        document.title = 'Jacob Haney | Contact';

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) metaDescription.setAttribute('content', 'Want to get in touch with Jacob for more info, a question, or an opportunity? Contact him here.');
    });

    // Animations
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const emailSectionRef = useRef<HTMLElement>(null);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial state
            gsap.set([descriptionRef.current, emailSectionRef.current, formRef.current], {
                opacity: 0,
                y: 30
            });

            // Description animation
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
            });

            // Email section animation
            gsap.timeline({
                scrollTrigger: {
                    trigger: emailSectionRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            })
            .to(emailSectionRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out"
            });

            // Form animation
            gsap.timeline({
                scrollTrigger: {
                    trigger: formRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            })
            .to(formRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out"
            });

            // Subtle hover animations for form elements
            const formElements = formRef.current?.querySelectorAll('input, textarea');
            formElements?.forEach((element) => {
                const hoverTl = gsap.timeline({ paused: true });
                hoverTl.to(element, {
                    scale: 1.02,
                    duration: 0.2,
                    ease: "power2.out"
                });

                element.addEventListener('focus', () => hoverTl.play());
                element.addEventListener('blur', () => hoverTl.reverse());
            });

        });

        return () => ctx.revert();
    }, []);

    // Main Content
    return (
    <>
        <Hero heading="Contact" subtext=""/>
        <p ref={descriptionRef} className='text-center'>There's multiple methods for you to reach me. Either send me an email or fill out the below form and I'll get back to you.</p>

        <section ref={emailSectionRef} className='flex flex-col items-center mx-auto'>
            <h2>✉️ Email</h2>
            <a href="mailto:jacobhaney224@gmail.com">jacobhaney224@gmail.com</a>
        </section>

        <form ref={formRef} name="contact" method="POST" data-netlify="true" className="flex flex-col items-center mx-auto mt-10">
            <h2>Send Me A Message</h2>

            <label htmlFor="name">Name *</label>
            <input id="name" name="name" type="text" required />

            <label htmlFor="email">Email *</label>
            <input id="email" name="email" type="email" autoComplete="email" required />

            <label htmlFor="subject">Subject *</label>
            <input id="subject" name="subject" type="text" />

            <label htmlFor="message">Message *</label>
            <textarea id="message" name="message" required></textarea>

            <input type="hidden" name="form-name" value="contact"/>
            <input className="button" id="submit" type="submit" value="Send Message" />
        </form>
    </>
    )
}
