'use client'
import { useRef, useState, useEffect } from 'react';
import Head from 'next/head';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type'
import {Image} from "@nextui-org/react";
import useIsomorphicLayoutEffect from './helpers/isomorphicLayout';
import Card from './components/Card';
import TextRotator from './components/TextRotator'
import { Parallax } from 'react-scroll-parallax';
import { TypeAnimation } from 'react-type-animation';
import { ParallaxBanner, BannerLayer } from 'react-scroll-parallax';

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

const Scroll = () => {
  const horizontalSection = useRef();
  const project = useRef();
  const contact = useRef();
  const skills = useRef()

  const [whichProject, setWhichProject] = useState('Projects')
  const [whichWork, setWhichWork] = useState('')

  const background = {
    image:
      'ats.png',
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  const foreground = {
    image:
      'planet.png',
    translateY: [0, 15],
    scale: [1, 1.1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  const gradientOverlay = {
    opacity: [0, 1],
    shouldAlwaysCompleteAnimation: true,
    expanded: true,
    children: (
      <div className="absolute inset-0 bg-gradient-to-t bg" />
    ),
  };


  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray('.horizontal-panel');
      gsap.to(slides, {
        xPercent: -135 * (slides.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: horizontalSection.current,
          pin: true,
          start: 'top top',
          end: '+=400%',
          scrub: 0.5,
        },
      });
    }, horizontalSection);
    return () => ctx.revert();
  }, []);

  function changeProject(e) {
    // debugger
    setWhichProject(e.target.alt)
    setWhichWork(e.target.id)
  }

  const Project = () => {
    return (
      <TypeAnimation
        sequence={[
          whichProject
        ]}
        wrapper="span"
        speed={30}
        style={{ fontSize: '8vw', position: 'absolute', color: '#FAFAF9' }}
        cursor={false}
      />
    )
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
      <div className='overflow-x-hidden relative'>
        {/* <ParallaxBanner
          layers={[
            { image: '/ats.png', speed: -30 },
            { image: '/planet.png', speed: 5 },
          ]}
          className="aspect-[2/1]"
        > */}
        <ParallaxBanner
          layers={[background, foreground, gradientOverlay]}
          className="aspect-[2/1] bg-gray-900"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <TextRotator />
          </div>
        </ParallaxBanner>
        <section
          className="horizontal-section"
          ref={horizontalSection}>
          <Project className='absolute'/>
          <div className="horizontal-panel bg">
            <div onMouseOver={() => changeProject(event)}>
              <Card 
                id='The Fox, Chicken and Corn'
                name='The Fox, Chicken and Corn' 
                img={'/fox.png'} 
                url={fcc} 
                imgOp={'/chkinBottom2.png'}
              />
            </div>
            <div onMouseOver={() => changeProject(event)}>
              <Card 
                name='Fiduciary Benefits Group' 
                img={'/fbga1.png'} 
                url={fbgUrl} 
                imgOp={'/fbga.png'}
              />
            </div> 
          </div>
          <div className="horizontal-panel bg">
            <div onMouseOver={() => changeProject(event)}>
              <Card 
                name='Arrowhead Tree Service' 
                img={'/tree.png'} 
                url={arrowUrl} 
                imgOp={'/arbBottom1.png'}
              />
            </div>
            <div onMouseOver={() => changeProject(event)}>
              <Card 
                name='Stock SMS Alert' 
                img={'/sms1.png'} 
                url={smsUrl} 
                imgOp={'/smsa.png'}
              />
            </div>
          </div>
          <div className="horizontal-panel bg">
            <div onMouseOver={() => changeProject(event)}>
              <Card 
                name='Customer Service Tool' 
                img={'/cst5.png'} 
                url={cstUrl} 
                imgOp={'/cst6.png'}
              />
            </div>
            <div onMouseOver={() => changeProject(event)}>
              <Card 
                name='Data Entry Tool'  
                img={'/dat4.png'} 
                url={cst1Url} 
                imgOp={'/dat.png'}
              />
            </div>
          </div >
          <div className="horizontal-panel bg">
            <div onMouseOver={() => changeProject(event)}>
              <Card 
                name='XX Artists Career Form'  
                img={'/artm.png'} 
                url={xxUrl} 
                imgOp={'/art.png'}
              />
            </div>
            <div onMouseOver={() => changeProject(event)}>
              <Card 
                name='Real Estate Lifeline'
                id='Google/Microsoft Calendar Integration'
                img={'/real1.png'} 
                url={realUrl} 
                imgOp={'/real.png'}
              />
            </div>
          </div>
        </section>
        <section style={{backgroundImage: 'url(/bg.png)'}} 
          className="full-width-image-container bg-dblue flex flex-wrap justify-center ">
          <Parallax translateX={['-200px', '0px']}>
            <h1 className='text-center text-stone-50'>SKILLS</h1>
          </Parallax>
          <div className='align-text-top'>
            <Parallax translateX={['200px', '0px']}>
              <div className='relative rotate'>
                <Image
                  src='/sCircle.png'
                  alt=''
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </Parallax>
          </div>
        </section>
        <section>
        <ParallaxBanner 
          layers={[
            { image: '/spc.png', speed: 10 },
            {
              speed: 45,
              children: ( 
                <div className='absolute inset-0 flex items-center justify-center text-center w-3/4'>
                  {/* <h1 className='text-stone-50'><a className='text-stone-50' href='mailto:psk65lava@gmail.com'>Email</a></h1>
                  <h1 className='text-stone-50'><a href='https://www.linkedin.com/in/paul-killian/'>LinkedIn</a></h1>
                  <h1 className='text-stone-50'><a href='https://www.github.com/PaulKillian'>Github</a></h1> */}
                  <p className='text-center m-auto'>Web development can be likened to space exploration in its endless potential and vastness of possibilities. Just like the unexplored depths of the universe, the world of web development is a boundless expanse of creativity and innovation. Much like astronauts charting unknown territories, web developers venture into uncharted digital realms, pushing the boundaries of technology and human imagination. Just as space exploration requires collaboration among scientists, engineers, and researchers from diverse fields, web development thrives on the synergy of different skills, from coding and design to user experience and data analysis. Both endeavors are fueled by an insatiable curiosity, driving individuals to delve deeper, reach higher, and uncover the hidden mysteries of their respective frontiers. In both realms, pioneers constantly strive to create new pathways, building upon the knowledge of the past to propel humanity into a future defined by limitless opportunities.</p>
                </div>                  
              ),
            },
            { image: '/spc1.png', speed: 0 },
          ]}
          className="aspect-[2/1]"
        />
        </section>
      </div>
    </div>
  );
};

export default Scroll;
