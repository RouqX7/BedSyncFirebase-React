import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../../sidebar/Sidebar';
import Navbar from '../../navbar/navbar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../../firebase";
import { setCurrentBed } from '../../state/bedSlice';

const BedNew = ({ inputs, title }) => {
  const { wardId } = useParams();
  console.log('Ward ID:', wardId);
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const [data, setData] = useState({});
  const [per, setPerc] = useState(null);
  const [wards, setWards] = useState([]);
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
    const uploadFile = () => {
      if (!file) return;

      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          setPerc(progress);
        },
        (error) => {
          console.error('Error uploading file:', error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };

    uploadFile();
  }, [file]);

  const handleInput = (e) => {
    const { id, type, checked, value } = e.target;
  
    // Handle checkbox differently to ensure it's a boolean
    const inputValue = type === "checkbox" ? checked : value;
  
    setData((prevData) => ({ ...prevData, [id]: inputValue }));
  };

  const createBed = async (e) => {
    e.preventDefault();
    console.log('Ward ID:', wardId); // Add this line
  
    try {
      const response = await fetch(`http://localhost:8081/api/beds/wards/${wardId}/create-bed`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          img: data.img || '', // Ensure img is present, even if not uploaded
        }),
      });
  
      if (!response.ok) {
        throw new Error(`Error creating bed: ${response.statusText}`);
      }
  
      const responseData = await response.json();
      console.log('Bed created successfully:', responseData);
      dispatch(setCurrentBed(responseData)); // Assuming responseData is the created bed
      navigate(-1);
    } catch (error) {
      console.error('Error creating bed:', error.message);
      // Handle the error as needed
    }
  };
  

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={createBed}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: 'none' }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleInput}
                  />
                </div>
              ))}

              <div className="formInput">
  <label htmlFor="wardId">Assign to Ward:</label>
  <select id="wardId" onChange={(e) => setData((prevData) => ({ ...prevData, wardId: e.target.value }))}>
    <option value="">Select Ward</option>
    {wards.map((ward) => (
      <option key={ward.id} value={ward.id}>
        {ward.name}
      </option>
    ))}
  </select>
</div>
              <button disabled={per !== null && per < 100} type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BedNew;