import { useCallback, useState } from "react";

const useModal = () => {
  const [isShow, setIsShow] = useState(false);

  const openModal = useCallback(() => {
    setIsShow(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsShow(false);
  }, []);

  return [isShow, openModal, closeModal] as const;
};

export default useModal;
