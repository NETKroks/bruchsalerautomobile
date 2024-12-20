import React from 'react';

export const Header = () => {
  return (
    <div className="px-[15px] bg-black">
      <div className="max-w-[1026px] mx-auto">
        <div className="flex justify-between ">
          <div className="logo p-[15px]">
            <img onClick={() => window.location.href = "/"} src="/images/logo.png" className="lg:max-w-[200px] w-full h-auto  max-w-[150px]" alt="" />
          </div>

          <ul className="md:flex hidden items-center gap-3">
            <li>
              <a href="/" className="p-[15px] text-white hover:bg-white transition-all hover:text-[#ee202c]">
                Home
              </a>
            </li>
            <li>
              <a href="/impressum" className="p-[15px] text-white hover:bg-white transition-all hover:text-[#ee202c]">
                Impressum
              </a>
            </li>

          </ul>

          <div className="md:hidden">
            <img src="/images/menu.png" className="cursor-pointer" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
