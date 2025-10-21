import { Breadcrumb, ContentSection, PageHero } from "@app/Introduce/components";
import { ServiceContainer } from "@app/Service/components";

import { SimpleInfoTable } from "@lib/components";
import { ROUTE_PATH } from "@lib/constants";
import { useScrollAnimation } from "@lib/hooks";

import { InsuranceIntroduction, InsurancePolicyCards, InsuranceQualification } from "./components";
import { useInsuranceData } from "./hooks";

import { motion } from "motion/react";

const InsurancePage = () => {
  const { introduction, qualification, policyCards, gradeTable } = useInsuranceData();

  const {
    ref: tableRef,
    variants: tableVariants,
    transition: tableTransition,
    isInView: isTableInView,
  } = useScrollAnimation({
    type: "fade",
    threshold: 0.2,
  });

  const breadcrumbItems = [
    { label: "홈", path: ROUTE_PATH.HOME },
    { label: "주요 서비스", path: "/service" },
    { label: "노인장기요양보험" },
  ];

  return (
    <ServiceContainer>
      <Breadcrumb items={breadcrumbItems} />
      <div className="w-full pb-[20rem] flex flex-col items-center">
        <PageHero
          title="노인장기요양보험"
          subtitle="Long Term Care Insurance"
        />

        {/* Section 1: 소개 (white) */}

        <ContentSection title={introduction.title}>
          <InsuranceIntroduction content={introduction.content} />
        </ContentSection>

        {/* Section 2: 적용 (gray) */}

        <ContentSection title={qualification.title}>
          <InsuranceQualification {...qualification} />
        </ContentSection>

        {/* Section 3: 서비스 대상 (white) */}

        <ContentSection title={policyCards.title}>
          <InsurancePolicyCards cards={policyCards.cards} />
        </ContentSection>

        {/* Section 4: 등급판정 기준 (gray) - SimpleInfoTable 활용 */}

        <ContentSection title={gradeTable.title}>
          <motion.div
            ref={tableRef as React.RefObject<HTMLDivElement>}
            initial="hidden"
            animate={isTableInView ? "visible" : "hidden"}
            variants={tableVariants}
            transition={tableTransition}
            className="w-full flex justify-center"
          >
            <SimpleInfoTable
              data={gradeTable.rows}
              tableMaxWidth="100rem"
              labelWidth="12rem"
            />
          </motion.div>
        </ContentSection>
      </div>
    </ServiceContainer>
  );
};

export default InsurancePage;
