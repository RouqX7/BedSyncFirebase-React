export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "address",
    headerName: "Address",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];


export const wardColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Ward Name",
    width: 230,
  },
  {
    field: "wardType",
    headerName: "Ward Type",
    width: 230,
  },
  {
    field: "capacity",
    headerName: "Capacity",
    width: 100,
  },
  {
    field: "description",
    headerName: "Description",
    width: 160,
  },
  {
    field: "currentOccupancy",
    headerName: "Current Occupancy",
    width: 160,
  },
  {
    field: "responsibleDepartment",
    headerName: "Responsible Department",
    width: 200,
  },
  {
    field: "totalBeds",
    headerName: "Total Beds",
    width: 120,
  },
  {
    field: "availableBeds",
    headerName: "Available Beds",
    width: 140,
  },
  {
    field: "timestamp",
    headerName: "Timestamp",
    width: 200,
  },
];

export const bedColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "wardId",
    headerName: "Ward ID",
    width: 150,
  },
  {
    field: "isAvailable",
    headerName: "Available",
    width: 120,
  },
  {
    field: "bedNumber",
    headerName: "Bed Number",
    width: 150,
  },
  {
    field: "bedType",
    headerName: "Bed Type",
    width: 120,
  },
  {
    field: "state",
    headerName: "Bed State",
    width: 150,
  },
  {
    field: "patientId",
    headerName: "Patient ID",
    width: 150,
  },
  {
    field: "timestamp",
    headerName: "Timestamp",
    width: 200,
  },
  
];

export const PatientColumns = [
  {
    field: "firstName",
    headerName: "First Name",
    width: 150,
  },
  {
    field: "lastName",
    headerName: "Last Name",
    width: 150,
  },
  {
    field: "dateOfBirth",
    headerName: "Date of Birth",
    width: 150,
  },
  {
    field: "contactInformation",
    headerName: "Contact Information",
    width: 200,
  },
  {
    field: "medicalHistory",
    headerName: "Medical History",
    width: 200,
  },
  {
    field: "admissionHistory",
    headerName: "Admission History",
    width: 200,
  },
  {
    field: "timestamp",
    headerName: "Timestamp",
    width: 200,
  },
];


