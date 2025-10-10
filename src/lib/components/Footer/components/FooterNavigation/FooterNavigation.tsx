import { FOOTER_NAV_DATA } from "../../constants";
import { FooterNavSection } from "../FooterNavSection";

import { twMerge } from "tailwind-merge";

const FooterNavigation = () => {
  return (
    <div className={twMerge("grid grid-cols-3 gap-[4rem]", "max-mobile:grid-cols-1 max-mobile:gap-[2.4rem]")}>
      {FOOTER_NAV_DATA.map(section => (
        <FooterNavSection
          key={section.title}
          title={section.title}
          ariaLabel={section.ariaLabel}
          items={section.items}
        />
      ))}
    </div>
  );
};

export default FooterNavigation;
