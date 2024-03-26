import React, { useEffect, useState } from "react";
const APIUrl = "https://fashion-frenzy.onrender.com/api/v1";
import { bc6 } from "../../components/Images";
// import { useParams } from "react-router-dom";  get data from url

const userProfile = () => {
  const [userdata, setUserData] = useState("");
  useEffect(() => {
    const userId = localStorage.getItem("UserId");
    // console.log(userId);
    fetch(`${APIUrl}/getAdmin`, {
      method: "POST", // Corrected method to "POST"
      headers: {
        "Content-Type": "application/json", // Added content type header
      },
      body: JSON.stringify({
        userId,
      }),
    })
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        // console.log(res);
        setUserData(res.data);
      });
  });
  return (
    <>
      <div>
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
                  UserId - {userdata.UserId}
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
            <div className="w-[300px] flex items-center justify-around rounded ml-4 mt-5">
              <button className="bg-red-900 p-1 w-[100px] h-[50px] rounded">Delete</button>
              <button className="bg-green-800 p-1 w-[100px] h-[50px] rounded">Update</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default userProfile;
