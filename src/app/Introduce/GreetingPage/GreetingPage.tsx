import { IntroduceImage } from "@lib/assets";
import { LoadingSpinner } from "@lib/components";
import { ROUTE_PATH } from "@lib/constants";
import { useImagePreload } from "@lib/hooks";

import { IntroduceContainer, useIntroduceData } from "../IntroduceContainer";
import { Breadcrumb, ContentSection, PageHero } from "../components";
import { CEOGreeting, CoreValuesGrid, HistoryTimeline, VisionMissionCards } from "./components";

const GreetingPage = () => {
  const { isLoaded } = useImagePreload(IntroduceImage);
  const { greeting, vision, mission, coreValues, history } = useIntroduceData();

  if (!isLoaded) {
    return (
      <IntroduceContainer>
        <div className="w-full h-[60vh] flex items-center justify-center">
          <LoadingSpinner size="6rem" />
        </div>
      </IntroduceContainer>
    );
  }

  const breadcrumbItems = [
    { label: "홈", path: ROUTE_PATH.HOME },
    { label: "센터 소개", path: "/introduce" },
    { label: "인사말" },
  ];

  return (
    <IntroduceContainer>
      <Breadcrumb items={breadcrumbItems} />

      <PageHero
        title={greeting.title}
        subtitle="어르신의 행복한 노후를 위해 함께합니다"
        backgroundImage={IntroduceImage}
        height="50vh"
      />

      <ContentSection>
        <CEOGreeting
          ceoName={greeting.ceoName}
          messages={greeting.messages}
          closingMessage={greeting.closingMessage}
        />
      </ContentSection>

      <ContentSection title="비전 & 미션">
        <VisionMissionCards
          vision={vision}
          mission={mission}
        />
      </ContentSection>

      <ContentSection title="핵심가치">
        <CoreValuesGrid coreValues={coreValues} />
      </ContentSection>

      <ContentSection title="센터 연혁">
        <HistoryTimeline history={history} />
      </ContentSection>
    </IntroduceContainer>
  );
};

export default GreetingPage;
