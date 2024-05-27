import React, { useEffect, useState } from "react";
const APIUrl = "https://fashion-frenzy.onrender.com/api/v1";
import { bc6 } from "../components/Images";

const UserProfile = () => {
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

  const handleCopyUserId = () => {
    navigator.clipboard.writeText(userData.UserId);
    alert("UserId copied to clipboard");
  };

  return (
    <div className="w-full flex items-center justify-center p-2 mb-10">
      <div className="container grid xl:w-[40vw] lg:w-[50vw] md:w-[75vw] sm:w-[80vw] h-[85vh] p-7 items-center border-2 shadow">
        <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 items-center pl-10 border-0">
          {userData.Pic ? (
            <img
              src={userData.Pic}
              alt="User Pic"
              className="rounded border-2 p-1 w-[150px] h-[150px] mr-10"
            />
          ) : (
            <div className="rounded border-2 p-1 w-[150px] h-[150px] mr-10">
              <p className="w-full h-full text-[120px] flex items-center justify-center text-gray-700">
                {userData.Name ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="gray"
                    className="w-[50px] h-[50px]"
                  >
                    <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                  </svg>
                ) : (
                  ""
                )}
              </p>
              {/* (userData.Name.slice(0, 1)) */} {/* for name instead of '' */}
            </div>
          )}
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
        <div className="leading-10 mt-3 mb-10">
          <p className="text-gray-800 tracking-widest font-serif border-2 rounded p-1 flex items-start mt-3 w-auto text-[15px]">
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
          <p className="text-gray-800 tracking-widest font-serif border-2 rounded p-1 flex items-start mt-3 w-auto text-[15px]">
            Phone:
            {editMode ? (
              <input
                className="w-[100%] px-1 border overflow-scroll"
                type="tel"
                name="Phone"
                value={userData.Phone}
                onChange={handleChange}
              />
            ) : (
              userData.Phone
            )}
          </p>
          <p className="text-gray-800 tracking-widest font-serif  border-2 rounded p-1 flex-row items-start justify-between mt-3 text-[15px]">
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
          <p className="text-gray-800 tracking-widest font-serif  border-2 rounded p-1 flex items-start justify-between mt-3 text-[15px]">
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
          <p className="text-gray-800 tracking-widest font-serif  border-2 rounded p-1 flex items-start justify-between mt-3 text-[15px]">
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
            <p className="text-gray-800 tracking-widest font-serif  border-2 rounded p-1 flex items-start justify-between mt-3 text-[15px]">
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
            <p className="text-gray-800 tracking-widest font-serif border-2 rounded p-1 flex items-start justify-between mt-3 text-[15px]">
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
            } w-[20vw] font-semibold text-white tracking-widest font-sans mt-4 rounded`}
            onClick={handleEdit}
          >
            {editMode ? "Save" : "Edit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
