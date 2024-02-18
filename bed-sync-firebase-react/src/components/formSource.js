export const userInputs = [
  {
    id: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "John ",
  },
  {
    id: "lastname",
    label: "Last Name",
    type: "text",
    placeholder: "Doe ",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "john_doe@gmail.com",
  },
  {
    id: "password",
    label: "Password",
    type: "password",
  },
{
  id: "roles",
  label: "Role",
  type: "text", 
  placeholder: "Enter role(s)",
},

  {
    id: "phoneNumber",
    label: "Phone",
    type: "tel",
    placeholder: "+1 234 567 89",
  },
  {
    id: "securityQuestion",
    label: "Security Question",
    type: "text",
    placeholder: "Question",
  },
  {
    id: "securityAnswer",
    label: "Answer",
    type: "text",
    placeholder: "Answer",
  },
  {
    id: "permissions",
    label: "Permissions",
    type: "text",
    placeholder: "Permissions",
  },
];

// Ward Inputs
export const wardInputs = [
  {
    id: "name",
    label: "Ward Name",
    type: "text",
    placeholder: "General Ward",
  },
  {
    id: "wardType",
    label: "Ward Type",
    type: "select",
    options: ["General Ward", "ICU", "Maternity Ward", "Pediatric Ward", /* Add more ward types as needed */],
    placeholder: "Select Ward Type",
  },
  {
    id: "description",
    label: "Ward Description",
    type: "text",
    placeholder: "Description",
  },
  {
    id: "responsibleDepartment",
    label: "Responsible Department",
    type: "text",
    placeholder: "Department",
  },
  {
    id: "capacity",
    label: "Capacity",
    type: "number",
    placeholder: "Enter capacity",
  },
  {
    id: "totalBeds",
    label: "Total Beds",
    type: "number",
    placeholder: "Enter total beds",
  },
  {
    id: "currentOccupancy",
    label: "Current Occupancy",
    type: "number",
    placeholder: "Enter current occupancy",
  },
  {
    id: "availableBeds",
    label: "Available Beds",
    type: "number",
    placeholder: "Enter available beds",
  },
];


// Bed Inputs
export const bedInputs = [
  {
    id: "bedNumber",
    label: "Bed Number",
    type: "text",
    placeholder: "001",
  },
  {
    id: "bedType",
    label: "Bed Type",
    type: "text",
    placeholder: "Single",
  },

];
// Generic Patient Inputs (Modify as needed)
export const patientInputs = [
  {
    id: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "John",
  },
  {
    id: "lastName",
    label: "Last Name",
    type: "text",
    placeholder: "Doe",
  },
  {
    id: "dateOfBirth",
    label: "Date of Birth",
    type: "date",
  },
  {
    id: "contactInformation",
    label: "Contact Information",
    type: "text",
    placeholder: "Contact details",
  },
  {
    id: "medicalHistory",
    label: "Medical History",
    type: "text",
    placeholder: "Medical history details",
  },
];
