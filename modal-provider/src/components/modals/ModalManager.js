import { useModal } from "../../context/ModalContext";
import UploadModal from "./UploadModal";

const LookUpModal = {
  uploadModal: UploadModal,
};
export const ModalManager = () => {
  const { modal, closeModal } = useModal();

  if (!modal) {
    return null;
  }

  const MODAL = LookUpModal[modal.name];

  return <MODAL onClose={closeModal} {...modal.props} />;
};
