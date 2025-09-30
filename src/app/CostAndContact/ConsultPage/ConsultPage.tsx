import { Footer, PrePareModal } from "@lib/components";

const ConsultPage = () => {
  return (
    <section className="min-h-screen w-full flex flex-col">
      <div className="flex-1">
        <PrePareModal
          title="상담 신청"
          message="상담 신청 페이지를 준비 중입니다"
        />
      </div>
      <Footer />
    </section>
  );
};

export default ConsultPage;
