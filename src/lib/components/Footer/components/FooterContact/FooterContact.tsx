import type { FooterContactProps } from "./FooterContact.type";

import { twMerge } from "tailwind-merge";

const FooterContact = ({ tel, fax, email, address, ceoName }: FooterContactProps) => {
  const linkHoverStyle = "transition-colors duration-300 hover:text-primary focus:text-primary focus:outline-none";

  return (
    <div className="flex flex-col gap-[1.2rem] pt-[2.4rem] border-t border-white/20">
      <div
        className={twMerge(
          "flex items-center gap-[2rem] flex-wrap",
          "max-mobile:flex-col max-mobile:items-start max-mobile:gap-[0.8rem]",
        )}
      >
        <a
          href={`tel:${tel.replace(/\s|-|\)/g, "")}`}
          className={twMerge("text-[1.4rem] opacity-80 max-mobile:text-[1.3rem]", linkHoverStyle)}
          aria-label={`전화번호: ${tel}`}
        >
          <span aria-hidden="true">전화:</span> {tel}
        </a>
        <span className="opacity-30 max-mobile:hidden">|</span>
        <span className="text-[1.4rem] opacity-80 max-mobile:text-[1.3rem]">
          <span aria-hidden="true">팩스:</span> {fax}
        </span>
        <span className="opacity-30 max-mobile:hidden">|</span>
        <a
          href={`mailto:${email}`}
          className={twMerge("text-[1.4rem] opacity-80 max-mobile:text-[1.3rem]", linkHoverStyle)}
          aria-label={`이메일: ${email}`}
        >
          <span aria-hidden="true">이메일:</span> {email}
        </a>
      </div>
      <address className="text-[1.4rem] opacity-80 not-italic max-mobile:text-[1.3rem]">
        <span aria-hidden="true">주소:</span> {address}
      </address>
      <p className="text-[1.4rem] opacity-80 max-mobile:text-[1.3rem]">
        <span aria-hidden="true">대표자:</span> {ceoName}
      </p>
    </div>
  );
};

export default FooterContact;
