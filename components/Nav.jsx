import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// components
import NavList from './NavList';

// hooks
import useWindowSize from '../hooks/useWindowSize';

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { windowDimension } = useWindowSize();

  console.log(windowDimension);

  return (
    <div className="flex justify-center">
      {isNavOpen && <NavList />}
      {windowDimension.winWidth >= 768 && <NavList />}

      <div className="w-[88%] max-w-3xl">
        <div className="flex w-full items-center justify-between pt-6 ">
          <Link href="/" passHref>
            <div className="relative w-9 cursor-pointer md:w-12">
              <Image
                src="/images/shared/logo.svg"
                alt="Space Tourism"
                width={200}
                height={200}
                layout="responsive"
              />
            </div>
          </Link>

          {isNavOpen ? (
            <div className="md:hidden">
              <Image
                src="/images/shared/icon-close.svg"
                alt="close"
                width={20}
                height={22}
                className="z-50"
                onClick={() => setIsNavOpen(false)}
              />
            </div>
          ) : (
            <div className="md:hidden">
              <Image
                src="/images/shared/icon-hamburger.svg"
                alt="hamburger"
                width={24}
                height={21}
                className="z-50"
                onClick={() => setIsNavOpen(true)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
