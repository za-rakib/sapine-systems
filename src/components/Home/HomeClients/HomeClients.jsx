import React, { useState } from "react";
import classes from "./HomeClients.module.css";
import { BsSearch, BsPlusCircle } from "react-icons/bs";
import { GoKebabVertical } from "react-icons/go";
import ClientModal from "../ClientModal/ClientModal";
import { useMutation, useQuery } from "@apollo/client";
import { getALLClient } from "../../../Graphql/Client/Query";
import { Menu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Table } from "react-bootstrap";
import { DELETE_POST } from "../../../Graphql/Client/Mutation";
import UpdateModal from "../UpdateModal/UpdateModal";
import View from "../View/View";
import dayjs from "dayjs";

const HomeClients = () => {
  const [modalShow, setModalShow] = useState(false);
  const [updateModalShow, setUpdateModalShow] = useState(false);
  const [viewModalShow, setViewModalShow] = useState(false);
  const { loading, error, data } = useQuery(getALLClient);
  const [rowData, setRowData] = useState({});

  if (loading) return "Loading";
  if (error) return "error";
  console.log({ data });
  return (
    <div className={classes.homeClients}>
      <h1>Clients</h1>
      <ClientHeader setModalShow={setModalShow} />
      <ClientModal modalShow={modalShow} setModalShow={setModalShow} />
      <UpdateModal
        updateModalShow={updateModalShow}
        setUpdateModalShow={setUpdateModalShow}
        rowData={rowData}
      />
      <View
        viewModalShow={viewModalShow}
        setViewModalShow={setViewModalShow}
        rowData={rowData}
      />
      <ClientsTable
        data={data}
        setUpdateModalShow={setUpdateModalShow}
        setRowData={setRowData}
        setViewModalShow={setViewModalShow}
      />
    </div>
  );
};

const ClientHeader = ({ setModalShow }) => (
  <div className={classes.clientHeader}>
    <div className={classes.clientHeaderLeft}>
      <BsSearch className={classes.clientHeaderLeftIcon} />
      <input type="text" className={classes.clientHeaderInput} />
    </div>
    <div className={classes.clientHeaderRight}>
      <button
        className={classes.clientHeaderRightButton}
        onClick={() => setModalShow(true)}
      >
        <h5 className={classes.clientHeaderRightButtonText}> Add Lead</h5>
        <BsPlusCircle className={classes.clientHeaderRightButtonIcon} />
      </button>
    </div>
  </div>
);

//table
const ClientsTable = ({
  data,
  setUpdateModalShow,
  setRowData,
  setViewModalShow,
}) => {
  const [deleteClient, { error }] = useMutation(DELETE_POST);
  const handleRemove = (id) => {
    console.log({ error });
    deleteClient({
      variables: {
        id: id,
      },
      onCompleted: (res) => {
        if (res) window.location.reload();
      },
    });
  };

  return (
    <Table className={classes.table}>
      <thead className={classes.tableHeader}>
        <tr>
          <th>Lead Data</th>
          <th>Name</th>
          <th>Number</th>
          <th>Email</th>
          <th>Source</th>
          <th>Last Update</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody className={classes.tableBody}>
        {data.getAllClient.map((client, index) => {
          return (
            <tr className={classes.dataRow} key={index}>
              <td>
                {dayjs(client.createdAt).format("MMM-DD-YYYY")}
                <p>{dayjs(client.createdAt).format("Z-A")}</p>
              </td>
              <td>{client.name}</td>
              <td>{client.number}</td>
              <td>{client.email}</td>
              <td>{client.source}</td>
              <td>
                {dayjs(client.updatedAt).format("MMM-DD-YYYY")}
                <p>{dayjs(client.updatedAt).format("Z-A")}</p>
              </td>
              <td>
                <button className={classes.statusButton}>
                  {client.status}
                </button>
              </td>
              <td>
                <Menu
                  menuButton={
                    <div>
                      <GoKebabVertical />
                    </div>
                  }
                >
                  <MenuItem
                    onClick={() => {
                      setUpdateModalShow(true);
                      setRowData(client);
                    }}
                  >
                    Edit
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setViewModalShow(true);
                      setRowData(client);
                    }}
                  >
                    View
                  </MenuItem>
                  <MenuItem onClick={() => handleRemove(client.id)}>
                    Delete
                  </MenuItem>
                </Menu>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default HomeClients;
