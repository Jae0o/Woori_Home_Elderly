import type { MouseEvent } from "react";

import type { useAwayClickModalCallback } from "./useClickAwayModal.type";

const useClickAwayModal = (onClose: useAwayClickModalCallback) => {
  const handleCloseModal = ({ target, currentTarget }: MouseEvent) => {
    if (target !== currentTarget) {
      return;
    }

    onClose();
  };

  return handleCloseModal;
};

export default useClickAwayModal;
