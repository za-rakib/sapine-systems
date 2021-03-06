import React, { useState } from "react";
import Modal from "react-modal";
import "./ClientModal.css";
import { useMutation } from "@apollo/client";
import { ADD_CLIENT } from "../../../Graphql/Client/Mutation";
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
  const [data, setData] = useState(null);
  const [addClient, { error }] = useMutation(ADD_CLIENT);
  if (error) return "error";

  const onChange = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  //console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    addClient({
      variables: {
        name: data.name,
        number: data.number,
        email: data.email,
        source: data.source,
        status: data.status,
      },
      onCompleted: (res) => {
        if (res) window.location.reload();
      },
    });
  };

  return (
    <Modal
      isOpen={modalShow}
      onRequestClose={() => setModalShow(false)}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <form className="modalFrom">
        <select
          name="status"
          defaultValue="new"
          onChange={onChange}
          className="input"
        >
          <option value="new">New</option>
          <option value="old">Old</option>
        </select>
        <select
          name="source"
          onChange={onChange}
          className="input"
          defaultValue="facebook"
        >
          <option value="facebook">Facebook</option>
          <option value="google">Google</option>
          <option value="instagram">Instagram</option>
          <option value="linkedin">Linkedin</option>
        </select>
        <input
          type="text"
          name="name"
          className="input"
          placeholder="Name"
          onChange={onChange}
        />
        <input
          type="text"
          className="input"
          name="email"
          placeholder="Email"
          onChange={onChange}
        />

        <input
          type="text"
          className="input"
          name="number"
          placeholder="Number"
          onChange={onChange}
        />
        <button onClick={handleSubmit}>Add Client</button>
      </form>
    </Modal>
  );
};

export default ClientModal;
