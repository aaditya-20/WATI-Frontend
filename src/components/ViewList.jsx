import React from "react";
import { useNavigate } from "react-router-dom";
export default function ViewList() {
  const navigate = useNavigate();
  let new_friends;
  if (window.localStorage.getItem("UserData"))
    new_friends = JSON.parse(window.localStorage.getItem("UserData")).friends;
  return (
    <div>
      <div className="flex">
        <div className="text-[50px]">Student List</div>
        <div className="mr-[10px]">
          <button
            className=" text-[20px] absolute mt-[40px] ml-[800px] border-[2px] border-[black] bg-[red]"
            onClick={() => {
              navigate("/");
            }}
          >
            Log Out
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-[40px]">
        {new_friends &&
          new_friends.map((val) => (
            <div
              className="w-auto m-[10px] text-[30px] border-[2px] h-[60px] bg-[#BBFFFF]"
              key={new_friends.length}
            >
              <span className="m-[10px]">name:{val.name}</span>
              <span> Phone Number:{val.phoneNumber}</span>
            </div>
          ))}
      </div>
    </div>
  );
}
