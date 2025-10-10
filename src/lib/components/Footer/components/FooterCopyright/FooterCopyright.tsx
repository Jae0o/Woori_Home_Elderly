import type { FooterCopyrightProps } from "./FooterCopyright.type";

const FooterCopyright = ({ year, companyName }: FooterCopyrightProps) => {
  return (
    <div className="pt-[2.4rem] border-t border-white/20">
      <p className="text-[1.3rem] opacity-60 text-center max-mobile:text-[1.2rem]">
        Copyright © {year} {companyName}. All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterCopyright;
