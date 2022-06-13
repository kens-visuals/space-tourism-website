import Link from 'next/link';

export default function NavList() {
  const navigation = [
    { name: 'Home', route: '/' },
    { name: 'Destination', route: '/destination' },
    { name: 'Crew', route: '/crew' },
    { name: 'Technology', route: '/technology' },
  ];

  const navItems = navigation.map((nav, index) => (
    <li
      key={nav.name}
      className="mb-4 flex items-center justify-start gap-4 font-barlow-condensed tracking-tertiary"
    >
      <span className="w-4 font-bold text-tertiary">0{index}</span>
      <Link href={nav.route}>
        <a className="font-base text-lg font-thin uppercase text-tertiary">
          {nav.name}
        </a>
      </Link>
    </li>
  ));

  return (
    <div className="shadow-5xl absolute right-0 z-50 h-screen w-3/4 bg-white bg-opacity-10 backdrop-blur-[20px] backdrop-filter">
      <nav>
        <ul className="mt-40 ml-10">{navItems}</ul>
      </nav>
    </div>
  );
}
