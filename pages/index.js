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
import FooterCard from './components/FooterCard'
import { Parallax } from 'react-scroll-parallax';
import { TypeAnimation } from 'react-type-animation';
import { ParallaxBanner, BannerLayer } from 'react-scroll-parallax';
import { about } from './components/FooterCard'
import Navbar from './components/Navbar'

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

  const background = {
    image:
      'ats.png',
    translateY: [0, -10],
    scale: [1.25, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  const foreground = {
    image:
      'rocks.png',
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
        xPercent: -80 * (slides.length),
        ease: 'none',
        scrollTrigger: {
          trigger: horizontalSection.current,
          pin: true,
          start: 'top top',
          end: '+=500%',
          scrub: 0.5,
        },
      });
    }, horizontalSection);
    return () => ctx.revert();
  }, []);

  function changeProject(e) {
    setWhichProject(e.target.alt)
  }

  const Project = () => {
    return (
      <TypeAnimation
        sequence={[
          whichProject
        ]}
        wrapper="span"
        speed={40}
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
        <ParallaxBanner
          layers={[background, foreground, gradientOverlay]}
          className="aspect-[2/1]"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <TextRotator />
          </div>
        </ParallaxBanner>
        <section
          className="horizontal-section"
          ref={horizontalSection}
          style={{backgroundImage: 'url(/underwater2.gif)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}
        >
          <Project id='projects' className='absolute'/>
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
          <section
            className="full-width-image-container horizontal-panel bg">
            <div className='align-text-top'>
              <div className='relative rotate'>
                <Image 
                  onMouseOver={() => changeProject(event)}
                  className='glass-skill rounded-full'
                  src='/sCircle.png'
                  alt='Skills'
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </section>
        </section>    
        <section  
          style={{
            backgroundImage: 'url(/orb.png)', 
            backgroundRepeat: 'no-repeat',
          }}
          className='bg-bottom'
        >
          <div className="full-width-image-container-bottom fade-in">
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
        </section>
      </div>
    </div>
  );
};

export default Scroll;
