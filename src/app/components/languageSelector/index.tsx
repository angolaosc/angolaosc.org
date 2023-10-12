import { Translate } from 'phosphor-react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface iLanguageOptions {
  name: string;
  value: string;
}

const languageOptions: iLanguageOptions[] = [
  {
    name:"Portugues",
    value: "ptBR",
  },
  {
    name:"Ingles",
    value: "en",
  },
  {
    name: "Françes",
    value: "fr",
  }
];

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setMenuVisible(false);
  };

  return (
    <div className="flex items-center">
      <div className="relative group">
        <Translate size={32} className="cursor-pointer" onClick={toggleMenu} data-testid="translate-icon"/>
        {menuVisible && (
          <div className="absolute top-8 right-0 mt-2 bg-red-500 text-white p-2 border border-gray-300 rounded shadow">
            {languageOptions.map((languageOption) => (
              <button
                key={languageOption.value}
                onClick={() => changeLanguage(languageOption.value)}
                className="block w-full text-left p-1"
              >
                {languageOption.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default LanguageSelector;
