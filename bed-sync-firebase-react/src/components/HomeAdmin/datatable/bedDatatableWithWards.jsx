import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useNavigate } from "react-router-dom";
import { bedColumns } from "../../datatableResource";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { db } from "../../firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import "./datatable.scss";
const BedDatatableWithWards = () => {
  const [data, setData] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedWardId, setSelectedWardId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch wards for dropdown
    const fetchWards = async () => {
      const wardCollection = collection(db, 'wards');
      const wardSnapshot = await getDocs(wardCollection);
      const wardList = wardSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setWards(wardList);
    };

    fetchWards();
  }, []);

  useEffect(() => {
    // Fetch beds based on the selected ward
    const fetchBeds = async () => {
      const bedsCollection = collection(db, "beds");
      let query = bedsCollection;

      if (selectedWardId) {
        query = query.where("wardId", "==", selectedWardId);
      }

      const unsub = onSnapshot(
        query,
        (snapShot) => {
          let list = [];
          snapShot.docs.forEach((doc) => {
            list.push({ id: doc.id, ...doc.data() });
          });
          setData(list);
        },
        (error) => {
          console.log(error);
        }
      );

      return () => {
        unsub();
      };
    };

    fetchBeds();
  }, [selectedWardId]);

  const handleDelete = async (id) => {
    try {
      // Delete the bed from the backend
      const response = await fetch(`http://localhost:8081/api/beds/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Failed to delete bed with ID ${id}`);
      }
  
      // Update the local state after successful deletion
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error deleting bed:', error.message);
      // Handle the error as needed
    }
  };
  

  const handleAddBed = () => {
    console.log("Selected Ward ID:", selectedWardId);

    if (!selectedWardId) {
      // Display a notification
      toast.error("Please select a ward before adding a bed.");
    } else {
      // Navigate to the "Add Bed" page
      navigate(`/AdminBeds/new/${selectedWardId}`);
    }
  };

  const bedActionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => (
        <div className="cellAction">
          <Link
            to={`/AdminBeds/${params.row.id}`}
            style={{ textDecoration: "none" }}
          >
            <div className="viewButton">View</div>
          </Link>
          <div
            className="deleteButton"
            onClick={() => handleDelete(params.row.id)}
          >
            Delete
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      <ToastContainer />
      <div className="datatable">
        <div className="datatableTitle">
          All Beds
          <div className="wardDropdown">
            <label htmlFor="wardId">Select Ward:</label>
            <select
              id="wardId"
              value={selectedWardId}
              onChange={(e) => setSelectedWardId(e.target.value)}
            >
              <option value="">All Wards</option>
              {wards.map((ward) => (
                <option key={ward.id} value={ward.id}>
                  {ward.name}
                </option>
              ))}
            </select>
          </div>
          <div className="link" onClick={handleAddBed}>
          Add Bed
        </div>
        </div>
        <DataGrid
          className="datagrid"
          rows={data}
          columns={bedColumns.concat(bedActionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
        />
      </div>
    </div>

  );
};



export default BedDatatableWithWards;
