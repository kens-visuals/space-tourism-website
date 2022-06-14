import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import NavList from './NavList';

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex justify-center">
      {isNavOpen && <NavList />}

      <div className="w-[88%] max-w-xl">
        <div className="flex w-full items-center justify-between pt-6 ">
          <Link href="/" passHref>
            <Image
              src="/images/shared/logo.svg"
              alt="Space Tourism"
              width={40}
              height={40}
              className="block h-2 w-2"
            />
          </Link>

          {isNavOpen ? (
            <Image
              src="/images/shared/icon-close.svg"
              alt="close"
              width={20}
              height={22}
              className="z-50"
              onClick={() => setIsNavOpen(false)}
            />
          ) : (
            <Image
              src="/images/shared/icon-hamburger.svg"
              alt="hamburger"
              width={24}
              height={21}
              className="z-50"
              onClick={() => setIsNavOpen(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
