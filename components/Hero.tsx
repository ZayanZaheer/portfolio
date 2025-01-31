import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import ShimmerButton from './ShimmerButton'
import { GoZap } from "react-icons/go"

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>
        </div>

        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.02] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
        </div>

        <div className='flex justify-center relative my-20 z-10'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justtify-center'>
                <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>Dynamic Full Stack Web Developer</h2>

                <TextGenerateEffect 
                className='uppercase text-[40px] text-center md:text-5xl lg:text-6xl'
                words='The concepts you create I bring to Reality'
                duration={5}
                />

                <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                    Hi, I'm Zayan, a Junior Software Developer currently studying in Malaysia
                </p>

                <a href='#projects'><ShimmerButton title='Show my Work' icon={<GoZap />} position='right'/></a>
            </div>
            
        </div>

    </div>
  )
}

export default Hero