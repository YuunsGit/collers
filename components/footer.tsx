import Link from "next/link";
import Image from "next/image";

import googlePlay from "@/assets/images/google-play.png";
import appStore from "@/assets/images/app-store.png";

import YouTubeIcon from "@/assets/icons/youtube.svg";
import FacebookIcon from "@/assets/icons/facebook.svg";
import TwitterIcon from "@/assets/icons/twitter.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
import LinkedInIcon from "@/assets/icons/linkedin.svg";
import GlobeIcon from "@/assets/icons/globe.svg";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-[#E2E8F0]">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-12 md:px-20">
        <div className="grid grid-cols-1 gap-12 border-b border-[#334155] py-12 text-center sm:grid-cols-2 sm:text-left md:grid-cols-4">
          <div className="space-y-6 py-6">
            <h3 className="text-white">Product</h3>
            <ul className="space-y-6">
              <li>
                <Link href="" scroll={false}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="" scroll={false}>
                  Overview
                </Link>
              </li>
              <li>
                <Link href="" scroll={false}>
                  Browse
                </Link>
              </li>
              <li>
                <Link href="" scroll={false}>
                  Accessibility
                </Link>
              </li>
              <li>
                <Link href="" scroll={false}>
                  Five
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-6 py-6">
            <h3 className="text-white">Solutions</h3>
            <ul className="space-y-6">
              <li>
                <Link href="" scroll={false}>
                  Brainstorming
                </Link>
              </li>
              <li>
                <Link href="" scroll={false}>
                  Ideation
                </Link>
              </li>
              <li>
                <Link href="" scroll={false}>
                  Wireframing
                </Link>
              </li>
              <li>
                <Link href="" scroll={false}>
                  Research
                </Link>
              </li>
              <li>
                <Link href="" scroll={false}>
                  Design
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-6 py-6">
            <h3 className="text-white">Support</h3>
            <ul className="space-y-6">
              <li>
                <Link href="" scroll={false}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="" scroll={false}>
                  Developers
                </Link>
              </li>
              <li>
                <Link href="" scroll={false}>
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="" scroll={false}>
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="" scroll={false}>
                  Reports
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-6 py-6">
            <h3 className="text-white">Get the App</h3>
            <div className="mx-auto space-y-4 sm:mx-0">
              <Link href="" scroll={false} className="block">
                <Image
                  src={appStore}
                  quality={100}
                  alt="App Store logo"
                  className="mx-auto sm:mx-0"
                />
              </Link>
              <Link href="" scroll={false} className="block">
                <Image
                  src={googlePlay}
                  quality={100}
                  alt="Google Play Store logo"
                  className="mx-auto sm:mx-0"
                />
              </Link>
            </div>
            <div className="mx-auto mt-auto space-y-4 pt-12 sm:mx-0 sm:pt-0">
              <h5>Follow Us</h5>
              <ul className="flex gap-x-4">
                <li>
                  <Link href="" scroll={false}>
                    <YouTubeIcon />
                  </Link>
                </li>
                <li>
                  <Link href="" scroll={false}>
                    <FacebookIcon />
                  </Link>
                </li>
                <li>
                  <Link href="" scroll={false}>
                    <TwitterIcon />
                  </Link>
                </li>
                <li>
                  <Link href="" scroll={false}>
                    <InstagramIcon />
                  </Link>
                </li>
                <li>
                  <Link href="" scroll={false}>
                    <LinkedInIcon />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-between gap-y-6 py-12 text-center sm:flex-row sm:py-6 sm:text-left">
          <p>Collers @ 2023. All rights reserved.</p>
          <ul className="mx-auto flex gap-x-8 sm:mx-0">
            <li className="py-3">
              <Link href="" scroll={false}>
                Terms
              </Link>
            </li>
            <li className="py-3">
              <Link href="" scroll={false}>
                Privacy
              </Link>
            </li>
            <li className="py-3">
              <Link href="" scroll={false}>
                Contact
              </Link>
            </li>
            <li className="py-3">
              <Link
                className="flex items-center gap-x-2"
                href=""
                scroll={false}
              >
                <GlobeIcon />
                <span>EN</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
