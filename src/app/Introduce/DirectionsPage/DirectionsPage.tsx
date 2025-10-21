import { Map, MapMarker } from "react-kakao-maps-sdk";

import { Breadcrumb, ContentSection, PageHero } from "@lib/components";
import { COMPANY_INFO, ROUTE_PATH } from "@lib/constants";

import { IntroduceContainer } from "../components";
import { ContactInfo } from "./components";

// const TRANSPORTATION_INFO = [
//   {
//     type: "버스",
//     details: "119번, 165번, 211번 버스 이용 - 붓내마을 정류장 하차 (도보 3분)",
//   },
//   {
//     type: "자가용",
//     details: "전주IC에서 약 15분, 전주시청에서 약 10분 거리",
//   },
// ];

const DirectionsPage = () => {
  const breadcrumbItems = [
    { label: "홈", path: ROUTE_PATH.HOME },
    { label: "센터 소개", path: "/introduce" },
    { label: "오시는 길" },
  ];

  return (
    <IntroduceContainer>
      <Breadcrumb items={breadcrumbItems} />

      <PageHero
        title="오시는 길"
        subtitle="우리재가노인복지센터를 찾아오시는 방법을 안내해 드립니다"
        height="50vh"
      />

      <ContentSection title="위치 안내">
        <div className="w-full max-w-[100rem] h-[46rem] border-[0.1rem] border-gray-300 rounded-[1rem] overflow-hidden shadow-lg">
          <Map
            center={COMPANY_INFO.MAP_DATA}
            style={{ width: "100%", height: "100%" }}
            level={3}
          >
            <MapMarker position={COMPANY_INFO.MAP_DATA} />
          </Map>
        </div>
      </ContentSection>

      <ContentSection title="연락처 정보">
        <ContactInfo />
      </ContentSection>

      {/* <ContentSection title="대중교통 이용안내">
        <TransportationGuide transportInfo={TRANSPORTATION_INFO} />
      </ContentSection> */}

      {/* <ContentSection title="운영시간">
        <OperatingHours />
      </ContentSection> */}
    </IntroduceContainer>
  );
};

export default DirectionsPage;
