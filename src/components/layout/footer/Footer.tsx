import ShowOnWide from "@/components/common/showOnWide/ShowOnWide";
import Link from "next/link";
import { FiHome, FiPlus, FiUser } from "react-icons/fi";

function Footer({
  className = "flex justify-between items-center py-4 px-3 text-2xl w-full max-w-5xl mx-auto border-t border-gray-700  md:hidden fixed bottom-0 bg-black",
}) {
  return (
    <footer className={className}>
      <Link
        href={"/"}
        className="flex gap-2 justify-center lg:justify-start items-center  group text-start"
      >
        <FiHome className="group-hover:scale-105" />
        <ShowOnWide text="Home" />
      </Link>

      <Link
        href={"/create"}
        className="flex gap-2 justify-center lg:justify-start items-center group"
      >
        <span className="group-hover:scale-105 border-2 rounded-md border-white">
          <FiPlus className="" />
        </span>
        <ShowOnWide text="Create" />
      </Link>

      <Link
        href={"/account"}
        className="flex gap-2 justify-center lg:justify-start items-center group"
      >
        <FiUser className="group-hover:scale-105" />
        <ShowOnWide text="Account" />
      </Link>
    </footer>
  );
}

export default Footer;
