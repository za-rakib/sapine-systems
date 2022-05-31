import React, { useState } from "react";
import Modal from "react-modal";
import { Form } from "react-bootstrap";
import { UPDATE_CLIENT } from "../../../Graphql/Client/Mutation";
import { useMutation } from "@apollo/client";
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
const UpdateModal = ({ updateModalShow, setUpdateModalShow, rowData }) => {
  const [data, setData] = useState(null);
  //console.log({ editData });
  const [updateClient, { error }] = useMutation(UPDATE_CLIENT);
    if (error) return "error";

  const onChange = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  //console.log(data);
  const handleSubmit = (id) => {
    updateClient({
      variables: {
        id: id,
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
      isOpen={updateModalShow}
      onRequestClose={() => setUpdateModalShow(false)}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <Form className="modalFrom">
        <select
          name="status"
          defaultValue={rowData.status}
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
          defaultValue={rowData.source}
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
          placeholder={rowData.name}
          onChange={onChange}
        />
        <input
          type="text"
          className="input"
          name="email"
          placeholder={rowData.email}
          onChange={onChange}
        />

        <input
          type="text"
          className="input"
          name="number"
          placeholder={rowData.number}
          onChange={onChange}
        />
        <button onClick={() => handleSubmit(rowData.id)}>Edit Client</button>
      </Form>
    </Modal>
  );
};

export default UpdateModal;
