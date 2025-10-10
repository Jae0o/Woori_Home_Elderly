import type { FooterLogoProps } from "./FooterLogo.type";

const FooterLogo = ({ title, description }: FooterLogoProps) => {
  return (
    <div className="flex flex-col gap-[1.6rem]">
      <h2 className="text-[2.4rem] font-[700] tracking-[0.05rem] max-mobile:text-[2rem]">{title}</h2>
      <p className="text-[1.4rem] opacity-80 max-mobile:text-[1.3rem]">{description}</p>
    </div>
  );
};

export default FooterLogo;
