import React, { useEffect, useState } from "react";

const UserList = () => {
  const APIUrl = "http://localhost:8000/api/v1";
  const [allUser, setAllUser] = useState([]);
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
  return (
    <>
      <div className="grid grid-cols-3 gap-4 p-5 overflow-scroll no-scrollbar">
        {allUser.map((e, i) => (
          <div
            key={i}
            className=" text-gray-300 p-2 border border-gray-800 rounded pb-4 text-sm w-[325px] flex flex-col items-center justify-center shadow"
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
              <p className="w-[200px] overflow-hidden">{e.UserId}</p>
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
