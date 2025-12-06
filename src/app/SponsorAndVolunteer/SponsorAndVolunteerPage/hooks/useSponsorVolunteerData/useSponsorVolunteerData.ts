import type { SponsorVolunteerData } from "./useSponsorVolunteerData.type";

/**
 * 후원 및 자원봉사 페이지 데이터 훅
 * @returns 후원 및 자원봉사 페이지의 모든 컨텐츠 데이터
 */
const useSponsorVolunteerData = (): SponsorVolunteerData => {
  return {
    // 후원의 종류
    sponsorTypes: [
      {
        title: "지정후원",
        description:
          "직접 내방, 인터넷뱅킹 등의 방법으로 정기 후원하실 수 있습니다.\n후원금은 어르신들 필요 물품 구입 및 프로그램 운영에 사용됩니다.",
      },
      {
        title: "일시후원",
        description:
          "직접 내방, 인터넷뱅킹 등의 방법으로 정기 후원하실 수 있습니다.\n후원금은 어르신들 필요 물품 구입 및 프로그램 운영에 사용됩니다.",
      },
      {
        title: "물품후원",
        description:
          "어르신의 생활에 도움이 되는 각종 물품을 후원하실 수 있습니다.\n후원해 주시는 물품은 어르신들 위해 사용됩니다.",
      },
    ],

    // 후원의 방법
    sponsorMethods: [
      {
        label: "안내",
        value: "직접내방 또는 인터넷 뱅킹 등을 통하여 후원에 참여하실수 있습니다.",
      },
      {
        label: "무통장입금",
        value: "기관으로 후원계좌로 입금하실수 있습니다.",
      },
      {
        label: "직접납부",
        value: "기관에 방문하시어 납부하실수 있습니다.",
      },
      {
        label: "계좌번호",
        value: "은행계좌안내",
      },
      {
        label: "세제혜택",
        value: "사회복지사업법 및 소득세법에 의하여 연말정산시 소득공제대상이 됩니다.",
      },
    ],

    // 자원봉사 참여방법
    volunteerSteps: [
      {
        step: "Step1",
        title: "신청",
        subtitle: "(전화, 방문)",
      },
      {
        step: "Step2",
        title: "상담 및 교육",
      },
      {
        step: "Step3",
        title: "활동",
        subtitle: "(봉사활동 참여)",
      },
    ],

    // 활동 및 예약시간
    volunteerSchedule: [
      {
        label: "활동예약",
        value: "활동 일주일 전 전화 또는 방문예약",
      },
      {
        label: "활동시간",
        value: "월요일 ~ 일요일, 09:00~17:00",
      },
    ],

    // 자원봉사 활동 내용
    volunteerActivities: [
      {
        category: "정서지원",
        content: "말벗, 산책, 종교활동보조, 프로그램보조 등",
      },
      {
        category: "의료봉사",
        content: "한방진료, 수지침 등",
      },
      {
        category: "이미용봉사",
        content: "컷트, 펌, 염색, 마사지, 손발톱정리 등",
      },
      {
        category: "노력봉사",
        content: "원내환경정리, 청소, 조리, 목욕 등",
      },
      {
        category: "지역연계프로그램지원",
        content: "외식지원, 행사초청 등",
      },
    ],
  };
};

export default useSponsorVolunteerData;
