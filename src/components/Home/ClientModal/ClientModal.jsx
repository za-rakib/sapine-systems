import React from "react";
import Modal from "react-modal";
import Form from "@rjsf/core";

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

const schema = {
  title: "LEAD",
  type: "object",
  required: ["name", "email"],
  properties: {
    Status: {
      type: "string",
      enum: ["New", "Old"],
      default: "New",
    },
    Source: {
      type: "string",
      enum: ["Website", "Facebook", "Youtube"],
      default: "Website",
    },
    name: {
      type: "string",
      title: "Name",
      default: "Jack",
    },

    number: {
      type: "string",
      title: "Number",
      minLength: 10,
    },
    email: {
      type: "string",
      title: "Email",
      default: "email",
    },
  },
};
Modal.setAppElement("#root");

const ClientModal = ({ modalShow, setModalShow }) => {
  const formData = (type) => console.log.bind(type);
  //   console.log({modalShow12: modalShow});
  return (
    <Modal
      isOpen={modalShow}
      onRequestClose={() => setModalShow(false)}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {/* <button onClick={() => setModalShow(false)}>close</button> */}
      <Form
        schema={schema}
        onChange={formData("changed")}
        onSubmit={formData("submitted")}
        onError={formData("errors")}
      />
    </Modal>
  );
};

export default ClientModal;
