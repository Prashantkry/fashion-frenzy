import React, { useEffect, useState } from "react";
const APIUrl = "http://localhost:8000/api/v1";
import { bc6 } from "../../components/Images";
// import { useParams } from "react-router-dom";  get data from url

const AdminProfile = () => {
  const [userData, setUserData] = useState({});
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("UserId");
    fetch(`${APIUrl}/getAdmin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setUserData(data.data);
      });
  }, []);

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = () => {
    // Add logic to submit updated user data
  };

  const handleCopyUserId = () => {
    navigator.clipboard.writeText(userData.UserId);
    alert("UserId copied to clipboard");
  };
  return (
    <>
      {/* <div>
        <div
          className="w-full h-[85vh] object-contain center flex items-center justify-center py-10"
          // style={{ backgroundImage: `url(${bc6})` }}
        >
          <div className="flex flex-col pt-20 items-start justify-start w-[78vw] rounded border-0 p-5 h-full bg-gray-950">
            <div className="w-full rounded flex items-center justify-start pl-10 border-0">
              <img
                src={userdata.Pic}
                alt="X"
                className="rounded border-2 p-1 w-[150x] h-[150px] mr-10"
              />
              <div className="flex flex-col items-start justify-start text-gray-100">
                <p className="tracking-widest font-serif">{userdata.Name}</p>
                <p className="tracking-widest font-serif w-[300px] overflow-hidden">
                  UserId {userdata.UserId}
                </p>
              </div>
            </div>
            <div className="leading-10 ml-10 mt-7">
              <p className="text-gray-300 tracking-widest font-serif">
                Email - {userdata.Email}
              </p>
              <p className="text-gray-300 tracking-widest font-serif">
                Phone - {userdata.Phone}
              </p>
              <p className="text-gray-300 tracking-widest font-serif">
                Address - {userdata.Address}
              </p>
              <p className="text-gray-300 tracking-widest font-serif">
                PinCode - {userdata.PinCode}
              </p>
            </div>
            <div className="w-[300px] flex items-center justify-around rounded ml-2 mt-5">
              <button className="bg-red-900 p-1 w-[80px] h-[40px] rounded">Delete</button>
              <button className="bg-green-800 p-1 w-[80px] h-[40px] rounded">Update</button>
            </div>
          </div>
        </div>
      </div> */}
      <div className="w-full bg-white h-[87vh] flex items-center justify-center p-2">
      <div className="container flex flex-col w-[40vw] h-[85vh] p-7 items-start justify-start border-2 shadow-lg">
        <div className="w-full rounded flex items-center justify-start pl-10 border-0">
          <img
            src={userData.Pic}
            alt="User Pic"
            className="rounded border-2 p-1 w-[150px] h-[150px] mr-10"
          />
          <div className="flex flex-col items-start justify-start text-gray-800">
            <p className="tracking-widest font-serif">
              Name:
              {editMode ? (
                <input
                  type="text"
                  name="Name"
                  value={userData.Name}
                  onChange={handleChange}
                />
              ) : (
                userData.Name
              )}
            </p>
            <div className="flex flex-col items-start justify-start">
              <p className="tracking-widest font-serif w-[200px]">UserId</p>
              <button
                onClick={handleCopyUserId}
                className="w-[235px] border p-1 flex items-center justify-between"
              >
                <p className="w-[200px] overflow-hidden">{userData.UserId}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-[20px] h-[20px] shadow border-0 p-0.5"
                >
                  <path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="leading-10 ml-10 mt-3">
          <p className="text-gray-800 tracking-widest font-serif  border-2 rounded p-1 flex items-start justify-between mt-3 w-[31vw] text-[15px]">
            Email:
            {editMode ? (
              <input
                className="w-[80%] px-1 border overflow-scroll"
                type="email"
                name="Email"
                value={userData.Email}
                onChange={handleChange}
              />
            ) : (
              userData.Email
            )}
          </p>
          <p className="text-gray-800 tracking-widest font-serif  border-2 rounded p-1 flex items-start justify-between mt-3 w-[31vw] text-[15px]">
            Phone:
            {editMode ? (
              <input
                className="w-[80%] px-1 border overflow-scroll"
                type="tel"
                name="Phone"
                value={userData.Phone}
                onChange={handleChange}
              />
            ) : (
              userData.Phone
            )}
          </p>
          <p className="text-gray-800 tracking-widest font-serif  border-2 rounded p-1 flex items-start justify-between mt-3 w-[31vw] text-[15px]">
            Address:
            {editMode ? (
              <textarea
                className="w-[80%] px-1 border overflow-scroll no-scrollbar"
                type="text"
                name="Address"
                value={userData.Address}
                onChange={handleChange}
              />
            ) : (
              userData.Address
            )}
          </p>
          <p className="text-gray-800 tracking-widest font-serif  border-2 rounded p-1 flex items-start justify-between mt-3 w-[31vw] text-[15px]">
            PinCode:
            {editMode ? (
              <input
                className="w-[80%] px-1 border overflow-scroll no-scrollbar"
                type="text"
                name="PinCode"
                value={userData.PinCode}
                onChange={handleChange}
              />
            ) : (
              userData.PinCode
            )}
          </p>
          {/* payment details */}
          <p className="text-gray-800 tracking-widest font-serif  border-2 rounded p-1 flex items-start justify-between mt-3 w-[31vw] text-[15px]">
            Card:
            {editMode ? (
              <input
                className="w-[80%] px-1 border overflow-scroll no-scrollbar"
                type="number"
                name="card"
                value={userData.card}
                onChange={handleChange}
              />
            ) : (
              userData.card
            )}
          </p>
          <div className="flex items-center justify-between">
            <p className="text-gray-800 tracking-widest font-serif  border-2 rounded p-1 flex items-start justify-between mt-3 w-[15vw] text-[15px]">
              Expiry:
              {editMode ? (
                <input
                  className="w-[80%] px-1 border"
                  type="date"
                  name="date"
                  value={userData.expiry}
                  onChange={handleChange}
                />
              ) : (
                userData.expiry
              )}
            </p>
            <p className="text-gray-800 tracking-widest font-serif  border-2 rounded p-1 flex items-start justify-between mt-3 w-[15vw] text-[15px]">
              CVV:
              {editMode ? (
                <input
                  className="w-[80%] px-1 border overflow-scroll no-scrollbar"
                  type="number"
                  name="cvv"
                  value={userData.cvv}
                  onChange={handleChange}
                />
              ) : (
                userData.cvv
              )}
            </p>
          </div>

          <button
            className={`${
              editMode ? "bg-red-500" : "bg-green-800"
            } w-[7vw] font-semibold text-white tracking-widest font-sans mt-4 rounded`}
            onClick={handleEdit}
          >
            {editMode ? "Save" : "Edit"}
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default AdminProfile;
