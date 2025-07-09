import React from 'react';
import Modal from 'react-modal';

interface JackpotModalProps {
  amount: number | null;
  onClose: () => void;
}

const JackpotModal: React.FC<JackpotModalProps> = ({ amount, onClose }) => {
  return (
    <Modal isOpen={amount !== null} onRequestClose={onClose} ariaHideApp={false}>
      <h2>{amount ? `Jackpot! +€${amount}` : 'Missed'}</h2>
    </Modal>
  );
};

export default JackpotModal;
