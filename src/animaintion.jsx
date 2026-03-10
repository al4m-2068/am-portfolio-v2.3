import { useRef } from 'react'
import './index.css'
import Home from './components/Sections/Home'
import Projects from './components/Sections/AboutAndProjects'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const App = () => {
    const homeRef = useRef(null);
    const projectsRef = useRef(null);
    const containerRef = useRef(null);

    useGSAP(() => {
        // 1. Validasi: Pastikan child sudah siap dan punya animasi
        if (!homeRef.current?.animation || !projectsRef.current?.animation) return;

        // 2. Ambil timeline dari child
        const homeTl = homeRef.current.animation;
        const projectsTl = projectsRef.current.animation;

        // 3. Setup state awal transisi
        // Projects awalnya hidden
        gsap.set(projectsRef.current, { autoAlpha: 0 });

        // 4. Buat Master Timeline
        const masterTl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 1,
                start: "top top",
                end: "+=500%",
            }
        });

        // 5. Susun urutan
        masterTl
            .add(homeTl) // Mainkan animasi Home
            .to(homeRef.current, { autoAlpha: 0, duration: 1 }, "+=0.5") // Fade out Home
            .to(projectsRef.current, { autoAlpha: 1, duration: 1 }, "<") // Fade in Projects
            .add(projectsTl); // Mainkan animasi Projects

    }, { scope: containerRef }); // Scope penting agar cleanup otomatis

    return (
        <div id="main-container" className="bg-amdb">
            <div ref={containerRef} className="relative w-full h-screen overflow-hidden">
                {/* Home di bawah */}
                <div className="absolute inset-0 z-10">
                    <Home ref={homeRef} />
                </div>
                
                {/* Projects di atas (awal hidden) */}
                <div className="absolute inset-0 z-20">
                    <Projects ref={projectsRef} />
                </div>
            </div>
        </div>
    )
}