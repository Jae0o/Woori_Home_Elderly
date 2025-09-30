import ROUTE_PATH from "../ROUTE_PATH/ROUTE_PATH";

export interface MenuSubItem {
  label: string;
  path: string;
}

export interface MenuItem {
  label: string;
  mainPath: string;
  subItems: MenuSubItem[];
}

const MENU_DATA: MenuItem[] = [
  {
    label: "센터 소개",
    mainPath: ROUTE_PATH.INTRODUCE_GREETING,
    subItems: [
      {
        label: "인사말",
        path: ROUTE_PATH.INTRODUCE_GREETING,
      },
      {
        label: "오시는길",
        path: ROUTE_PATH.INTRODUCE_DIRECTIONS,
      },
    ],
  },
  {
    label: "서비스 안내",
    mainPath: ROUTE_PATH.SERVICE_INSURANCE,
    subItems: [
      {
        label: "노인장기요양보험",
        path: ROUTE_PATH.SERVICE_INSURANCE,
      },
      {
        label: "방문요양서비스",
        path: ROUTE_PATH.SERVICE_HOME_CARE,
      },
    ],
  },
  {
    label: "비용 및 상담 신청",
    mainPath: ROUTE_PATH.COST_AND_CONTACT_GUIDE,
    subItems: [
      {
        label: "이용안내",
        path: ROUTE_PATH.COST_AND_CONTACT_GUIDE,
      },
      {
        label: "상담 신청",
        path: ROUTE_PATH.COST_AND_CONTACT_CONSULT,
      },
    ],
  },
  {
    label: "후원 및 자원봉사",
    mainPath: ROUTE_PATH.SPONSOR_AND_VOLUNTEER_SPONSOR,
    subItems: [
      {
        label: "후원",
        path: ROUTE_PATH.SPONSOR_AND_VOLUNTEER_SPONSOR,
      },
      {
        label: "자원봉사",
        path: ROUTE_PATH.SPONSOR_AND_VOLUNTEER_VOLUNTEER,
      },
    ],
  },
];

export default MENU_DATA;
