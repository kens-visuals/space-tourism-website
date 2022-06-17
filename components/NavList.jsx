import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavList() {
  const router = useRouter();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Destination', path: '/destination' },
    { name: 'Crew', path: '/crew' },
    { name: 'Technology', path: '/technology' },
  ];

  const navItems = navigation.map((nav, index) => (
    <li
      key={nav.name}
      className={`mb-4 flex items-center justify-start gap-4 font-barlow-condensed tracking-tertiary md:m-0 md:pb-10 ${
        router.pathname === nav.path
          ? 'border-r-4 border-tertiary md:border-0 md:border-b-4'
          : 'border-r-4 border-transparent md:border-0 md:border-b-4'
      }`}
    >
      <span className="w-4 font-bold text-tertiary md:hidden">0{index}</span>
      <Link href={nav.path}>
        <a className={`font-base text-base font-thin uppercase text-tertiary`}>
          {nav.name}
        </a>
      </Link>
    </li>
  ));

  return (
    <nav className="shadow-5xl absolute right-0 z-50 h-screen w-3/4 bg-white bg-opacity-10 backdrop-blur-[20px] backdrop-filter   md:static md:top-0 md:flex md:h-auto md:w-full md:items-center md:px-14 md:pt-10">
      <ul className="mt-40 ml-10 md:m-0 md:flex md:gap-8">{navItems}</ul>
    </nav>
  );
}
