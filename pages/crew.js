import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

// Components
import Nav from '../components/Nav';
import Paragraph from '../components/Paragraph';
import PageTitle from '../components/PageTitle';

// Assets
import DATA from '../data.json';

export default function Crew() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const crew = DATA.crew;
  const currentCrewData = crew[selectedIndex];

  const circlesDisplay = crew.map((_, idx) => (
    <button
      key={idx}
      type="button"
      onClick={() => setSelectedIndex(idx)}
      className={`aspect-square w-3 rounded-full ${
        idx === selectedIndex ? 'bg-tertiary' : 'bg-secondary/50'
      }`}
    ></button>
  ));

  return (
    <div>
      <Head>
        <title>Space Tourism | Crew</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-crew-mobile bg-cover bg-no-repeat md:bg-crew-tablet lg:bg-crew-desktop">
        <Nav />

        <main className="mx-auto flex w-[87%] max-w-md flex-col items-center justify-center py-7">
          <PageTitle num="02" title="Meet your crew" />

          <div className="relative mt-8 w-[60%]">
            <Image
              src={currentCrewData.images.png}
              alt="human"
              width={currentCrewData.images.width}
              height={currentCrewData.images.height}
              layout="responsive"
            />
          </div>

          <div className="my-8 flex w-[55%] items-center justify-between gap-4 px-10">
            {circlesDisplay}
          </div>

          <span className="text-subheading-2 uppercase text-tertiary/50">
            {currentCrewData.role}
          </span>

          <h1 className="mb-4 text-subheading-3 uppercase text-tertiary">
            {currentCrewData.name}
          </h1>

          <Paragraph>{currentCrewData.bio}</Paragraph>
        </main>
      </div>
    </div>
  );
}
