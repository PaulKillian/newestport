'use client'
import { useRef, useState } from 'react';
import Head from 'next/head';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import {Image} from "@nextui-org/react";
import useIsomorphicLayoutEffect from './helpers/isomorphicLayout';
import Link from 'next/link';
import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";
import cst from '/public/cst.png'
import cst1 from '/public/cst1.png'
import tree from '/public/tree.png'
import sms from '/public/sms.png'
import fbg from '/public/fbg.png'
import fox from '/public/fox1.png'
import peacock from '/public/pea.png'
import Card from './components/Card';
import { Parallax, useParallax } from 'react-scroll-parallax';
//
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const fcc = 'https://gorgeous-rolypoly-35d7d5.netlify.app'
const fbgUrl = 'https://fiduciarybenefitsgroup.com/'
const cstUrl = 'https://poetic-khapse-3a8b7b.netlify.app/'
const arrowUrl = 'https://arrowheadtreeservices.com'
const smsUrl = 'https://stocksmsalert.com/'
const cst1Url = 'https://celebrated-paprenjak-3b3a4c.netlify.app/'

const Scroll = () => {
  const horizontalSection = useRef();
  const project = useRef();
  const contact = useRef();

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray('.horizontal-panel');
      gsap.to(slides, {
        xPercent: -140 * (slides.length - 1),
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
          <div className='overflow-x-hidden'>
            <div style={{backgroundImage: 'url(/space.png)'}} 
              className="full-width-image-container flex">
              <h1 className='text-6xl text-stone-50 z-10'>Paul Killian</h1>
              <Parallax translateY={['400px', '-200px']}>
                <Image
                  className='ast'
                  src="/as2.png" // Path to your image in the public folder
                  alt="Full Width Image"
                  width={700}
                  height={400}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // This makes the image take the full width and height of its container
                />
              </Parallax>
              <div className='flex flex-col'>
                <div className=''>
                  <h1 className='text-6xl text-stone-50'>Designer</h1>
                  <h1 className='text-6xl text-stone-50'>Developer</h1>
                </div>
              </div>
            </div>
            <section
              className="horizontal-section bg-stone-50"
              ref={horizontalSection}>
              <h2 className="horizontal-panel">Projects</h2>
              <div className="horizontal-panel">
                <Card name='The Fox, Chicken and Corn' img={'/fox.png'} url={fcc} imgOp={'/chkinBottom2.png'}/>
                <Card name='Fiduciary Benefits Group' img={'/fbg.png'} url={fbgUrl} imgOp={'/fbgBottom1.png'}/>
              </div>
              <div className="horizontal-panel">
                <Card name='Arrowhead Tree Service' img={'/tree.png'} url={arrowUrl} imgOp={'/arbBottom1.png'}/>
                <Card name='Stock SMS Alert' img={'/sms.png'} url={smsUrl} imgOp={'/smsBottom1.png'}/>
              </div>
              <div className="horizontal-panel">
                <Card name='Customer Service Tool' img={'/cst.png'} url={cstUrl} imgOp={'/cstBottom2.png'}/>
                <Card name='Data Entry Tool' img={'/cst1.png'} url={cst1Url} imgOp={'/dataBottom1.png'}/>
              </div>
            </section>
            <section style={{backgroundImage: 'url(/aspacee.png)'}} 
              className="flex justify-center flex-wrap items-center full-width-image-container-bottom">
                <div className="flex justify-between items-center">
                  <div className='contact absolute' ref={contact}>
                    <Parallax translateY={['-200px', '150px']}>
                      <h1 className='text-6xl text-stone-50 email'><a href='mailto:psk65lava@gmail.com'>Email</a></h1>
                    </Parallax>
                    <Parallax translateY={['-200px', '200px']}>
                      <h1 className='text-6xl text-stone-50 linked'><a href='https://www.linkedin.com/in/paul-killian/'>LinkedIn</a></h1>
                    </Parallax>
                    <Parallax translateY={['-200px', '300px']}>
                      <h1 className='text-6xl text-stone-50 github'><a href='https://www.github.com/PaulKillian'>Github</a></h1>               
                    </Parallax>  
                  </div>                          
              </div>
            </section>
          </div>
    </div>
  );
};

export default Scroll;
