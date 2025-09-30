import { useNavigate } from "react-router";

import { Footer } from "@lib/components";
import { ROUTE_PATH } from "@lib/constants";

import { motion } from "motion/react";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate(ROUTE_PATH.HOME, { replace: true });
  };

  return (
    <section className="min-h-screen w-full flex flex-col">
      <div className="flex-1 w-full flex flex-col items-center justify-center gap-[3rem] p-[4rem]">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="text-[8rem]"
        >
          🔍
        </motion.div>

        <div className="flex flex-col items-center gap-[1.5rem]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[4rem] font-[800] text-gray-800"
          >
            404
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-[2.4rem] font-[700] text-gray-700"
          >
            페이지를 찾을 수 없습니다
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-[1.6rem] text-gray-600 text-center"
          >
            요청하신 페이지가 존재하지 않거나 이동되었습니다.
            <br />
            주소를 다시 확인해 주시거나 홈으로 돌아가 주세요.
          </motion.p>
        </div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-[3rem] py-[1.5rem] bg-primary text-white text-[1.6rem] font-[700] rounded-[1rem] cursor-pointer hover:shadow-lg transition-shadow"
          onClick={handleGoHome}
        >
          홈으로 돌아가기
        </motion.button>
      </div>

      <Footer />
    </section>
  );
};

export default NotFoundPage;
