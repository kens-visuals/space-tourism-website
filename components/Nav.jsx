import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// components
import NavList from './NavList';

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex justify-center">
      <div className="md:hidden">{isNavOpen && <NavList />}</div>

      <div className="w-[88%] md:grid md:w-full md:grid-cols-3 md:items-center lg:grid-cols-6">
        <div className="flex w-full items-center justify-between pt-6 md:p-0">
          <Link href="/" passHref>
            <div className="relative w-9 cursor-pointer md:ml-12 md:w-12">
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

        <div className="hidden md:col-span-2 md:inline-block lg:col-start-4 lg:col-end-7">
          <NavList />
        </div>
      </div>
    </div>
  );
}
