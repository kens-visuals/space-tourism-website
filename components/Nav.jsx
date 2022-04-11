import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ['Home', 'Destination', 'Crew', 'Technology'];

  const menuDisplay = menuItems.map((item, index) => (
    <li
      className="mb-4 flex items-center justify-start  gap-4 font-barlow-condensed tracking-tertiary"
      key={item}
    >
      <span className="w-4 font-bold text-tertiary">0{index}</span>
      <Link href={`${item === 'Home' ? '/' : `/${item.toLowerCase()}`}`}>
        <a className="font-base text-lg font-thin uppercase text-tertiary">
          {item}
        </a>
      </Link>
    </li>
  ));

  return (
    <React.Fragment>
      {isOpen && (
        <div className="shadow-5xl absolute right-0 h-screen w-3/4 bg-white bg-opacity-10 backdrop-blur-[20px] backdrop-filter">
          <nav>
            <ul className="mt-40 ml-10">{menuDisplay}</ul>
          </nav>
        </div>
      )}

      <div className="w-11/12 max-w-xl">
        <div className="flex w-full items-center justify-between pt-6 ">
          <Image
            src="/images/shared/logo.svg"
            alt="Space Tourism"
            width={40}
            height={40}
            className="block h-2 w-2"
          />

          {isOpen ? (
            <Image
              src="/images/shared/icon-close.svg"
              alt="close"
              width={20}
              height={22}
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <Image
              src="/images/shared/icon-hamburger.svg"
              alt="hamburger"
              width={24}
              height={21}
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
