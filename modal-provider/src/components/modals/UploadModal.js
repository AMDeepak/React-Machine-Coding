// import { useModal } from "../../context/ModalContext";
import "../../App.css";

function UploadModal({ onClose, title }) {
  //   const { closeModal } = useModal();

  //   console.log({ modal, openModal });
  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
        <h1>{title}</h1>
        <p>Modal</p>
        <button onClick={onClose}>close Modal</button>
      </div>
    </div>
  );
}

export default UploadModal;
