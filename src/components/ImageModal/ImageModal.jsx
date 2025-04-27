import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onClose, photo }) {
  return (
    <>
      <Modal
        className={css.modal}
        overlayClassName={css.overlay}
        isOpen={isOpen}
        onRequestClose={onClose}
      >
        <div>
          <img
            className={css.img}
            src={photo.urls.regular}
            alt={photo.description}
          />
          <p className={css.text}>{photo.description}</p>
          <p className={css.text}>Likes: {photo.likes}</p>
          <p className={css.text}>Author: {photo.user.name}</p>
        </div>

        <button className={css.closeBtn} type="button" onClick={onClose}>
          <IoClose size={30} />
        </button>
      </Modal>
    </>
  );
}
