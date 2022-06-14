import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

// Components
import Nav from '../components/Nav';
import Paragraph from '../components/Paragraph';

// assets
import DATA from '../data.json';

export default function Destination() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const destinations = DATA.destinations;
  const travelDetails = [
    {
      name: 'Avg. Distance',
      value: destinations[selectedIndex].distance,
    },
    {
      name: 'Est. Travel Time',
      value: destinations[selectedIndex].travel,
    },
  ];

  const travelDetailsDisplay = travelDetails.map((detail) => (
    <div
      key={detail.name}
      className="flex flex-col items-center justify-center gap-1"
    >
      <span className="font-barlow-condensed text-subheading-2 uppercase tracking-secondary text-secondary">
        {detail.name}
      </span>
      <span className="font-bellefair text-subheading-1 uppercase text-tertiary">
        {detail.value}
      </span>
    </div>
  ));

  const destiantionNames = destinations.map((el, idx) => (
    <button
      key={el.name}
      type="button"
      onClick={() => setSelectedIndex(idx)}
      className={`text-center font-barlow-condensed text-nav uppercase tracking-tertiary text-secondary after:mt-2 after:block after:h-1 after:w-full ${
        idx === selectedIndex
          ? 'text-tertiary  after:bg-white'
          : 'text-secondary'
      }`}
    >
      {el.name}
    </button>
  ));

  return (
    <div>
      <Head>
        <title>Space Tourism | Destinations</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-destination-mobile bg-cover bg-no-repeat md:bg-destination-tablet lg:bg-destination-desktop">
        <Nav />

        <main className="mx-auto flex w-[87%] max-w-md flex-col items-center justify-center py-7">
          <div className="flex items-center gap-4">
            <span className="font-barlow-condensed text-nav font-bold tracking-secondary text-tertiary opacity-50">
              01
            </span>
            <span className="font-barlow-condensed text-nav uppercase tracking-tertiary text-tertiary">
              Pick your destination
            </span>
          </div>

          <div className="relative mt-8 w-1/2">
            <Image
              src={destinations[selectedIndex].images.png}
              alt="planet"
              width={200}
              height={200}
              layout="responsive"
            />
          </div>

          <div>
            <div className="mt-7 flex w-full items-center justify-between px-10 ">
              {destiantionNames}
            </div>

            <h1 className="mt-5 text-center font-bellefair text-heading-4 uppercase text-tertiary">
              {destinations[selectedIndex].name}
            </h1>

            <Paragraph>{destinations[selectedIndex].description}</Paragraph>

            <div className="my-8 h-[1px] w-full bg-quaternary"></div>

            <div className="flex flex-col items-center justify-center gap-6">
              {travelDetailsDisplay}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
