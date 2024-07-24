import React from 'react';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div className='h-screen w-full dark:bg-black bg-white  relative flex items-center justify-center'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <p className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
            Dynamic Web Magic with Next.js
          </p>

          <TextGenerateEffect
            words='Transforming Concepts into Seamless User Experiences'
            className='text-center text-[40px] md:text-5xl lg:text-6xl'
          />

          <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
            Hi! I&apos;m Adrian, a Next.js Developer based in Croatia.
          </p>

          <a href='#about'>
            <MagicButton
              title='Show my work'
              icon={<FaLocationArrow />}
              position='right'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
