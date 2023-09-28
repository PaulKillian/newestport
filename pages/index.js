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

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const fcc = 'https://gorgeous-rolypoly-35d7d5.netlify.app'
const fbgUrl = 'https://fiduciarybenefitsgroup.com'
const cvUrl = 'https://cvupgrade.com'
const arrowUrl = 'https://arrowheadtreeservices.com'
const smsUrl = 'https://stocksmsalert.com'




const Scroll = () => {
  const horizontalSection = useRef();
  const project = useRef();

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray('.horizontal-panel');
      gsap.to(slides, {
        xPercent: -200 * (slides.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: horizontalSection.current,
          pin: true,
          start: 'top top',
          end: '+=300%',
          scrub: 0.5,
        },
      });
      
      // gsap.to('.img', {
      //   y: '-100px',
      //   duration: 3,
      //   scrollTrigger: {
      //     trigger: project.current,
      //     start: 'top center', // The trigger point for the animation
      //     end: 'bottom center', // The end point for the animation
      //     scrub: true, // Smoothly scrub through values as you scroll
      //   },
      // })
    }, horizontalSection);
    return () => ctx.revert();
  }, []);

  function spaNavigate(data) {
    // Fallback for browsers that don't support this API:
    if (!document.startViewTransition) {
      setIframe(true);
      return;
    }
  
    // With a transition:
    document.startViewTransition(() => setIframe(true));
  }

const postVariants = {
  initial: { scale: 0.96, y: 30, opacity: 0 },
  enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] } },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
  }
};

  return (
    <div>
      <Head>
        <title>GSAP Horizontal Scroll NextJS</title>
        <meta
          name="description"
          content="Horiontal scroll using ScrollTrigger in a NextJS app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
          <div>
            <div className="full-width-image-container">
              {/* <div >
                <Image
                  src="/main2.png" // Path to your image in the public folder
                  alt="Full Width Image"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // This makes the image take the full width and height of its container
                />
              </div> */}
              <div className='z-1'>
                <h1 className='text-xl bg-gray-200 p-1 w-auto text-indigo-500'>PAUL KILLIAN</h1>
                <p>A UI designer and front-end React developer</p>
              </div>
            </div>
            <section
              className="horizontal-section"
              ref={horizontalSection}>
               <div className="horizontal-panel">
                <Card img={'/fox1.png'} url={fcc}/>
                <Card img={'/fbg.png'} url={fbgUrl} />
               </div>
               <div className="horizontal-panel">
                <Card img={'/tree.png'} url={arrowUrl}/>
                <Card img={'/pea.png'} url={cvUrl} />
               </div>
               <div className="horizontal-panel">
                <Card img={'/sms.png'} url={smsUrl}/>
                <Card img={'/cst.png'} url={smsUrl} />
               </div>
              </section>
            <section className="gray"></section>
          </div>
    </div>
  );
};

export default Scroll;
