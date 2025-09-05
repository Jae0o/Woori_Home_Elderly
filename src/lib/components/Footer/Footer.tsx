import { COMPANY_INFO } from "@lib/constants";

import { twMerge } from "tailwind-merge";

const hrStyle = "w-[0.2rem] h-[1.6rem] bg-white rounded-[0.2rem]";
const fontStyle = "text-[1.4rem] font-[600] text-white text-nowrap text-center";

const Footer = () => {
  return (
    <footer
      className={twMerge(
        "w-full p-[2rem] py-[5.6rem] flex flex-col items-center justify-center gap-[1rem] bg-dark_gray",
        "max-mobile:gap-[0.4rem]",
        fontStyle,
      )}
    >
      <span
        className={twMerge(
          "w-full flex items-center justify-center gap-[1rem]",
          "max-mobile:flex-col max-mobile:gap-[0.4rem]",
        )}
      >
        <p>대표자 : 장은숙</p>

        <hr className={twMerge(hrStyle, "hidden max-mobile:hidden")} />

        <p>TEL : {COMPANY_INFO.TEL}</p>

        <hr className={twMerge(hrStyle, "hidden max-mobile:hidden")} />

        <p>FAX : {COMPANY_INFO.FAX}</p>
      </span>

      <span
        className={twMerge(
          "w-full flex items-center justify-center gap-[1rem]",
          "max-mobile:flex-col max-mobile:gap-[0.4rem]",
        )}
      >
        <p>EMAIL : {COMPANY_INFO.EMAIL}</p>

        <hr className={twMerge(hrStyle, "hidden max-mobile:hidden")} />

        <p>주소 : {COMPANY_INFO.ADDRESS}</p>
      </span>

      <p className="mt-[3rem] text-wrap break-keep">COPYRIGHT © 우리재가노인복지센터.com All Rights RESERVED</p>
    </footer>
  );
};

export default Footer;
