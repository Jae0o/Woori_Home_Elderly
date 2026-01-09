import type { CostData } from "./useCostData.type";

/**
 * 비용 안내 페이지 데이터 훅
 * @returns 비용 안내 페이지의 모든 컨텐츠 데이터
 */
const useCostData = (): CostData => {
  return {
    // 재가복지센터 비용안내 (GuidePage에서 이동)
    costProcessSteps: [
      {
        step: "Step1",
        title: "장기요양인정 신청\n및 방문신청",
        organization: "국민건강보험공단",
      },
      {
        step: "Step2",
        title: "장기요양인정 및\n장기요양등급판정",
        organization: "등급판정위원회",
      },
      {
        step: "Step3",
        title: "장기요양인정서 표준장기요양\n이용계획서 송부",
        organization: "국민건강보험공단",
      },
      {
        step: "Step4",
        title: "장기요양급여 이용계획\n및 장기요양 급여제공",
        organization: "장기요양기관",
      },
    ],

    // 이용요금 테이블 (HomeCarePage에서 이동)
    costChargeTable: {
      title: "이용요금\n(1일당 본인부담금)",
      columns: ["구분", "급여(원)", "본인부담금(15%)", "본인부담금(9%)", "본인부담금(6%)"],
      rows: [
        {
          duration: "30분",
          benefit: "17,450",
          burden15: "2,618",
          burden9: "1,571",
          burden6: "1,047",
        },
        {
          duration: "60분",
          benefit: "25,320",
          burden15: "3,798",
          burden9: "2,279",
          burden6: "1,519",
        },
        {
          duration: "90분",
          benefit: "34,120",
          burden15: "5,118",
          burden9: "3,071",
          burden6: "2,047",
        },
        {
          duration: "120분",
          benefit: "43,430",
          burden15: "6,515",
          burden9: "3,909",
          burden6: "2,606",
        },
        {
          duration: "150분",
          benefit: "50,640",
          burden15: "7,596",
          burden9: "4,558",
          burden6: "3,038",
        },
        {
          duration: "180분",
          benefit: "55,350",
          burden15: "8,303",
          burden9: "4,982",
          burden6: "3,321",
        },
        {
          duration: "210분",
          benefit: "63,530",
          burden15: "9,530",
          burden9: "5,718",
          burden6: "3,812",
        },
        {
          duration: "240분",
          benefit: "70,080",
          burden15: "10,512",
          burden9: "6,307",
          burden6: "4,205",
        },
      ],
      note: "※ 2026년도 수가 기준",
      footer: "※ 치매가 없는 1~5등급 수급자가 인지활동형 방문요양 이용 시 '120분 이상 ~ 180분 이하' 이용가능",
    },
  };
};

export default useCostData;
