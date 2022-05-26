import React, { useState } from "react";
import classes from "./HomeClients.module.css";
import { Table } from "react-bootstrap";
import { BsSearch, BsPlusCircle } from "react-icons/bs";
import ClientModal from "../ClientModal/ClientModal";

const HomeClients = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className={classes.homeClients}>
      <h1>Clients</h1>
      <ClientHeader setModalShow={setModalShow} />
      <ClientModal modalShow={modalShow} setModalShow={setModalShow} />
      <ClientsTable />
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
      <button className={classes.clientHeaderRightButton} onClick={()=>setModalShow(true)}>
        <h5 className={classes.clientHeaderRightButtonText}> Add Lead</h5>
        <BsPlusCircle className={classes.clientHeaderRightButtonIcon} />
      </button>
    </div>
  </div>
);

//table
const ClientsTable = () => (
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
      <tr className={classes.dataRow}>
        <td>
          May 28 2021
          <p>9.00 AM</p>
        </td>
        <td>Zubayer</td>
        <td>909860986</td>
        <td>zubayer@gmail.com</td>
        <td>Website</td>
        <td>jun 27 2022</td>
        <td>
          <button>New</button>
        </td>
      </tr>
      <tr className={classes.dataRow}>
        <td>
          May 28 2021
          <p>9.00 AM</p>
        </td>
        <td>Zubayer</td>
        <td>909860986</td>
        <td>zubayer@gmail.com</td>
        <td>Website</td>
        <td>jun 27 2022</td>
        <td>
          <button>New</button>
        </td>
      </tr>
      <tr>
        <td>
          May 28 2021
          <p>9.00 AM</p>
        </td>
        <td>Zubayer</td>
        <td>909860986</td>
        <td>zubayer@gmail.com</td>
        <td>Website</td>
        <td>jun 27 2022</td>
        <td>
          <button>New</button>
        </td>
      </tr>
    </tbody>
  </Table>
);
export default HomeClients;
