import React from 'react';

export const Footer = () => {
  return (
    <div className="py-[20px] px-[15px] bg-black text-white">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="grid py-5 grid-cols-1 md:grid-cols-3 gap-[15px]">
          <div className="">
            <p className="mb-[15px]  text-[16px] font-normal">bruchsalerautomobile.de</p>
            <ul className="pl-[50px]  list-disc">
              <li onClick={() => window.location.href = "#faq"} className="hover:underline cursor-pointer">Häufige Fragen</li>

              <li onClick={() => window.location.href = "#calculator"} className="hover:underline cursor-pointer">Verkauf</li>
            </ul>
          </div>
          <div className="">
            <p className="mb-[15px]  text-[16px] font-normal">Kundenservice</p>
            <ul className="pl-[50px]  list-disc">
              <li
                className="hover:underline cursor-pointer"
                onClick={() => { window.location.href = '/impressum'; }}
              >
                Impressum
              </li>
              <li
                className="hover:underline cursor-pointer"
                onClick={() => { window.location.href = '/datenschutz'; }}
              >
                Datenschutz
              </li>
            </ul>
          </div>
        </div>
        <h1 className="text-center">© bruchsalerautomobile.de 2024</h1>
      </div>
    </div>
  );
};
