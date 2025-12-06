import { ServiceContainer } from "@app/Service/components";

import { Breadcrumb, ContentSection, PageHero, SimpleInfoTable } from "@lib/components";

import { HomeCareGuide, HomeCareIntroduction } from "./components";
import { useHomeCareData } from "./hooks";

const HomeCarePage = () => {
  const { introduction, guideTable, detailedServices } = useHomeCareData();

  const breadcrumbItems = [
    { label: "홈", href: "/" },
    { label: "서비스 안내", href: "/service/insurance" },
    { label: "방문요양", href: "/service/home-care" },
  ];

  const transformedGuideData = guideTable.sections.map(section => ({
    title: section.title,
    content: section.items.map(item => item.value),
  }));

  return (
    <ServiceContainer>
      <Breadcrumb items={breadcrumbItems} />

      <div className="w-full pb-[20rem] flex flex-col items-center">
        <PageHero
          title="방문요양서비스"
          subtitle="Home Visit Care Service"
        />

        <ContentSection
          title={introduction.title}
          maxWidth="100rem"
        >
          <HomeCareIntroduction content={introduction.content} />
        </ContentSection>

        <ContentSection
          title="이용안내"
          maxWidth="100rem"
        >
          <HomeCareGuide guideData={transformedGuideData} />
        </ContentSection>

        <ContentSection
          title="1) 서비스 소개"
          maxWidth="100rem"
        >
          <SimpleInfoTable
            data={detailedServices.serviceIntroduction}
            tableMaxWidth="100rem"
            labelWidth="20rem"
            enableMobileCard={true}
            variant="detailed"
          />
        </ContentSection>

        <ContentSection
          title="2) 인지활동 방문요양 서비스"
          maxWidth="100rem"
        >
          <SimpleInfoTable
            data={detailedServices.cognitiveActivityService}
            tableMaxWidth="100rem"
            labelWidth="20rem"
            enableMobileCard={true}
            variant="detailed"
          />
        </ContentSection>

        <ContentSection
          title="3) 가족인 요양보호사의 방문요양(가족요양) 서비스"
          maxWidth="100rem"
        >
          <SimpleInfoTable
            data={detailedServices.familyCareService}
            tableMaxWidth="100rem"
            labelWidth="20rem"
            enableMobileCard={true}
            variant="detailed"
          />
        </ContentSection>

        <ContentSection
          title="4) 추가 서비스"
          maxWidth="100rem"
        >
          <SimpleInfoTable
            data={detailedServices.additionalServices}
            tableMaxWidth="100rem"
            labelWidth="20rem"
            enableMobileCard={true}
            variant="detailed"
          />
        </ContentSection>
      </div>
    </ServiceContainer>
  );
};

export default HomeCarePage;
