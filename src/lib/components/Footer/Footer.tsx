import { COMPANY_INFO } from "@lib/constants";

import { FooterContact, FooterCopyright, FooterLogo, FooterNavigation, FooterPartners } from "./components";
import { FOOTER_CONTENT } from "./constants";

import { twMerge } from "tailwind-merge";

const PARTNER_LOGOS = [
  {
    name: "노인장기요양보험",
    src: "/long-term-care-insurance.png",
    url: "https://www.longtermcare.or.kr",
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-primary text-white">
      <div
        className={twMerge(
          "w-full max-w-[120rem] mx-auto px-[2rem] py-[6.4rem] flex flex-col gap-[4.8rem]",
          "max-mobile:py-[4.8rem] max-mobile:gap-[3.2rem]",
        )}
      >
        {/* Logo + Partners Section */}
        <div className="flex items-center justify-between gap-[2rem] flex-wrap">
          <FooterLogo
            title={FOOTER_CONTENT.LOGO.title}
            description={FOOTER_CONTENT.LOGO.description}
          />
          <FooterPartners logos={PARTNER_LOGOS} />
        </div>

        {/* Quick Links Section */}
        <FooterNavigation />

        {/* Contact Info Section */}
        <FooterContact
          tel={COMPANY_INFO.TEL}
          fax={COMPANY_INFO.FAX}
          email={COMPANY_INFO.EMAIL}
          address={COMPANY_INFO.ADDRESS}
          ceoName={FOOTER_CONTENT.CEO_NAME}
        />

        {/* Copyright Section */}
        <FooterCopyright
          year={FOOTER_CONTENT.COPYRIGHT.year}
          companyName={FOOTER_CONTENT.COPYRIGHT.companyName}
        />
      </div>
    </footer>
  );
};

export default Footer;
