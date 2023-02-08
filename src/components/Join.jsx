import React from "react";
import { BsChevronRight } from "react-icons/bs";

const Join = () => {
  return (
    <div className="w-full text-center p-8 bg-[#FFF8F0]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl pb-6 w-full lg:w-[20%]">
          Interested in Joining us at the expo
        </h1>
        <button className="bg-[#E38C20] text-white flex items-center gap-x-[10px] group">
          Register for Expo <BsChevronRight size={15} />
        </button>
      </div>
    </div>
  );
};

export default Join;
