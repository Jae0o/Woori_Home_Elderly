import { Breadcrumb, ContentSection, Footer, PageHero } from "@lib/components";

import { ApplicationInfoSection, GradeProcessTimeline, GuideStepCards } from "./components";
import { useGuideData } from "./hooks";

const GuidePage = () => {
  const { usageSteps, applicationInfo, gradeProcess, gradeResult } = useGuideData();

  const breadcrumbItems = [
    { label: "홈", href: "/" },
    { label: "비용 및 상담", href: "/cost-and-contact/guide" },
    { label: "이용안내", href: "/cost-and-contact/guide" },
  ];

  return (
    <section className="min-h-screen w-full flex flex-col">
      <div className="flex-1">
        <Breadcrumb items={breadcrumbItems} />

        <div className="w-full pb-[20rem] flex flex-col items-center">
          <PageHero
            title="이용안내"
            subtitle="Usage Guide"
          />

          <ContentSection
            title="재가복지센터 이용안내"
            maxWidth="100rem"
          >
            <GuideStepCards steps={usageSteps} />
          </ContentSection>

          <ContentSection
            title="장기요양인정 신청안내"
            maxWidth="100rem"
          >
            <ApplicationInfoSection data={applicationInfo} />
          </ContentSection>

          <ContentSection
            title="등급판정 절차"
            maxWidth="100rem"
          >
            <GradeProcessTimeline
              steps={gradeProcess}
              result={gradeResult}
            />
          </ContentSection>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default GuidePage;
