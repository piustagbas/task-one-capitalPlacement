import { useState } from 'react';
import { AiOutlineMenu, AiOutlineHome } from 'react-icons/ai';
import { FaWpforms } from 'react-icons/fa';

const Sidebar = () => {
  // State to track whether the sidebar is opened or closed
  const [isOpened, setIsOpened] = useState(true);

  return (
    <aside className="text-black">
      {/* Sidebar Toggle Button */}
      <div className="fixed top-[20px] left-0 w-12 md:w-24 rounded-r-full bg-gray-100/10 z-10">
        <button
          onClick={() => setIsOpened(!isOpened)}
          className="w-full h-10 flex justify-center items-center rounded-r-full"
        >
          {/* Sidebar Toggle Icon */}
          <AiOutlineMenu
            className={`text-xl transition-all duration-300 transform ${
              isOpened ? '-rotate-180' : '' // Rotate icon when sidebar is opened/closed
            }`}
          />
        </button>
      </div>

      {/* Sidebar Content - Animated width and opacity */}
      <div
        className={`transition-all duration-300 ${
          isOpened ? 'w-12 md:w-24' : 'w-0 opacity-0 -translate-x-28'
        }`}
      ></div>

      {/* Sidebar Container */}
      <div
        className={`fixed top-0 left-0 flex h-screen flex-col justify-between border-e bg-white pt-20 transition-all duration-300 ${
          isOpened ? 'w-12 md:w-24' : 'w-0 opacity-0 -translate-x-28'
        }`}
      >
        <div>
          {/* Sidebar Navigation Links */}
          <div className="border-t border-gray-100">
            <div className="px-2 flex flex-col justify-between items-center">
              <div className="py-4 flex flex-col items-center justify-center gap-10 text-2xl">
                {/* Home Link */}
                <a href="/" className="t group relative ">
                  <AiOutlineHome className="" />
                  {/* Label displayed on hover */}
                  <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 text-xs font-medium text-white -translate-x-20 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                    Home
                  </span>
                </a>

                {/* Add Form Link */}
                <a href="/" className="t group relative  ">
                  <FaWpforms className="" />
                  {/* Label displayed on hover */}
                  <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 text-xs font-medium text-white -translate-x-20 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                    Add Form
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* User Profile Section */}
        <div className="py-10 flex justify-center items-center">
          <div className="rounded-full bg-blue-500 text-white w-8 h-8  sm:w-12 sm:h-12  flex justify-center items-center">
            VK {/* Placeholder for user's initials or profile picture */}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
