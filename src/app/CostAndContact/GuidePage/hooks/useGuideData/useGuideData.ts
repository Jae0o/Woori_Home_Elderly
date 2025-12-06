import type { GuideData } from "./useGuideData.type";

/**
 * 이용안내 페이지 데이터 훅
 * @returns 이용안내 페이지의 모든 컨텐츠 데이터
 */
const useGuideData = (): GuideData => {
  return {
    // 재가복지센터 이용안내 (Prototype 1)
    usageSteps: [
      {
        step: "Step1",
        title: "전화문의 및 계약 상담",
      },
      {
        step: "Step2",
        title: "서류작성",
      },
      {
        step: "Step3",
        title: "계약결정",
      },
      {
        step: "Step4",
        title: "계약완료",
      },
    ],

    // 재가복지센터 비용안내 (Prototype 2)
    costSteps: [
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

    // 장기요양인정 신청안내 (Prototype 2)
    applicationInfo: [
      {
        label: "장기요양인정의 신청자격",
        value:
          "65세 이상의 노인 및 65세 미만으로 노인성 질병을 가진 자가 자격 대상입니다.\n\n(노인성질병 : 치매, 뇌혈관성질환, 파킨슨 병 등 보건복지부 장관이 정하여 고시한 질병)",
      },
      {
        label: "장기요양인정의 신청\n(노인장기요양보험법 제 13조)",
        value:
          "2008년 4월 15일 부터 공단지사(노인장기요양보험지원센터)에서 접수합니다.\n\n• 신청인:본인 또는 대리인\n(대리인:가족, 친족 또는 이해관계인, 사회복지전담공무원, 시장, 군수, 구청장이 지정하는 자\n대리신청시 대리인 본인임을 확인할 수 있는 신분증 제시, 다만 팩스, 우편접수경우 신분증 사본제출)",
      },
      {
        label: "제출서류",
        value: "장기요양인정신청서 ( 공단지사 또는 홈페이지 https://www.longtermcare.or.kr )",
      },
      {
        label: "의사소견서 제출기한\n(노인장기요양보험법 시행규칙 제2조~4조)",
        value:
          "• 65세 이상 노인 : 등급판정위원회에 자료 제출 전까지\n• 65세 미만 중 노인성 질병을 가진자 : 신청서 제출시",
      },
    ],

    // 등급판정 절차 (Prototype 3)
    gradeProcess: [
      {
        step: "STEP 01",
        title: "인정신청",
      },
      {
        step: "STEP 02",
        title: "'장기요양인정조사표'에 의한\n1. 65개 항목조사\n2. 25개 욕구조사",
        badge: "방문조사",
      },
      {
        step: "",
        title: "의사소견서 제출",
        isIntermediate: true,
      },
      {
        step: "STEP 03",
        title: "장기요양인정 점수 산정",
        badge: "등급판정",
      },
      {
        step: "STEP 04",
        title: "등급판정 위원회 심의 판정",
      },
    ],

    // 등급판정 결과 분기
    gradeResult: {
      left: "등급 외",
      right: "1~5등급",
    },
  };
};

export default useGuideData;
