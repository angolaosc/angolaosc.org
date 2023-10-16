'use client'
import React, { useEffect, useState } from "react";
import Logo from "./logo";
import Menu from "./menu";
import ButtonLink from "../buttonLink";
import { MENU } from "./data";
import { i18n } from "@/translate/i18n";
import {useRouter} from 'next/navigation'


const I18N_KEY = "i18nextLng"

function Header({ ...rest }) {

  const [language, setLanguage] = useState<any>('pt-BR')

  const router = useRouter();

  const handleChangeLanguage = (value:any)=>{
      localStorage.setItem('i18nextLng', value)
      window.location.reload()
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
        setLanguage(localStorage.getItem(I18N_KEY))
    }
  }, []);
  return (
    <header
      className="w-full flex-col items-center justify-center px-6 hidden lg:flex fixed top-10 bg-white z-50"
      {...rest}
    >
      <div className="w-full max-w-[1216px] py-4 flex items-center justify-between">
        <Logo />
        <Menu items={MENU} />
        <select style={{outline:'none'}} onChange={(e)=>handleChangeLanguage(e.target.value)} value={language}>
          <option value="en-US">English</option>
          <option value="pt-BR">Português</option>
        </select>
        <ButtonLink
          href={"https://opencollective.com/aosc"}
          target="_blank"
          text={i18n.t('nav.button')}
          
        />
      </div>
      <hr />
    </header>
  );
}

export default Header;
