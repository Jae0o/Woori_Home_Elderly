import type { FooterPartnersProps } from "./FooterPartners.type";

const FooterPartners = ({ logos }: FooterPartnersProps) => {
  return (
    <div className="flex items-center gap-[2rem] flex-wrap">
      {logos.map((logo, index) =>
        logo.url ? (
          <a
            key={index}
            href={logo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity opacity-90 hover:opacity-100"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="h-[10rem] w-auto max-mobile:h-[8rem]"
            />
          </a>
        ) : (
          <img
            key={index}
            src={logo.src}
            alt={logo.name}
            className="h-[10rem] w-auto opacity-90 max-mobile:h-[8rem]"
          />
        ),
      )}
    </div>
  );
};

export default FooterPartners;
