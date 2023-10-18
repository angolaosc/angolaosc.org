import React, { useState } from "react";

function LanguageSelector() {
  const [selectedValue, setSelectedValue] = useState("0");

  const handleSelectChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedValue(event.target.value);
    console.log(selectedValue);
  };

  return (
    // <div>
    //   <select name="language" id="languageSelect" value={selectedValue} onChange={handleSelectChange}>
    //     <option value="0">PT</option>
    //     <option value="1">EN</option>
    //     <option value="2">FR</option>
    //   </select>
    // </div>
    <div className="relative inline-block text-gray-700">
      <select
        name="language"
        id="languageSelect"
        value={selectedValue}
        onChange={handleSelectChange}
        className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        <option value="0">PT</option>
        <option value="1">EN</option>
        <option value="2">FR</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M6.293 5.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 7.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>

  );
}

export default LanguageSelector;