import { FooterNavLink } from "../FooterNavLink";
import type { FooterNavSectionProps } from "./FooterNavSection.type";

const FooterNavSection = ({ title, ariaLabel, items }: FooterNavSectionProps) => {
  return (
    <nav aria-label={ariaLabel}>
      <h3 className="text-[1.6rem] font-[600] mb-[1.6rem] max-mobile:text-[1.5rem]">{title}</h3>
      <ul className="flex flex-col gap-[1.2rem]">
        {items.map(item => (
          <FooterNavLink
            key={item.path}
            to={item.path}
            label={item.label}
          />
        ))}
      </ul>
    </nav>
  );
};

export default FooterNavSection;
