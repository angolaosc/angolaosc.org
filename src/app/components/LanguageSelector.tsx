"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation"

function LanguageSelector(lang) {


  const [selectedValue, setSelectedValue] = useState(lang.lang);

  const router = useRouter()

  function handleChange(e: any) {
    setSelectedValue(e.target.value)
    redirectPathname(e.target.value)
  }

  const pathname = usePathname()
  const redirectPathname = (locale: string) => {


    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale

    router.push(segments.join("/"))
  }
  return (
    <div>
      <select name="language" id="languageSelect" value={selectedValue} onChange={handleChange}>

        <option value={"pt"}>
          pt
        </option>
        <option value={"en"}>
          en
        </option>
        <option value={"fr"}>
          fr
        </option>
        <option value={"es"}>
          es
        </option>


      </select>
    </div>
  );
}

export default LanguageSelector;