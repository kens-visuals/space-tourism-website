import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Tab } from '@headlessui/react';

// Components
import Nav from '../components/Nav';

// assets
import DATA from '../data.json';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Destination() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const dataDisplay = DATA.destinations.map((el) => (
    <Tab.Group
      key={el.name}
      selectedIndex={selectedIndex}
      // onChange={setSelectedIndex}
      onChange={(index) => {
        console.log('Changed selected tab to:', index);
      }}
    >
      <Tab.List>
        <Tab className="font-barlow text-nav text-secondary">{el.name}</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <Image
            src={`${el.images.png}`}
            alt={el.name}
            width={50}
            height={50}
          />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  ));

  // let [categories] = useState({
  //   Recent: [
  //     {
  //       id: 1,
  //       title: 'Does drinking coffee make you smarter?',
  //       date: '5h ago',
  //       commentCount: 5,
  //       shareCount: 2,
  //     },
  //     {
  //       id: 2,
  //       title: "So you've bought coffee... now what?",
  //       date: '2h ago',
  //       commentCount: 3,
  //       shareCount: 2,
  //     },
  //   ],
  //   Popular: [
  //     {
  //       id: 1,
  //       title: 'Is tech making coffee better or worse?',
  //       date: 'Jan 7',
  //       commentCount: 29,
  //       shareCount: 16,
  //     },
  //     {
  //       id: 2,
  //       title: 'The most innovative things happening in coffee',
  //       date: 'Mar 19',
  //       commentCount: 24,
  //       shareCount: 12,
  //     },
  //   ],
  //   Trending: [
  //     {
  //       id: 1,
  //       title: 'Ask Me Anything: 10 answers to your questions about coffee',
  //       date: '2d ago',
  //       commentCount: 9,
  //       shareCount: 5,
  //     },
  //     {
  //       id: 2,
  //       title: "The worst advice we've ever heard about coffee",
  //       date: '4d ago',
  //       commentCount: 1,
  //       shareCount: 2,
  //     },
  //   ],
  // });

  return (
    <div className="min-h-screen bg-home-mobile bg-cover bg-no-repeat md:bg-home-tablet lg:bg-home-desktop">
      <Head>
        <title>Space Tourism | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className="flex flex-col items-center justify-center">
        <div className="mt-6 flex items-center gap-4">
          <span className="font-barlow-condensed font-bold tracking-secondary text-tertiary opacity-50">
            01
          </span>
          <span className="font-barlow-condensed text-lg uppercase tracking-tertiary text-tertiary">
            Pick your destination
          </span>
        </div>

        {dataDisplay}
        {/* <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white shadow'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  'rounded-xl bg-white p-3',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                )}
              >
                <ul>
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className="hover:bg-coolGray-100 relative rounded-md p-3"
                    >
                      <h3 className="text-sm font-medium leading-5">
                        {post.title}
                      </h3>

                      <ul className="text-coolGray-500 mt-1 flex space-x-1 text-xs font-normal leading-4">
                        <li>{post.date}</li>
                        <li>&middot;</li>
                        <li>{post.commentCount} comments</li>
                        <li>&middot;</li>
                        <li>{post.shareCount} shares</li>
                      </ul>

                      <a
                        href="#"
                        className={classNames(
                          'absolute inset-0 rounded-md',
                          'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                        )}
                      />
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group> */}
      </main>
    </div>
  );
}
