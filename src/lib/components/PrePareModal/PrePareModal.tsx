import { useNavigate } from "react-router";

import { COMPANY_INFO, ROUTE_PATH } from "@lib/constants";
import { Modal } from "@lib/layout";

import SimpleInfoTable from "../SimpleInfoTable/SimpleInfoTable";

import { motion } from "motion/react";

const TableRows = [{ label: "TEL", value: COMPANY_INFO.TEL }];

const PrePareModal = () => {
  const navigate = useNavigate();

  const handleBackToIntroduce = () => {
    navigate(ROUTE_PATH.INTRODUCE, {
      replace: true,
    });
  };

  return (
    <Modal
      isShow={true}
      onClose={handleBackToIntroduce}
      hideCloseIcon
    >
      <div className="w-[40rem] py-[1rem] flex flex-col items-center justify-center gap-[2rem]">
        <p className="text-[1.6rem] font-[700] text-center">현재 페이지를 준비 중 입니다.</p>
        <p className="text-[1.4rem] font-[500] text-center">문의사항은 아래 연락처를 통해 문의해주세요.</p>

        <SimpleInfoTable data={TableRows} />

        <motion.button
          className="w-[8rem] p-[0.8rem] bg-primary text-white text-[1.4rem] font-[700] rounded-[0.8rem] cursor-pointer"
          onClick={handleBackToIntroduce}
        >
          닫기
        </motion.button>
      </div>
    </Modal>
  );
};

export default PrePareModal;
