import { Footer, PrePareModal } from "@lib/components";

const CostPage = () => {
  return (
    <section className="min-h-screen w-full flex flex-col">
      <div className="flex-1">
        <PrePareModal
          title="비용 안내"
          message="비용 안내 페이지를 준비 중입니다"
        />
      </div>
      <Footer />
    </section>
  );
};

export default CostPage;
