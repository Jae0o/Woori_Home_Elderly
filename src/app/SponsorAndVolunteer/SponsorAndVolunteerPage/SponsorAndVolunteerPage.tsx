import { Breadcrumb, ContentSection, Footer, PageHero, SectionHeader } from "@lib/components";

import {
  SponsorMethodInfo,
  SponsorTypeCards,
  VolunteerActivityTable,
  VolunteerScheduleInfo,
  VolunteerStepCards,
} from "./components";
import { useSponsorVolunteerData } from "./hooks";

const SponsorAndVolunteerPage = () => {
  const { sponsorTypes, sponsorMethods, volunteerSteps, volunteerSchedule, volunteerActivities } =
    useSponsorVolunteerData();

  const breadcrumbItems = [
    { label: "홈", href: "/" },
    { label: "후원 및 자원봉사", href: "/sponsor-and-volunteer" },
  ];

  return (
    <section className="min-h-screen w-full flex flex-col">
      <div className="flex-1">
        <Breadcrumb items={breadcrumbItems} />

        <div className="w-full pb-[20rem] flex flex-col items-center">
          <PageHero
            title="후원 및 자원봉사"
            subtitle="Sponsorship & Volunteer"
          />

          {/* 후원 섹션 */}
          <SectionHeader
            title="후원"
            subtitle="Sponsorship"
            showDivider={false}
          />

          <ContentSection
            title="후원의 종류"
            maxWidth="100rem"
          >
            <SponsorTypeCards types={sponsorTypes} />
          </ContentSection>

          <ContentSection
            title="후원의 방법"
            maxWidth="100rem"
          >
            <SponsorMethodInfo methods={sponsorMethods} />
          </ContentSection>

          {/* 자원봉사 섹션 */}
          <SectionHeader
            title="자원봉사"
            subtitle="Volunteer"
          />

          <ContentSection
            title="참여방법"
            maxWidth="100rem"
          >
            <VolunteerStepCards steps={volunteerSteps} />
          </ContentSection>

          <ContentSection
            title="활동 및 예약시간"
            maxWidth="100rem"
          >
            <VolunteerScheduleInfo schedule={volunteerSchedule} />
          </ContentSection>

          <ContentSection
            title="자원봉사 활동 내용"
            maxWidth="100rem"
          >
            <VolunteerActivityTable activities={volunteerActivities} />
          </ContentSection>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default SponsorAndVolunteerPage;
