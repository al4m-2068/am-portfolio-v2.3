import "../../index.css"
import { NArBtn } from "../Atoms/NormalButton";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from "react";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);


const Home = () => {
    const heroScope = useRef()
    const bigName = useRef()
    const aboutsRef = useRef()
    const bNameChars = ['.chars7', '.chars3']

    useGSAP(() => {
        // SPLIT CORNER
        const splittedBig = SplitText.create(bigName.current, {
            type: 'words, chars',
            charsClass: 'chars++',
            mask: 'words'
        })
        const splittedAbouts = SplitText.create(aboutsRef.current, {
            type: 'words, chars',
            charsClass: 'aboutChars++',
            wordsClass: 'aboutWords++',
            mask: 'words'
        })

        // FILTER CORNER
        const otherChars = splittedBig.chars.filter((_, i) => i !== 2 && i !== 6) // index 2 = chars3, 6 = chars7

        // ANIM CORNER
        const homeTl = gsap.timeline({
            defaults: {
                duration: 3
            }
        })
        homeTl
        .from(heroScope.current.querySelector('div'), {
            y: '-500',
            ease: 'expo.out',
            duration: 2.5
        })
        .from(aboutsRef.current, {
            y: 50,
            opacity: 0,
            stagger: 0.02,
            duration: 0.8,
            ease: 'power2.out'
        }, '<.2')
        .from(splittedAbouts.chars, {
            y: 50,
            opacity: 0,
            stagger: 0.02,
            duration: 0.5,
            ease: 'power2.out'
        }, '<')
        .from('.line-vert', {
            height: 0,
            duration: 1,
            ease: 'power2.out' 
        }, '<.5')
        .from(otherChars, {
            y: '700px',
            opacity: 0,
            duration: 2,
            stagger: 0.1,
            ease: 'elastic.out'
        }, '<')
        .fromTo(bNameChars, {
            x: 30,
            y: -200,
            rotate: -490,
        }, {
            x: 0,
            y: 0,
            rotate: 0,
            ease: 'bounce.out',
            duration: 2,
            stagger: .19
        }, '<.1')

        // STRIGGER CORNER
    }, {scope: heroScope})

    return(
        <section className="w-full h-screen flex flex-col items-center px-15.5 pb-10.5 gap-14.5 bg-amdb text-white" ref={heroScope}>
            <div className={`h-full w-[90%] bg-amdb/90 bg-blend-exclusion bg-[url("/images/me-cameralego.jpg")] bg-size-[120%] bg-position-[50%_60%] rounded-b-[30px]`}>
            </div>

            <h1 ref={bigName} className="font-stackn font-bold text-[162px] text-trim tracking-[-3px]">Albar Abdul Malik</h1>

            <div ref={aboutsRef} className="flex justify-between items-center w-full">
                <span className="h-full items-center flex gap-7 w-75">
                    <span className="flex flex-col gap-4">
                        <h1 className="text-[46px] text-trim font-bold">5+</h1>
                        <h2 className="text-lg">Projects</h2>
                    </span>
                    <span className="line-vert-cust h-8"></span>
                    <span className="flex flex-col gap-4">
                        <h1 className="text-[46px] text-trim font-bold">3yrs+</h1>
                        <h2 className="text-lg">Experience</h2>
                    </span>
                </span>
                <span className="line-vert"></span>
                <h2 className="text-lg font-light uppercase text-center">A creative designer portfolio,<br/>working remotely from <strong className="font-bold">Tangerang, Indonesia</strong></h2>
                <span className="line-vert"></span>
                <span className="w-75">
                    <NArBtn className='w-full justify-between' text="LinkedIn"/>
                </span>
            </div>
        </section>
    )
}
export default Home;