import { Link } from "react-router";

import { COMPANY_INFO, ROUTE_PATH } from "@lib/constants";

import { twMerge } from "tailwind-merge";

const Footer = () => {
  const linkHoverStyle = "transition-colors duration-300 hover:text-primary focus:text-primary focus:outline-none";

  return (
    <footer className="w-full bg-primary text-white">
      <div
        className={twMerge(
          "w-full max-w-[120rem] mx-auto px-[2rem] py-[6.4rem] flex flex-col gap-[4.8rem]",
          "max-mobile:py-[4.8rem] max-mobile:gap-[3.2rem]",
        )}
      >
        {/* Logo Section */}
        <div className="flex flex-col gap-[1.6rem]">
          <h2 className="text-[2.4rem] font-[700] tracking-[0.05rem] max-mobile:text-[2rem]">우리재가노인복지센터</h2>
          <p className="text-[1.4rem] opacity-80 max-mobile:text-[1.3rem]">
            어르신들의 건강하고 행복한 노후를 위해 최선을 다하겠습니다
          </p>
        </div>

        {/* Quick Links Section */}
        <div className={twMerge("grid grid-cols-3 gap-[4rem]", "max-mobile:grid-cols-1 max-mobile:gap-[2.4rem]")}>
          {/* 센터 소개 */}
          <nav aria-label="센터 소개 메뉴">
            <h3 className="text-[1.6rem] font-[600] mb-[1.6rem] max-mobile:text-[1.5rem]">센터 소개</h3>
            <ul className="flex flex-col gap-[1.2rem]">
              <li>
                <Link
                  to={ROUTE_PATH.HOME}
                  className={twMerge("text-[1.4rem] opacity-80 max-mobile:text-[1.3rem]", linkHoverStyle)}
                >
                  인사말
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTE_PATH.HOME}
                  className={twMerge("text-[1.4rem] opacity-80 max-mobile:text-[1.3rem]", linkHoverStyle)}
                >
                  오시는길
                </Link>
              </li>
            </ul>
          </nav>

          {/* 서비스 안내 */}
          <nav aria-label="서비스 안내 메뉴">
            <h3 className="text-[1.6rem] font-[600] mb-[1.6rem] max-mobile:text-[1.5rem]">서비스 안내</h3>
            <ul className="flex flex-col gap-[1.2rem]">
              <li>
                <Link
                  to={ROUTE_PATH.HOME}
                  className={twMerge("text-[1.4rem] opacity-80 max-mobile:text-[1.3rem]", linkHoverStyle)}
                >
                  노인장기요양보험
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTE_PATH.HOME}
                  className={twMerge("text-[1.4rem] opacity-80 max-mobile:text-[1.3rem]", linkHoverStyle)}
                >
                  방문요양서비스
                </Link>
              </li>
            </ul>
          </nav>

          {/* 문의/신청 */}
          <nav aria-label="문의/신청 메뉴">
            <h3 className="text-[1.6rem] font-[600] mb-[1.6rem] max-mobile:text-[1.5rem]">문의 / 신청</h3>
            <ul className="flex flex-col gap-[1.2rem]">
              <li>
                <Link
                  to={ROUTE_PATH.HOME}
                  className={twMerge("text-[1.4rem] opacity-80 max-mobile:text-[1.3rem]", linkHoverStyle)}
                >
                  상담 신청
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTE_PATH.HOME}
                  className={twMerge("text-[1.4rem] opacity-80 max-mobile:text-[1.3rem]", linkHoverStyle)}
                >
                  후원 안내
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Contact Info Section */}
        <div className="flex flex-col gap-[1.2rem] pt-[2.4rem] border-t border-white/20">
          <div
            className={twMerge(
              "flex items-center gap-[2rem] flex-wrap",
              "max-mobile:flex-col max-mobile:items-start max-mobile:gap-[0.8rem]",
            )}
          >
            <a
              href={`tel:${COMPANY_INFO.TEL.replace(/\s|-|\)/g, "")}`}
              className={twMerge("text-[1.4rem] opacity-80 max-mobile:text-[1.3rem]", linkHoverStyle)}
              aria-label={`전화번호: ${COMPANY_INFO.TEL}`}
            >
              <span aria-hidden="true">전화:</span> {COMPANY_INFO.TEL}
            </a>
            <span className="opacity-30 max-mobile:hidden">|</span>
            <span className="text-[1.4rem] opacity-80 max-mobile:text-[1.3rem]">
              <span aria-hidden="true">팩스:</span> {COMPANY_INFO.FAX}
            </span>
            <span className="opacity-30 max-mobile:hidden">|</span>
            <a
              href={`mailto:${COMPANY_INFO.EMAIL}`}
              className={twMerge("text-[1.4rem] opacity-80 max-mobile:text-[1.3rem]", linkHoverStyle)}
              aria-label={`이메일: ${COMPANY_INFO.EMAIL}`}
            >
              <span aria-hidden="true">이메일:</span> {COMPANY_INFO.EMAIL}
            </a>
          </div>
          <address className="text-[1.4rem] opacity-80 not-italic max-mobile:text-[1.3rem]">
            <span aria-hidden="true">주소:</span> {COMPANY_INFO.ADDRESS}
          </address>
          <p className="text-[1.4rem] opacity-80 max-mobile:text-[1.3rem]">
            <span aria-hidden="true">대표자:</span> 장은숙
          </p>
        </div>

        {/* Copyright Section */}
        <div className="pt-[2.4rem] border-t border-white/20">
          <p className="text-[1.3rem] opacity-60 text-center max-mobile:text-[1.2rem]">
            Copyright © 2024 우리재가노인복지센터. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
