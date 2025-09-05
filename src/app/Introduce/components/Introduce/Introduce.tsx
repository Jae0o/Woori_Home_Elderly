import { twMerge } from "tailwind-merge";

const normal_text = "w-full max-w-[50rem] text-[1.8rem] font-[500]";

const Introduce = () => {
  return (
    <article className="w-full p-[2rem] py-[10rem] flex flex-col items-center justify-center gap-[3.2rem] break-keep text-center">
      <h1 className="text-[3.2rem] font-[700]">
        <strong className="text-primary">우리</strong>재가노인복지센터
      </h1>

      <span className={twMerge(normal_text, "flex flex-col gap-[1.6rem] items-center justify-center")}>
        <p>방문해주신 여러분을 진심으로 환영합니다!</p>

        <p>
          우리재가노인복지센터는 어르신들이 정든 내 집에서 편안하고 행복한 노후를 보내실 수 있도록 늘 곁에서 최선을
          다하고 있습니다.
        </p>

        <p>
          전문적인 요양보호사들이 어르신의 상태와 필요에 맞는 맞춤 돌봄 서비스를 제공하며, 등급신청부터 가족요양상담까지
          든든한 동반자가 되어 드리겠습니다.
        </p>
      </span>

      <p className="text-[2rem] font-[700] text-primary">“늘 곁에서 함께, 우리가 만드는 행복한 노년”</p>

      <p className={normal_text}>
        따뜻한 마음과 공경의 자세로 어르신들을 '우리가족'처럼 모시며, 어르신께는 존엄한 삶을, 가족분들께는 든든한 믿음을
        드리는 최고의 서비스를 약속합니다.
      </p>

      <span className={twMerge("text-[2rem]", "flex flex-col gap-[0.4rem] items-center justify-center")}>
        <p>우리재가노인복지센터</p>
        <p>
          센터장 <strong className="tracking-[0.2em] font-[700]">장은숙</strong> 드림
        </p>
      </span>
    </article>
  );
};

export default Introduce;
