import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const ClientModal = ({ modalShow, setModalShow }) => {
  //   console.log({modalShow12: modalShow});
  return (
    <Modal
      isOpen={modalShow}
      onRequestClose={() => setModalShow(false)}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <button onClick={() => setModalShow(false)}>close</button>
      <div>I am a modal</div>
      <form>
        <input />
        <button>tab navigation</button>
        <button>stays</button>
        <button>inside</button>
        <button>the modal</button>
      </form>
    </Modal>
  );
};

export default ClientModal;
