import Modal from 'react-modal';

Modal.setAppElement('#root');

type Props = {
  modalIsOpen: boolean;
  onCloseModal: () => void;
  children: React.ReactNode;
}

const CustomModal: React.FC<Props> = ({ modalIsOpen, onCloseModal, children }) => (
  <Modal
    isOpen={modalIsOpen}
    onRequestClose={onCloseModal}
    style={{
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
      overlay: {
        backgroundColor: "#000000a1"
      }
    }}
  >
    {children}
  </Modal>
);

export default CustomModal;
