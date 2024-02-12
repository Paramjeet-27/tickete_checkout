import Modal from "react-bootstrap/Modal";
// import styles from "./CustomModal.module.css";

const CustomModal = ({ title, children, show, onCloseHandler }) => {
  return (
    <>
      <Modal show={show} onHide={onCloseHandler}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
};
export default CustomModal;
