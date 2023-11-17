import React from "react";
import Footer from "../footer/Footer";
import { FiInstagram } from "react-icons/fi";
import ShowOnWide from "@/components/common/showOnWide/ShowOnWide";
import Title from "../title/Title";

function SideBar() {
  return (
    <div className="hidden md:flex flex-col items-center left-0 top-0 bottom-0 border-gray-700 px-2 py-4 border-r text-2xl gap-4 w-20 lg:w-40 fixed bg-black">
      <div className="flex-1 max-h-[200px]">
        <FiInstagram className="lg:hidden" />
        <ShowOnWide>
          <Title />
        </ShowOnWide>
      </div>
      <Footer className="flex flex-col text-2xl items-start gap-5 w-full" />
    </div>
  );
}

export default SideBar;
