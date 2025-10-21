import { Link } from "react-router";

import type { BreadcrumbProps } from "./Breadcrumb.type";

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="w-full py-[2rem] px-[2rem] flex items-center gap-[0.8rem] text-[1.4rem]">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div
            key={item.label}
            className="flex items-center gap-[0.8rem]"
          >
            {item.path && !isLast ? (
              <Link
                to={item.path}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "text-primary font-[600]" : "text-gray-600"}>{item.label}</span>
            )}

            {!isLast && <span className="text-gray-400">{">"}</span>}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
