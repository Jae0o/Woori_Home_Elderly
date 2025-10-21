import { ServiceContainer } from "@app/Service/components";

import { Breadcrumb, ContentSection, PageHero, SimpleInfoTable } from "@lib/components";

import { HomeCareGuide, HomeCareIntroduction, HomeCareServiceCharge } from "./components";
import { useHomeCareData } from "./hooks";

const HomeCarePage = () => {
  const { introduction, guideTable, serviceChargeTable, detailedServices } = useHomeCareData();

  const breadcrumbItems = [
    { label: "홈", href: "/" },
    { label: "서비스 안내", href: "/service/insurance" },
    { label: "방문요양", href: "/service/home-care" },
  ];

  const transformedGuideData = guideTable.sections.map(section => ({
    title: section.title,
    content: section.items.map(item => item.value),
  }));

  const transformedChargeData = {
    rows: serviceChargeTable.rows.map(row => ({
      duration: row.구분,
      benefit: row.급여원,
      burden15: row.본인부담금_15,
      burden9: row.본인부담금_9,
      burden6: row.본인부담금_6,
    })),
    footerNote: serviceChargeTable.footer,
  };

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
          title={serviceChargeTable.title}
          maxWidth="100rem"
        >
          <HomeCareServiceCharge chargeData={transformedChargeData} />
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
      </div>
    </ServiceContainer>
  );
};

export default HomeCarePage;
