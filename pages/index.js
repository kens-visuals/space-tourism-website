import Head from 'next/head';
import Link from 'next/link';

// Components
import Nav from '../components/Nav';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Space Tourism | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative min-h-screen w-screen bg-home-mobile bg-cover bg-no-repeat md:bg-home-tablet lg:bg-home-desktop">
        <Nav />

        <main className="flex justify-center">
          <div className="mt-12 flex max-w-lg flex-col items-center justify-center gap-4 ">
            <span className="text-center font-barlow-condensed text-base tracking-primary text-secondary">
              SO, YOU WANT TO TRAVEL TO
            </span>
            <h1 className="text-heading-2 uppercase text-tertiary">Space</h1>
            <p className="px-6 text-center font-barlow text-paragraph text-secondary">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>

            <Link href="/destination" passHref>
              <button
                type="button"
                className="mt-20 h-[9.375rem] w-[9.375rem] justify-self-end rounded-full bg-tertiary text-xl uppercase tracking-tertiary transition-all duration-300 hover:shadow-[0px_0px_0px_50px_rgba(255,255,255,0.1)]"
              >
                Explore
              </button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
