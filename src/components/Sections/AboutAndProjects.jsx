import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import { ProjectsData, Titles } from "../../data/projects";
import "/src/index.css"
import { useRef, useState } from "react";
import { NArBtn } from "../Atoms/NormalButton";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText, useGSAP)

function Projects(){
    const [titleNow, setTitleNow] = useState(Titles)
    const projectsRef = useRef()
    const projectScope = useRef()
    
    function projectHover(e) {
        const card = e.currentTarget
        const overlay = card.querySelector('.overlay')
        const info = card.querySelector('.project-info')
        
        gsap.killTweensOf([overlay, info])
        
        const title = info.querySelector('h1')
        const desc = info.querySelector('h2')
        
        const splitTitle = new SplitText(title, { type: 'words' })
        const splitDesc = new SplitText(desc, { type: 'words' })
        
        const tl = gsap.timeline({
            defaults: {
                duration: 0.4
            }
        })
        
        tl.to(overlay, { opacity: 0, ease: 'power2.out' })
        .fromTo(info, 
            { y: '100%', opacity: 0 },
            { y: 0, opacity: 1, ease: 'power1.out'},
            '<'
        )
        .from(splitTitle.words, {
            y: 20, opacity: 0, stagger: 0.05, ease: 'power2.out', duration: 0.5
        }, '-=0.3')
        .from(splitDesc.words, {
            y: 20, opacity: 0, stagger: 0.03, ease: 'power2.out'
        }, '-=0.3')
    }
    function projectNormal(e) {
        const card = e.currentTarget
        const overlay = card.querySelector('.overlay')
        const info = card.querySelector('.project-info')
        
        gsap.killTweensOf([overlay, info])
        
        const tl = gsap.timeline({
            defaults: {
                duration: 0.4
            }
        })
        
        tl.to(info, { y: '100%', opacity: 0, ease: 'power1.in' })
        .to(overlay, { opacity: 1, ease: 'power2.in' }, '-=0.3')
    }
    
    useGSAP(() => {
        const splittedAboutInfo = SplitText.create('.about-info', {
            type: 'words',
            mask: 'words',
            smartWrap: true
        })
        const splittedProjectInfoH1 = SplitText.create('.projects-info h1', {
            type: 'words, chars',
            mask: 'words',
            smartWrap: true
        })
        const splittedProjectInfoH2 = SplitText.create('.projects-info .info', {
            type: 'words',
            mask: 'words',
            smartWrap: true
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: projectScope.current,
                start: 'top top',
                end: '+=400%',
                pin: true,
                pinSpacing: true,
                scrub: 3,
                markers: true
            },
            defaults: {
                duration: 2
            }
        })

        gsap.set('.projects-info', {
            opacity: 0,
            display: 'none'
        })
        gsap.set('.projects-grid', {
            y: '100%',
            opacity: 0,
            display: 'none'
        })

        tl
        .from(splittedAboutInfo.words, {
            y: 100,
            rotate: -10,
            opacity: 0,
            stagger: 0.2,
            ease: 'power2.out'
        })
        .to(splittedAboutInfo.words, {
            delay: 2,
            y: -100,
            rotate: 10,
            opacity: 0,
            stagger: 0.2,
            ease: 'power2.in'
        })
        .to('.about-info', {
            opacity: 0,
            display: 'none',
            duration: 1
        })
        .to('.projects-info', {
            opacity: 1,
            display: 'flex'
        })
        .from(splittedProjectInfoH2[0].words, {
            yPercent: 100,
            rotate: 10,
            opacity: 0,
            stagger: 0.2,
            ease: 'power2.out'
        })
        .from(splittedProjectInfoH1[0].chars, {
            yPercent: 100,
            rotate: 10,
            opacity: 0,
            stagger: 0.2,
            ease: 'power2.out'
        }, '<1')
        .to('.projects-grid', {
            opacity: 1,
            display: 'grid'
        }, '-=.2')
        .to('.projects-grid', {
            yPercent: -200,
            duration: 10,
        })
        .to(splittedProjectInfoH1[0].chars, {
            yPercent: -100,
            rotate: 10,
            opacity: 0,
            stagger: 0.2,
            ease: 'power2.in'
        })
        .to(splittedProjectInfoH2[0].words, {
            yPercent: -100,
            rotate: 10,
            opacity: 0,
            stagger: 0.2,
            ease: 'power2.in'
        }, '<1')
        .from(splittedProjectInfoH2[1].words, {
            yPercent: 100,
            rotate: 10,
            opacity: 0,
            stagger: 0.2,
            ease: 'power2.out'
        })
        .from(splittedProjectInfoH1[1].chars, {
            yPercent: 100,
            rotate: 10,
            opacity: 0,
            stagger: 0.2,
            ease: 'power2.out'
        }, '<1')
    })

    return(
        <section className="w-full min-h-screen flex flex-col items-center px-15.5 pb-10.5 gap-14.5 bg-amdb text-white relative" ref={projectScope}>
            <div className="about-info absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center p-8">
                <h1 className="uppercase font-thin text-[4vw] text-center">Hi there! I’m a <b className="font-bold">multidisciplinary designer</b>, focused in <b className="font-bold">UI/UX</b> and <b className="font-bold">Branding design</b>.</h1>
            </div>

            <div className="projects-info absolute top-0 left-0 w-full h-screen text-center flex flex-col justify-end gap-7 text-white py-15.5">
                <h2 className="text-trim tracking-tight font-bold font-stackn text-[62px]">I Craft</h2>
                <div className="w-full flex flex-col overflow-clip h-26">
                    {titleNow.map((title) => (
                        <h1 className="tracking-tight font-bold font-stackn text-[108px]/32.5">{title.title}</h1>
                    ))}
                </div>
                <div className="w-full flex flex-col overflow-clip h-7">
                    {titleNow.map((title) => (
                        <h2 className="info uppercase text-lg">{title.info}</h2>
                    ))}
                </div>
            </div>
            <div className="projects-grid grid grid-cols-3 gap-6 items-center text-white" ref={projectsRef}>
                {ProjectsData.filter((proj) => proj.category === 'website').map((proj, index) => (
                    <div key={index} style={{
                        backgroundImage: `url(${proj.image})`
                    }} className='relative duration-200 rounded-[30px] overflow-clip w-85 h-103.25 bg-center bg-cover flex flex-col justify-end' onMouseEnter={projectHover} onMouseLeave={projectNormal}>
                        <div className="overlay absolute inset-0 bg-amdb mix-blend-exclusion pointer-events-none" />
                        <div style={{transform: "translateY(100%)", opacity: 0}} className="project-info flex flex-col gap-3 h-full justify-end bg-linear-to-t from-amdb to-amdb/0 p-8">
                            <h1 className="text-trim font-stackn text-[22px] font-bold">{proj.title}</h1>
                            <h2 className="text-lg text-trim mb-3 font-thin">{proj.desc}</h2>
                            <NArBtn text='View' icon={'arr-up-r'} className={'justify-between'}/>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Projects;