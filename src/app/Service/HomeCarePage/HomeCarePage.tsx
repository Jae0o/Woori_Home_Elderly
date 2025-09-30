import { Footer, PrePareModal } from "@lib/components";

const HomeCarePage = () => {
  return (
    <section className="min-h-screen w-full flex flex-col">
      <div className="flex-1">
        <PrePareModal
          title="방문요양 서비스 안내"
          message="방문요양 서비스 안내 페이지를 준비 중입니다"
        />
      </div>
      <Footer />
    </section>
  );
};

export default HomeCarePage;
