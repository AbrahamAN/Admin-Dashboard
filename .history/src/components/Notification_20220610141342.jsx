import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { Button } from ".";
import { chatData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Notification = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="nav-item absolute right-5 md:right-52 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96 ">
      <div className="flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <p className="semibold text-lg dark:text-gray-200">Messages</p>
          <button
            type="button"
            className="semibold dark:text-white  text-xs rounded p-1 px-2 bg-orange"
          >
            5 New
          </button>
          <div>
            <Button
              icon={<MdOutlineCancel />}
              color="rgb(153,171,180)"
              bgHoverColor="light-gray"
              size="2xl"
              borderRadius="50%"
            />
          </div>
        </div>
      </div>
      <div className="mt-5">
        {chatData.map((item, index) => (
          <div
            key={index}
            className=" flex items-center gap-5 border-b-1 border-color p-3 leading-8 cursor-pointer"
          >
            <div className="relative">
              <img src={item.image} alt={item.message} />
              <span
                style={{ background: item.dotColor }}
                className=" absolute inline-flex rounded-full h-2 w-2 right-0 top-0"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;