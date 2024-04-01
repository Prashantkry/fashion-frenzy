import React, { useEffect, useState } from "react";

const UserList = () => {
  const APIUrl = "http://localhost:8000/api/v1";
  const [allUser, setAllUser] = useState([]);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${APIUrl}/getAllUser`, {
          method: "POST",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        // console.log(data);
        setAllUser(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchData();
  }, []);
  const handleCopyUserId = () => {
    navigator.clipboard.writeText(userData.UserId);
    alert("UserId copied to clipboard");
  };
  return (
    <>
      <div className="grid grid-cols-3 gap-4 p-5 overflow-scroll no-scrollbar">
        {allUser.map((e, i) => (
          <div
            key={i}
            className=" text-gray-900 p-2 border border-gray-800 rounded pb-4 text-sm w-[325px] flex flex-col items-center justify-center shadow"
          >
            {e.Pic ? (
              <img
                src={e.Pic}
                className="border border-gray-800 mt-3 rounded-md pt-3 w-[290px] h-[250px]"
              />
            ) : (
              <p className="border border-gray-800 mt-3 rounded-md pt-3 w-[290px] h-[250px] text-[160px] flex items-center justify-center text-slate-800">
                {e.Name.charAt(0)}
              </p>
            )}
            <div className="py-3 px-4 leading-7 flex flex-col items-start justify-start">
              <div className="flex items-center justify-center border px-1">
                <p className="tracking-widest font-serif">UserId - </p>
                <button
                  onClick={handleCopyUserId}
                  className="w-[200px] p-1 flex items-center justify-between"
                >
                  <p className="w-[180px] overflow-hidden">{e.UserId}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-[20px] h-[20px] shadow border-0 p-0.5"
                  >
                    <path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z" />
                  </svg>
                </button>
              </div>
              <p>Name - {e.Name}</p>
              <p>Email - {e.Email}</p>
              <p>Mobile No - {e.Phone}</p>
              <p>
                Address - {e.Address}, {e.PinCode}
              </p>
            </div>
            <div className="flex items-center justify-between w-full px-4">
              <button className="p-1 bg-red-800 rounded-md flex items-center justify-center">
                Update
              </button>
              <button className="p-1 bg-red-800 rounded-md flex items-center justify-center">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserList;
