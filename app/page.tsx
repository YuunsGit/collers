import Image from "next/image";
import Link from "next/link";

import DecoVideo from "@/components/deco-video";
import Testimonials from "@/components/testimonials";
import Tabs from "@/components/tabs";
import Locations from "@/components/locations";

import WatchIcon from "@/assets/icons/watch.svg";
import HeroIcon1 from "@/assets/icons/hero-icon1.svg";
import HeroIcon2 from "@/assets/icons/hero-icon2.svg";
import HeroIcon3 from "@/assets/icons/hero-icon3.svg";
import ShopIcon from "@/assets/icons/shop.svg";

import sneaker from "@/assets/images/shoe.png";
import product1 from "@/assets/images/products/product1.jpeg";
import product2 from "@/assets/images/products/product2.jpeg";
import product3 from "@/assets/images/products/product3.jpeg";
import check from "@/assets/icons/check.svg?url";
import collection from "@/assets/images/collection.png";

export default function Home() {
  return (
    <main className="text-dark">
      <section className="bg-hero-small md:bg-hero-medium lg:bg-hero-large">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-12 lg:px-20">
          <div className="flex flex-col items-center justify-between gap-x-20 gap-y-8 py-12 text-center lg:flex-row lg:py-20 lg:text-left">
            <div className="space-y-8">
              <h1 className="text-6xl font-bold leading-[110%] xl:text-7xl">
                Collectible Sneakers
              </h1>
              <p className="text-lg">
                Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
                suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum
                ultrices amet.
              </p>
              <div className="flex items-center justify-center gap-x-4 font-medium text-byellow lg:justify-start">
                <Link
                  href=""
                  scroll={false}
                  className="active:bg-bdarkyellow active:border-bdarkyellow inline-block whitespace-nowrap rounded-lg border-2 border-byellow px-7 py-3 text-xl hover:bg-byellow hover:text-white focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-byellow"
                >
                  Sign up now
                </Link>
                <div className="px-2 py-3">
                  <Link
                    href=""
                    scroll={false}
                    className="hover:text-bdarkyellow flex items-center rounded focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-byellow"
                  >
                    <WatchIcon />
                    <span className="whitespace-nowrap px-2">Watch Demo</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative z-10 flex-shrink-0">
              <div className="absolute bottom-0 left-0 right-0 -z-10 mx-auto h-[88%] w-[80%] rounded-[50px] bg-[#FBBF24]" />
              <Image
                src={sneaker}
                priority
                alt="Sneaker"
                height={0}
                width={0}
                quality={100}
                className="mb-9 h-auto w-[360px] xl:w-[486px]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-x-20 gap-y-8 py-12 text-center md:flex-row md:text-left lg:py-20">
            <div className="space-y-2.5">
              <HeroIcon1 className="mx-auto md:mx-0" />
              <h3 className="text-xl font-medium">Nibh viverra</h3>
              <p className="text-lg">
                Sit bibendum donec dolor fames neque vulputate non sit aliquam.
                Consequat turpis natoque leo, massa.
              </p>
            </div>
            <div className="space-y-2.5">
              <HeroIcon2 className="mx-auto md:mx-0" />
              <h3 className="text-xl font-medium">Cursus amet</h3>
              <p className="text-lg">
                Sit bibendum donec dolor fames neque vulputate non sit aliquam.
                Consequat turpis natoque leo, massa.
              </p>
            </div>
            <div className="space-y-2.5">
              <HeroIcon3 className="mx-auto md:mx-0" />
              <h3 className="text-xl font-medium">Ipsum fermentum</h3>
              <p className="text-lg">
                Sit bibendum donec dolor fames neque vulputate non sit aliquam.
                Consequat turpis natoque leo, massa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark text-white">
        <div className="mx-auto max-w-screen-2xl space-y-8 overflow-hidden px-4 py-12 sm:px-12 lg:space-y-20 lg:px-20 lg:py-20">
          <div className="flex w-full flex-col items-center justify-between gap-y-8 md:flex-row">
            <h2 className="z-20 text-3xl font-bold lg:text-6xl lg:font-extrabold">
              The best of the best
            </h2>
            <Link
              href=""
              scroll={false}
              className="whitespace-nowrap rounded-lg border-2 border-white px-12 py-5 text-2xl font-bold leading-none hover:bg-white hover:text-dark focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:border-slate-200 active:bg-slate-200"
            >
              Sign up now
            </Link>
          </div>
          <div className="relative z-10 flex flex-col gap-x-12 gap-y-8 lg:flex-row">
            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[108%] -translate-x-1/2 -translate-y-1/2 bg-[url('/backlights-mobile.svg')] bg-contain bg-center bg-no-repeat lg:bg-[url('/backlights.svg')]" />
            <div className="overflow-hidden rounded-[10px] border border-dark bg-dark shadow-product">
              <div className="relative h-56">
                <Image
                  src={product1}
                  alt="Product 1"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  placeholder="blur"
                />
              </div>
              <div className="space-y-4 p-8 pb-0">
                <h3 className="text-2xl font-bold">Title</h3>
                <p className="text-lg">
                  Egestas elit dui scelerisque ut eu purus aliquam vitae
                  habitasse.
                </p>
              </div>
              <Link
                href=""
                scroll={false}
                className="m-8 flex items-center justify-center rounded-lg border-2 border-white p-4 text-xl font-medium  hover:bg-white hover:text-dark focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:border-slate-200 active:bg-slate-200"
              >
                <ShopIcon />
                <span className="px-4">Buy now</span>
              </Link>
            </div>
            <div className="overflow-hidden rounded-[10px] border border-dark bg-dark shadow-product">
              <div className="relative h-56">
                <Image
                  src={product2}
                  alt="Product 2"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  placeholder="blur"
                />
              </div>
              <div className="space-y-4 p-8 pb-0">
                <h3 className="text-2xl font-bold">Title</h3>
                <p className="text-lg">
                  Egestas elit dui scelerisque ut eu purus aliquam vitae
                  habitasse.
                </p>
              </div>
              <Link
                href=""
                scroll={false}
                className="m-8 flex items-center justify-center rounded-lg border-2 border-white p-4 text-xl font-medium  hover:bg-white hover:text-dark focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:border-slate-200 active:bg-slate-200"
              >
                <ShopIcon />
                <span className="px-4">Buy now</span>
              </Link>
            </div>
            <div className="overflow-hidden rounded-[10px] border border-dark bg-dark shadow-product">
              <div className="relative h-56">
                <Image
                  src={product3}
                  alt="Product 3"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  placeholder="blur"
                />
              </div>
              <div className="space-y-4 p-8 pb-0">
                <h3 className="text-2xl font-bold">Title</h3>
                <p className="text-lg">
                  Egestas elit dui scelerisque ut eu purus aliquam vitae
                  habitasse.
                </p>
              </div>
              <Link
                href=""
                scroll={false}
                className="m-8 flex items-center justify-center rounded-lg border-2 border-white p-4 text-xl font-medium  hover:bg-white hover:text-dark focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:border-slate-200 active:bg-slate-200"
              >
                <ShopIcon />
                <span className="px-4">Buy now</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-screen-2xl overflow-hidden px-4 py-4 pb-14 sm:px-12 lg:px-20 lg:py-40 lg:pb-40">
          <div className="mx-auto flex w-fit flex-col items-center justify-between gap-x-20 gap-y-8 rounded-[30px] bg-transparent px-4 py-8 shadow-join-us lg:flex-row lg:bg-white lg:px-20 lg:py-20">
            <div className="z-10 space-y-6">
              <h2 className="text-center text-3xl font-bold lg:text-left lg:text-6xl lg:font-extrabold">
                Why join us
              </h2>
              <ul
                style={{
                  listStyleImage: `url(${check.src})`,
                  paddingInlineStart: "2rem",
                }}
                className="text-base leading-6 lg:text-xl lg:leading-9"
              >
                <li>Est et in pharetra magna adipiscing ornare aliquam.</li>
                <li>Tellus arcu sed consequat ac velit ut eu blandit.</li>
                <li>Ullamcorper ornare in et egestas dolor orci.</li>
              </ul>
              <Link
                href=""
                scroll={false}
                className="active:bg-bdarkyellow active:border-bdarkyellow inline-block whitespace-nowrap rounded-lg border-2 border-byellow px-7 py-3 text-xl text-byellow hover:bg-byellow hover:text-white focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-byellow"
              >
                Sign up now
              </Link>
            </div>
            <div className="relative z-0 overflow-visible sm:w-[330px] lg:w-auto">
              <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[180%] max-w-[924px] -translate-x-1/2 -translate-y-1/2 bg-[url('/video-background.svg')] bg-cover" />
              <DecoVideo className="h-auto max-w-full overflow-visible rounded-[20px] shadow-video" />
              <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 size-[180%] max-w-[924px] -translate-x-1/2 -translate-y-1/2 bg-[url('/video-foreground.svg')] bg-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[url(/waves.svg)] bg-[length:300%_auto] bg-left-bottom bg-no-repeat sm:bg-[length:100%_auto] sm:bg-bottom">
        <Testimonials />

        <div className="mx-auto max-w-screen-2xl space-y-8 px-4 py-12 pb-24 sm:space-y-20 sm:px-12 sm:pb-32 lg:px-20 lg:py-20">
          <div className="space-y-2 text-center sm:space-y-8 sm:text-left">
            <h2 className="mx-auto text-3xl font-bold sm:mx-0 lg:text-6xl lg:font-extrabold">
              Grow your collection
            </h2>
            <p className="text-lg">
              Enim neque massa porta adipiscing elit. Sem libero id faucibus
              nibh amet dictum pellentesque sed. Eu non turpis risus odio
              sapien, fames sit rhoncus. Nec magna sed interdum sit purus
              tellus. Et volutpat proin neque placerat at bibendum quam tellus.
            </p>
          </div>
          <div className="flex flex-col justify-between gap-x-20 gap-y-8 lg:flex-row ">
            <Tabs />
            <div>
              <Image
                src={collection}
                alt="Sneaker collection"
                height={556}
                width={944}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-byellow">
        <Locations />
      </section>
    </main>
  );
}
