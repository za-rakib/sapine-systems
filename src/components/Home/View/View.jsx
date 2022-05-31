import React from "react";
import { Card, ListGroup } from "react-bootstrap";
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


const View = ({ viewModalShow, setViewModalShow, rowData }) => {
  return (
    <Modal
      isOpen={viewModalShow}
      onRequestClose={() => setViewModalShow(false)}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <Card style={{ width: "25rem" }}>
        <Card.Header
          style={{ fontSize: "30px", color: "#2d2b52", textAlign: "center" }}
        >
          Client Data
        </Card.Header>
        <ListGroup variant="flush">
          <Card.Text>Name: {rowData.name}</Card.Text>
          <Card.Text>Email: {rowData.email}</Card.Text>
          <Card.Text>Number: {rowData.number}</Card.Text>
          <Card.Text> Status: {rowData.status}</Card.Text>
          <Card.Text> Source: {rowData.source}</Card.Text>
        </ListGroup>
      </Card>
    </Modal>
  );
};

export default View;
