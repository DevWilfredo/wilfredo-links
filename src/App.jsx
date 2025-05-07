
import React from 'react';
import SocialMediaBox from './components/SocialMediaBox';
import TechnologyBox from './components/TechnologyBox';
import { socialMedia } from './data/socialMedia';
import { technologies } from './data/technologies';

const App = () => {
  return (
    <main className='animate-pulse-fade-in'>
      <header className="text-white flex flex-col items-center justify-center gap-5 p-4">
        <img src="/wilfredo2.png" alt="wilfredoDev" className="h-[50vh] object-cover mask-radial-at-center mask-radial-from-45% mask-radial-to-80% " />
        <div className='flex flex-col justify-center items-center -mt-4'>
          <span className='text-sky-400 text-xl font-mono px-3 py-1 border border-sky-500/50 rounded-full shadow-sm flex items-center justify-center bg-black/65 cursor-crosshair '>
            @wilfredoDev
            <svg class="ml-1 w-5 h-5 text-sky-400 inline" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707a1 1 0 00-1.414-1.414L9 11.172l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd" />
            </svg>
          </span>
          <h1 className='text-3x1 font-extrabold leading-tight mt-1'>
            Wilfredo Pinto Mata
          </h1>
        </div>
        <section className="flex gap-3 justify-center items-center ">
          {socialMedia.map((item) => (
            <SocialMediaBox
              key={item.iconId}
              iconId={item.iconId}
              backgroundColor={item.backgroundColor}
              link={item.link}
            />
          ))}
        </section>
        <p className="max-w-2xl text-center text-white px-4 leading-relaxed">
          Desarrollador FullStack con experiencia en React, Node.js, Tailwind CSS y tecnologías modernas para construir interfaces elegantes, APIs robustas y experiencias de usuario excepcionales.
        </p>
      </header>
      <div className="pt-4 text-white pb-6">
        <h1 className='text-3x1 font-extrabold leading-tight mt-1 flex justify-center items-center'>
          Tecnologias
        </h1>
        <div className='flex gap-2 items-center justify-center mt-2'>
          {technologies.map((technolgy) => (
            <TechnologyBox backgroundColor={technolgy.gradient} iconId={technolgy.iconId} />
          ))}
        </div>
        <div className='flex gap-2 items-center justify-center mt-2'>
          <button className={`bg-gradient-to-tl from-[#dac617] via-[#e4d729] to-white p-2 size-12 sm:size:16 flex items-center justify-center 
        rounded-full hover:scale-105 transition-all cursor-pointer`}
            title='Go to social media'>
            <img src={'tech-logos/javascript.svg'} alt="" />
          </button>
          <button className={`bg-gradient-to-tl from-cyan-900 via-cyan-700 to-cyan-500 p-2 size-12 sm:size:16 flex items-center justify-center 
        rounded-full hover:scale-105 transition-all cursor-pointer`}
            title='Go to social media'>
            <img src={'tech-logos/tailwindcss.svg'} alt="" />
          </button>
          <button className={`bg-gradient-to-tl from-gray-600 via-gray-400 to-white p-2 size-12 sm:size:16 flex items-center justify-center 
        rounded-full hover:scale-105 transition-all cursor-pointer`}
            title='Go to social media'>
            <img src={'tech-logos/express-js.svg'} alt="" />
          </button>
        </div>
      </div>
    </main>
  )
}

export default App