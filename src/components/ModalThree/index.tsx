import React from "react";
import CustomModal from "../Modal";

type ModalThreeProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ModalThree: React.FC<ModalThreeProps> = ({ isOpen, onClose }) => {
  return (
    <CustomModal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-lg font-bold">Este é o Modal 3</h2>
      <p>Mais um conteúdo especial para o terceiro modal.</p>
    </CustomModal>
  );
};

export default ModalThree;