import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

// Components
import Nav from '../components/Nav';

export default function Home() {
  return (
    <div className="min-h-screen bg-home-mobile bg-cover bg-no-repeat">
      <Head>
        <title>Space Tourism | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-center">
        <Nav />
      </div>

      <main className="flex justify-center">
        <div className="mt-12 flex flex-col items-center justify-center gap-4 ">
          <span className="text-center font-barlow-condensed text-base tracking-primary text-secondary">
            SO, YOU WANT TO TRAVEL TO
          </span>
          <h1 className="text-heading-2 uppercase text-tertiary">Space</h1>
          <p className="px-2 text-center font-barlow text-paragraph text-secondary">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>

          <button
            type="button"
            className="mt-20 h-[9.375rem] w-[9.375rem] justify-self-end rounded-full bg-tertiary text-xl uppercase tracking-tertiary transition-all duration-300 hover:shadow-[0px_0px_0px_50px_rgba(255,255,255,0.1)]"
          >
            Explore
          </button>
        </div>
      </main>
    </div>
  );
}
