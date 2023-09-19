import React from "react";
import { animateScroll } from "react-scroll";
import ButtonLink from "../buttonLink";
import Link from "next/link";
import Image from "next/image";

function Footer({ ...rest }) {
  const date = new Date();
  const year = date.getFullYear();
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
                  alt="logo Angola Open Source Community"
                  src={"/logo-aosc.svg"}
                  width={80}
                  height={80}
                />
                <h3 className="sm:text-3xl text-2xl font-bold">
                  Angola OpenSource Community
                </h3>
              </div>
              <p className="text-gray-600 w-72">
                We aim to develop and promote FOSS in
                Angola.
              </p>
            </div>
            <ButtonLink
              href="mailton:info@aosc.social"
              text="Fale conosco"
              className="text-center justify-center items-center w-56"
            />
          </div>
          <div className="flex flex-row flex-wrap gap-6">
            <div className="w-52">
              <h3 className="text-xl">AOSC</h3>
              <ul className="flex flex-col">
                <li>
                  <Link
                    href={"#"}
                    className="text-gray-600 hover:text-black transition-colors duration-[0.3s] ease-linear"
                  >
                    Início
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="text-gray-600 hover:text-black transition-colors duration-[0.3s] ease-linear"
                  >
                    TOSCA
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="text-gray-600 hover:text-black transition-colors duration-[0.3s] ease-linear"
                  >
                    Equipa
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="text-gray-600 hover:text-black transition-colors duration-[0.3s] ease-linear"
                  >
                    Eventos
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-52">
              <h3 className="text-xl">Comunidades</h3>
              <ul className="flex flex-col">
                <li>
                  <Link
                    href={
                      "https://discord.com/invite/tuUDNdRzvz"
                    }
                    className="text-gray-600 hover:text-black transition-colors duration-[0.3s] ease-linear"
                  >
                    Discord
                  </Link>
                </li>
                <li>
                  <Link
                    href={
                      "https://www.facebook.com/aoscangola"
                    }
                    className="text-gray-600 hover:text-black transition-colors duration-[0.3s] ease-linear"
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href={
                      "https://www.linkedin.com/company/angola-open-source-community"
                    }
                    className="text-gray-600 hover:text-black transition-colors duration-[0.3s] ease-linear"
                  >
                    Linkedin
                  </Link>
                </li>
                <li>
                  <Link
                    href={
                      "https://www.youtube.com/@angolaosc"
                    }
                    className="text-gray-600 hover:text-black transition-colors duration-[0.3s] ease-linear"
                  >
                    Youtube
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-52">
              <h3 className="text-xl">Projectos</h3>
              <ul className="flex flex-col">
                <li>
                  <Link
                    href={"https://mentorship.aosc.social"}
                    className="text-gray-600 hover:text-black transition-colors duration-[0.3s] ease-linear"
                  >
                    Programa de Mentoria
                  </Link>
                </li>
                <li>
                  <Link
                    href={
                      "https://www.youtube.com/playlist?list=PLso4Zv7njkDM-AjI3Z0oaFcPZdT7-fmLy"
                    }
                    className="text-gray-600 hover:text-black transition-colors duration-[0.3s] ease-linear"
                  >
                    The Open Source Café(TOSCA)
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full py-6 border-t flex-col gap-6 md:flex-row md:justify-between">
          <p className="text-gray-600 text-center md:text-start">
            © {year} - Angola Open Source Communiy.
            <br />
            Todos os direitos reservados.
            <br />
            <a href="https://github.com/angolaosc/aosc.social">
              {" "}
              ver código fonte,{" "}
            </a>
            licenciado sob{" "}
            <a href="https://github.com/angolaosc/aosf-website/blob/main/LICENSE">
              Licença Apache-2.0
            </a>
          </p>
          <button
            onClick={() => animateScroll.scrollToTop()}
            className="text-gray-600 hover:text-black transition-colors duration-[0.3s] ease-linear"
          >
            Voltar ao topo
          </button>
        </div>
      </div>
    </section>
  );
}

export default Footer;
