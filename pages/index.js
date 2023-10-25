'use client'
import { useRef, useState } from 'react';
import Head from 'next/head';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import {Image} from "@nextui-org/react";
import useIsomorphicLayoutEffect from './helpers/isomorphicLayout';
import Card from './components/Card';
import TextRotator from './components/TextRotator'
import FooterCard from './components/FooterCard'
import Navbar from './components/Navbar'
import { ParallaxBanner } from 'react-scroll-parallax';
import { about } from './components/FooterCard'
import Project from './components/Project'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const fcc = 'https://gorgeous-rolypoly-35d7d5.netlify.app'
const fbgUrl = 'https://fiduciarybenefitsgroup.com/'
const cstUrl = 'https://poetic-khapse-3a8b7b.netlify.app/'
const arrowUrl = 'https://arrowheadtreeservices.com'
const smsUrl = 'https://stocksmsalert.com/'
const cst1Url = 'https://celebrated-paprenjak-3b3a4c.netlify.app/'
const xxUrl = 'https://6530123454fe2c2a3a4d5960--precious-croissant-8547c8.netlify.app/'
const realUrl = 'https://realestatelifeline.app/'

const App = () => {
  const horizontalSection = useRef();
  const project = useRef();
  const contact = useRef();
  const skills = useRef()

  const [whichProject, setWhichProject] = useState('Projects')

  const background = {
    image:
      'ats.png',
    translateY: [0, -10],
    scale: [1.25, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  const foreground = {
    image: 'rocks.png',
    translateY: [10, -12],
    scale: [1.5, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  const gradientOverlay = {
    opacity: [0, 2],
    shouldAlwaysCompleteAnimation: true,
    expanded: true,
    children: (
      <div className="absolute inset-0 main-bg" />
    ),
  };


  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray('.horizontal-panel');
      gsap.to(slides, {
        xPercent: -130 * (slides.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: horizontalSection.current,
          pin: true,
          start: 'top top',
          scrub: 1,
          end: () => `+=${document.querySelector(".bg-bottom").offsetWidth}`
        },
      });
    }, horizontalSection);
    return () => ctx.revert();
  }, []);

  const removeOrAddOverflow = (e) => {
    if (e.target.className) {
      if (e.target.className === 'blend') {
        const element = document.getElementById('overFlow')
        element.classList.add('overflow-x-hidden');
      } else {
        const element = document.getElementById('overFlow')
        element.classList.remove('overflow-x-hidden');
      }
    }
  }

  const changeProject = (e) => {
    setWhichProject(e.target.alt)
  }

  return (
    <div>
      <Head>
        <title>Paul Killian&apos;s Portfolio</title>
        <meta
          name="Paul Killian's Portfolio"
          content="Paul Killian's Portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main id='overFlow' className='overflow-x-hidden relative'>
        <Navbar />
        <ParallaxBanner
          id={'banner'}
          layers={[background, foreground, gradientOverlay]}
          className="aspect-[2/1]"
          onMouseOver={() => removeOrAddOverflow(event)}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <TextRotator />
          </div>
        </ParallaxBanner>
        <a name='projects'></a>
        <section
          id={'horizontal'}
          className="horizontal-section"
          ref={horizontalSection}
          style={{backgroundImage: 'url(/underwater2.gif)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}
          onMouseOver={() => removeOrAddOverflow(event)}
        >
          <Project 
            className='absolute mt-5'
            whichProject={whichProject}
          />
          <div className="horizontal-panel bg">
            <div>
              <Card 
                name='The Fox, Chicken and Corn' 
                img={'/fox.png'} 
                url={fcc} 
                imgOp={'/chkinBottom2.png'}
                setWhichProject={setWhichProject}
              />
            </div>
            <div
             >
              <Card 
                name='Fiduciary Benefits Group' 
                img={'/fbga1.png'} 
                url={fbgUrl} 
                imgOp={'/fbga.png'}
                setWhichProject={setWhichProject}
              />
            </div> 
          </div>
          <div className="horizontal-panel">
            <div>
              <Card 
                name='Arrowhead Tree Service' 
                img={'/tree.png'} 
                url={arrowUrl} 
                imgOp={'/arbBottom1.png'}
                setWhichProject={setWhichProject}
              />
            </div>
            <div>
              <Card 
                name='Stock SMS Alert' 
                img={'/sms1.png'} 
                url={smsUrl} 
                imgOp={'/smsa.png'}
                setWhichProject={setWhichProject}
              />
            </div>
          </div>
          <div className="horizontal-panel">
            <div>
              <Card 
                name='Customer Service Tool' 
                img={'/cst5.png'} 
                url={cstUrl} 
                imgOp={'/cst6.png'}
                setWhichProject={setWhichProject}
              />
            </div>
            <div>
              <Card 
                name='Data Entry Tool'  
                img={'/dat4.png'} 
                url={cst1Url} 
                imgOp={'/dat.png'}
                setWhichProject={setWhichProject}
              />
            </div>
          </div >
          <div className="horizontal-panel">
            <div>
              <Card 
                name='XX Artists Career Form'  
                img={'/artm.png'} 
                url={xxUrl} 
                imgOp={'/art.png'}
                setWhichProject={setWhichProject}
              />
            </div>
            <div>
              <Card 
                name='Real Estate Lifeline'
                img={'/real1.png'} 
                url={realUrl} 
                imgOp={'/real.png'}
                setWhichProject={setWhichProject}
              />
            </div>
          </div>
        </section>    
      </main>
      <section className='bg-bottom'
      >
      <a name='about'></a>
        <div style={{backgroundImage: 'url(/ship.png)'}}
          className="full-width-image-container-bottom">
          <h1 className='text-center'>About Me</h1>
          <div className='flex flex-wrap justify-around'>
            {about.map((aboutItem, index) => {
              return (
                <FooterCard 
                  key={index}
                  title={aboutItem.title}
                  descript={aboutItem.descript}
                  img={aboutItem.img} 
                  name={aboutItem.name}
                />
              )
            })} 
          </div>
        </div>
        <a name='skills'></a>
        <div
          className="full-width-image-container"
        >
          <div className='align-text-top'>
            <h1 className='text-center'>Skills</h1>
            <div className='relative bg-glass-skill'>
              <Image
                onMouseOver={() => changeProject(event, setWhichProject)}
                className='glass-skill rounded-full rotate blend'
                src={'/sCircle.png'}
                alt='Skills'
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
        <div style={{
          backgroundImage: 'url(/mee.png)', 
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain'
        }}
        className="bottom-right text-center text-stone-50">
        <a name='contact'></a>
        <h1>Contact Me</h1>
          <h1><a href='mailto:psk65lava@gmail.com'>Email</a></h1>
          <h1><a href='https://www.linkedin.com/in/paul-killian/'>LinkedIn</a></h1>
          <h1><a href='https://www.github.com/PaulKillian'>Github</a></h1>
        </div>
      </section>
    </div>
  );
};

export default App;
