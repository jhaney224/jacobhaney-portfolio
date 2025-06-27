export * from "gsap";
export * from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function registerPlugins() {
    gsap.registerPlugin(ScrollTrigger);
}
