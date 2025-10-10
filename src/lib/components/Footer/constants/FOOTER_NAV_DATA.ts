import { ROUTE_PATH } from "@lib/constants";

export interface FooterNavItem {
  label: string;
  path: string;
}

export interface FooterNavSection {
  title: string;
  ariaLabel: string;
  items: FooterNavItem[];
}

export const FOOTER_NAV_DATA: FooterNavSection[] = [
  {
    title: "센터 소개",
    ariaLabel: "센터 소개 메뉴",
    items: [
      { label: "인사말", path: ROUTE_PATH.INTRODUCE_GREETING },
      { label: "오시는길", path: ROUTE_PATH.INTRODUCE_DIRECTIONS },
    ],
  },
  {
    title: "서비스 안내",
    ariaLabel: "서비스 안내 메뉴",
    items: [
      { label: "노인장기요양보험", path: ROUTE_PATH.SERVICE_INSURANCE },
      { label: "방문요양서비스", path: ROUTE_PATH.SERVICE_HOME_CARE },
    ],
  },
  {
    title: "문의 / 신청",
    ariaLabel: "문의/신청 메뉴",
    items: [
      { label: "상담 신청", path: ROUTE_PATH.COST_AND_CONTACT_GUIDE },
      { label: "후원 안내", path: ROUTE_PATH.COST_AND_CONTACT_CONSULT },
    ],
  },
];
