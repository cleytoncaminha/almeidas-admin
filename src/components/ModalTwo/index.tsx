import React from "react";
import CustomModal from "../Modal";

type ModalTwoProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ModalTwo: React.FC<ModalTwoProps> = ({ isOpen, onClose }) => {
  return (
    <CustomModal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-lg font-bold">Este é o Modal 2</h2>
      <p>Outro conteúdo diferente para o segundo modal.</p>
    </CustomModal>
  );
};

export default ModalTwo;