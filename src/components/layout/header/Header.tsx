import { FiHeart } from "react-icons/fi";
import Title from "../title/Title";

function Header() {
  return (
    <header className="flex w-full gap-3 justify-center items-center px-2 py-6 max-w-5xl mx-auto border-b border-gray-700 md:hidden">
      <Title />
    </header>
  );
}

export default Header;
