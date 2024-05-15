import React from "react";
import { animateScroll } from "react-scroll";
import ButtonLink from "../buttonLink";
import { Link } from "react-scroll";
import NextLink from "next/link";
import Image from "next/image";
import { i18n } from "@/translate/i18n";
import { useEffect, useState } from 'react';
import { ArrowUp } from 'phosphor-react';

function Footer({ ...rest }) {
  const date = new Date();
  const year = date.getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section
      className="flex items-center pt-14 w-full justify-center"
      {...rest}
    >
      <div className="max-w-[1216px] px-6 w-full flex flex-col gap-5 justify-start items-center xl:items-start">
        <div className="flex justify-between w-full flex-col gap-6 lg:flex-row py-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <div className="flex flex-row gap-3 max-w-sm max-[375px]:flex-col">
                <Image
                  alt="logo Angola Open-source Community"
                  src={"/logo-aosc.svg"}
                  width={80}
                  height={80}
                />
                <h3 className="dark:text-slate-400 sm:text-3xl text-2xl font-bold">
                  Angola Open-source Community
                </h3>
              </div>
              <p className="dark:text-slate-400 w-72">
                We aim to develop and promote FOSS in
                Angola.
              </p>
            </div>
            <ButtonLink
              href="mailto:info@aosc.social"
              text={i18n.t('footer.button')}
              className="dark:bg-btn dark:text-btc text-center justify-center items-center w-56"
            />
          </div>
          <div className="flex flex-row flex-wrap gap-6">
            <div className="w-52">
              <h3 className="text-xl dark:text-white">
                AOSC
              </h3>
              <ul className="flex flex-col">
                <li>
                  <Link
                    to={"top"}
                    smooth={true}
                    duration={1400}
                    className="dark:text-sky-400 hover:text-black transition-colors duration-[0.3s] ease-linear cursor-pointer"
                  >
                    {i18n.t('footer.aosc.link_1')}
                  </Link>
                </li>
                <li>
                  <Link
                    to={"motivations"}
                    smooth={true}
                    duration={1400}
                    className="dark:text-sky-400 hover:text-black transition-colors duration-[0.3s] ease-linear cursor-pointer"
                  >
                    {i18n.t('footer.aosc.link_2')}
                  </Link>
                </li>
                <li>
                  <Link
                    to={"our-team"}
                    smooth={true}
                    duration={1400}
                    className="dark:text-sky-400 hover:text-black transition-colors duration-[0.3s] ease-linear cursor-pointer"
                  >
                    {i18n.t('footer.aosc.link_3')}
                  </Link>
                </li>
                <li>
                  <NextLink
                    href={"https://fest.aosc.social/"}
                    target="_blank"
                    className="dark:text-sky-400 hover:text-black transition-colors duration-[0.3s] ease-linear"
                  >
                    AOSFest 2023
                  </NextLink>
                </li>
                <li>
                  <NextLink
                    href={"https://drive.google.com/drive/folders/1t3l-7mNUJOUaO0IzH9EyYJnIwyd10Za2?usp=sharing"}
                    target="_blank"
                    className="dark:text-sky-400 hover:text-black transition-colors duration-[0.3s] ease-linear"
                  >
                    Download Design Kit
                  </NextLink>
                </li>
              </ul>
            </div>

            <div className="w-52">
              <h3 className="text-xl dark:text-white">
                {i18n.t('footer.community.title')}
              </h3>
              <ul className="flex flex-col">
                <li>
                  <NextLink
                    href={
                      "https://discord.com/invite/tuUDNdRzvz"
                    }
                    target="_blank"
                    className="dark:text-sky-400 hover:text-black transition-colors duration-[0.3s] ease-linear"
                  >
                    Discord
                  </NextLink>
                </li>
                <li>
                  <NextLink
                    href={
                      "https://www.facebook.com/aoscangola"
                    }
                    target="_blank"
                    className="dark:text-sky-400 hover:text-black transition-colors duration-[0.3s] ease-linear"
                  >
                    Facebook
                  </NextLink>
                </li>
                <li>
                  <NextLink
                    href={
                      "https://www.linkedin.com/company/angola-open-source-community"
                    }
                    target="_blank"
                    className="dark:text-sky-400 hover:text-black transition-colors duration-[0.3s] ease-linear"
                  >
                    Linkedin
                  </NextLink>
                </li>
                <li>
                  <NextLink
                    href={
                      "https://www.youtube.com/@angolaosc"
                    }
                    target="_blank"
                    className="dark:text-sky-400 hover:text-black transition-colors duration-[0.3s] ease-linear"
                  >
                    Youtube
                  </NextLink>
                </li>
              </ul>
            </div>
            <div className="w-52">
              <h3 className="text-xl dark:text-white">
                {i18n.t('footer.project.title')}
              </h3>
              <ul className="flex flex-col">
                <li>
                  <NextLink
                    href={"https://mentorship.aosc.social"}
                    target="_blank"
                    className="dark:text-sky-400 hover:text-black transition-colors duration-[0.3s] ease-linear"
                  >
                    {i18n.t('footer.project.link_1')}
                  </NextLink>
                </li>
                <li>
                  <NextLink
                    href={
                      "https://www.youtube.com/playlist?list=PLso4Zv7njkDM-AjI3Z0oaFcPZdT7-fmLy"
                    }
                    target="_blank"
                    className="dark:text-sky-400 hover:text-black transition-colors duration-[0.3s] ease-linear"
                  >
                    The Open-source Café(TOSCA)
                  </NextLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full py-6 border-t flex-col gap-6 md:flex-row md:justify-between">
          <p className="dark:text-slate-400 text-center md:text-start">
            © {year} - Angola Open-source Communiy.
            <br />
            {i18n.t('footer.copyright.info_1')}
            <br />
            <NextLink
              target="_blank"
              href="https://github.com/angolaosc/aosc.social"
              className="dark:text-sky-400"
            >
              {" "}
              {i18n.t('footer.copyright.link_1')}{" "}
            </NextLink>
            {i18n.t('footer.copyright.info_2')}{" "}
            <NextLink
              target="_blank"
              href="https://github.com/angolaosc/aosf-website/blob/main/LICENSE"
              className="dark:text-sky-400"
            >
              {i18n.t('footer.copyright.link_2')}
            </NextLink>
          </p>


          <button
            className={`${isVisible ? 'block' : 'hidden'
              } dark:bg-btn dark:text-btc fixed bottom-6 right-6 bg-red-500 text-white hover:bg-red-400 p-4 rounded-full shadow-md transition-opacity duration-300`}
            onClick={scrollToTop}
          >
            <ArrowUp className="h-4 w-4" />
          </button>

        </div>
      </div>
    </section>
  );
}

export default Footer;
