import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

// Components
import Nav from '../components/Nav';
import Paragraph from '../components/Paragraph';
import PageTitle from '../components/PageTitle';

// Assets
import DATA from '../data.json';

export default function Technology() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const technologies = DATA.technology;
  const currentTechData = technologies[selectedIndex];

  const circlesDisplay = technologies.map((_, idx) => (
    <button
      key={idx}
      type="button"
      onClick={() => setSelectedIndex(idx)}
      className={`aspect-square w-28 rounded-full  ${
        idx === selectedIndex
          ? 'bg-tertiary'
          : 'border border-secondary/30 bg-transparent text-tertiary/70'
      }`}
    >
      {idx + 1}
    </button>
  ));

  return (
    <div>
      <Head>
        <title>Space Tourism | Crew</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-technology-mobile bg-cover bg-center bg-no-repeat md:bg-technology-tablet lg:bg-technology-desktop">
        <Nav />

        <main className="mx-auto flex w-full max-w-md flex-col items-center justify-center py-7">
          <PageTitle num="03" title="Space launch 101" />

          <div className="relative mt-8 w-full">
            <Image
              src={currentTechData.images.landscape}
              alt="human"
              width={374}
              height={170}
              layout="responsive"
            />
          </div>

          <div className="flex w-[87%] flex-col items-center justify-center">
            <div className="my-8 flex w-[70%] items-center justify-between gap-4 px-10">
              {circlesDisplay}
            </div>

            <span className="font-barlow-condensed text-subheading-2 uppercase tracking-secondary text-secondary">
              The terminology...
            </span>

            <h1 className="mt-1 mb-4 text-subheading-3 uppercase text-tertiary">
              {currentTechData.name}
            </h1>

            <Paragraph>{currentTechData.description}</Paragraph>
          </div>
        </main>
      </div>
    </div>
  );
}
