import { useNavigate } from "react-router";

import { COMPANY_INFO, ROUTE_PATH } from "@lib/constants";
import { Modal } from "@lib/layout";

import SimpleInfoTable from "../SimpleInfoTable/SimpleInfoTable";

import { motion } from "motion/react";

interface PrePareModalProps {
  title?: string;
  message?: string;
  showContact?: boolean;
  expectedDate?: string;
}

const TableRows = [
  { label: "전화", value: COMPANY_INFO.TEL },
  { label: "이메일", value: COMPANY_INFO.EMAIL },
  { label: "팩스", value: COMPANY_INFO.FAX },
];

const PrePareModal = ({
  title = "페이지 준비 중",
  message = "현재 페이지를 준비 중입니다",
  showContact = true,
  expectedDate = "2025년 상반기",
}: PrePareModalProps) => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate(ROUTE_PATH.HOME, {
      replace: true,
    });
  };

  const handlePhoneContact = () => {
    window.location.href = `tel:${COMPANY_INFO.TEL.replace(/\s|-|\(|\)/g, "")}`;
  };

  const handleEmailContact = () => {
    window.location.href = `mailto:${COMPANY_INFO.EMAIL}`;
  };

  return (
    <Modal
      isShow={true}
      onClose={handleBackToHome}
      hideCloseIcon
    >
      <div className="w-full max-w-[50rem] p-[3rem] flex flex-col items-center justify-center gap-[3rem]">
        <div className="flex flex-col items-center gap-[1.5rem]">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="text-[4rem]"
          >
            🚧
          </motion.div>

          <h2 className="text-[2.4rem] font-[700] text-center text-gray-800">{title}</h2>

          <p className="text-[1.6rem] font-[500] text-center text-gray-600">{message}</p>
        </div>

        <div className="w-full p-[2rem] bg-gray-50 rounded-[1.2rem] flex flex-col gap-[1.5rem]">
          <p className="text-[1.4rem] font-[600] text-center text-gray-700">
            더 나은 서비스를 제공하기 위해 준비 중입니다.
            <br />
            빠른 시일 내에 만나뵙겠습니다.
          </p>

          {expectedDate && (
            <p className="text-[1.3rem] font-[500] text-center text-primary">예정: {expectedDate} 오픈 예정</p>
          )}
        </div>

        {showContact && (
          <div className="w-full flex flex-col gap-[2rem]">
            <div className="flex flex-col gap-[1rem]">
              <p className="text-[1.4rem] font-[600] text-center text-gray-700">문의사항이 있으시면 연락 주세요</p>
              <SimpleInfoTable data={TableRows} />
            </div>

            <div className="flex gap-[1rem] w-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 p-[1.2rem] bg-primary text-white text-[1.4rem] font-[700] rounded-[0.8rem] cursor-pointer"
                onClick={handlePhoneContact}
              >
                📞 전화 문의
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 p-[1.2rem] bg-gray-600 text-white text-[1.4rem] font-[700] rounded-[0.8rem] cursor-pointer"
                onClick={handleEmailContact}
              >
                ✉️ 이메일 문의
              </motion.button>
            </div>
          </div>
        )}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-[12rem] p-[1rem] border-2 border-gray-300 text-gray-700 text-[1.4rem] font-[700] rounded-[0.8rem] cursor-pointer hover:bg-gray-50"
          onClick={handleBackToHome}
        >
          홈으로 돌아가기
        </motion.button>
      </div>
    </Modal>
  );
};

export default PrePareModal;
