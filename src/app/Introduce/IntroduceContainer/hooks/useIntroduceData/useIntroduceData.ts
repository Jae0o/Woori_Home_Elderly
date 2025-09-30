import { useMemo, useState } from "react";

import type { IntroduceData, UseIntroduceDataReturn } from "./useIntroduceData.type";

const useIntroduceData = (): UseIntroduceDataReturn => {
  const [isLoading] = useState(false);
  const [error] = useState<Error | null>(null);

  const data: IntroduceData = useMemo(
    () => ({
      greeting: {
        title: "우리재가노인복지센터",
        ceoName: "장은숙",
        messages: [
          "안녕하세요, 우리재가노인복지센터입니다.",
          "어르신들의 편안하고 행복한 노후를 위해 최선을 다하고 있습니다.",
          "전문적이고 체계적인 서비스로 어르신과 가족분들께 신뢰받는 센터가 되겠습니다.",
          "방문해주신 여러분을 진심으로 환영합니다!",
          "우리재가노인복지센터는 어르신들이 정든 내 집에서 편안하고 행복한 노후를 보내실 수 있도록 늘 곁에서 최선을 다하고 있습니다.",
          "전문적인 요양보호사들이 어르신의 상태와 필요에 맞는 맞춤 돌봄 서비스를 제공하며, 등급신청부터 가족요양상담까지 든든한 동반자가 되어 드리겠습니다.",
          "따뜻한 마음과 공경의 자세로 어르신들을 '우리가족'처럼 모시며, 어르신께는 존엄한 삶을, 가족분들께는 든든한 믿음을 드리는 최고의 서비스를 약속합니다.",
        ],
        closingMessage: "늘 곁에서 함께, 우리가 만드는 행복한 노년",
      },
      vision: "어르신이 행복한 사회",
      mission: "전문적인 재가복지서비스로 어르신의 삶의 질 향상",
      coreValues: [
        {
          title: "존중",
          description: "어르신의 존엄성을 최우선으로 생각하며, 한 분 한 분의 개성과 선택을 존중합니다.",
        },
        {
          title: "전문성",
          description: "체계적인 교육을 받은 전문 요양보호사가 과학적이고 체계적인 서비스를 제공합니다.",
        },
        {
          title: "신뢰",
          description: "투명하고 정직한 운영으로 어르신과 가족분들께 신뢰받는 센터가 되겠습니다.",
        },
        {
          title: "소통",
          description: "어르신, 가족, 센터 간의 원활한 소통으로 최선의 돌봄 서비스를 제공합니다.",
        },
      ],
      history: [
        {
          year: "2015",
          month: "03",
          description: "우리재가노인복지센터 설립",
        },
        {
          year: "2016",
          month: "06",
          description: "전주시 덕진구 이전 및 확장",
        },
        {
          year: "2018",
          month: "09",
          description: "우수 재가센터 선정",
        },
        {
          year: "2020",
          month: "12",
          description: "요양보호사 교육 프로그램 운영",
        },
        {
          year: "2023",
          month: "03",
          description: "지역사회 공헌 우수기관 표창",
        },
      ],
      organizationChart: {
        title: "조직도",
        description: "우리재가노인복지센터의 조직 구조",
      },
    }),
    [],
  );

  return {
    data,
    isLoading,
    error,
  };
};

export default useIntroduceData;
