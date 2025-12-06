import { Breadcrumb, ContentSection, Footer, PageHero } from "@lib/components";

import { CostChargeTable, CostProcessCards } from "./components";
import { useCostData } from "./hooks";

const CostPage = () => {
  const { costProcessSteps, costChargeTable } = useCostData();

  const breadcrumbItems = [
    { label: "홈", href: "/" },
    { label: "비용 및 상담", href: "/cost-and-contact/guide" },
    { label: "비용 안내", href: "/cost-and-contact/cost" },
  ];

  return (
    <section className="min-h-screen w-full flex flex-col">
      <div className="flex-1">
        <Breadcrumb items={breadcrumbItems} />

        <div className="w-full pb-[20rem] flex flex-col items-center">
          <PageHero
            title="비용 안내"
            subtitle="Cost Guide"
          />

          <ContentSection
            title="재가복지센터 비용안내"
            maxWidth="100rem"
          >
            <CostProcessCards steps={costProcessSteps} />
          </ContentSection>

          <ContentSection
            title="이용요금 (1일당 본인부담금)"
            maxWidth="100rem"
          >
            <CostChargeTable data={costChargeTable} />
          </ContentSection>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default CostPage;
