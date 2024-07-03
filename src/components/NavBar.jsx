import { NavLink, Outlet } from "react-router-dom";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import { HiHome, HiTv, HiStar, HiPlayCircle } from "react-icons/hi2";
import HeaderItem from "./HeaderItem";
import logo from "./../assets/images/Logo.png";
function NavBar() {
  //   const menu = [
  //     { name: "HOME", icon: HiHome, path: "/" },
  //     { name: "SEARCH", icon: HiMagnifyingGlass, path: "/search" },
  //     { name: "WATCH LIST", icon: HiPlus, path: "/watchlist" },
  //     { name: "ORIGINALS", icon: HiStar, path: "/originals" },
  //     { name: "MOVIES", icon: HiPlayCircle, path: "/movies" },
  //     { name: "SERIES", icon: HiTv, path: "/series" },
  //   ];

  return (
    <div>
      <div className="w-[120px] md:w-[140px] object-cover">
        <img
          src={logo}
          alt="Logo"
          className="h-12 w-[120px] md:w-[140px] object-cover"
        />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="text-white text-[30px] flex">
              <HiHome />
              <HiMagnifyingGlass />
              <HiPlus />
              <HiDotsVertical />
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
    //   <div>
    //   <nav className="flex items-center justify-between p-3">
    //     <img
    //       src={logo}
    //       className="w-[120px] md:w-[140px] object-cover"
    //       alt="Logo"
    //     />
    //     <div className="hidden md:flex gap-8">
    //       {menu.map((item) => (
    //         <NavLink
    //           key={item.name}
    //           to={item.path}
    //           className={({ isActive }) =>
    //             isActive
    //               ? "text-white"
    //               : "text-black text-[30px] cursor-pointer"
    //           }
    //         >
    //           <HeaderItem name={item.name} Icon={item.icon} />
    //         </NavLink>
    //       ))}
    //     </div>
    //     <div className="flex md:hidden gap-5">
    //       {menu.slice(0, 3).map((item) => (
    //         <NavLink
    //           key={item.name}
    //           to={item.path}
    //           className={({ isActive }) =>
    //             isActive
    //               ? "text-white"
    //               : "text-black text-[30px] cursor-pointer"
    //           }
    //         >
    //           <HeaderItem name={""} Icon={item.icon} />
    //         </NavLink>
    //       ))}
    //       <div className="md:hidden relative group">
    //         <HeaderItem name={""} Icon={HiDotsVertical} />
    //         <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4 hidden group-hover:block">
    //           {menu.slice(3).map((item) => (
    //             <NavLink
    //               key={item.name}
    //               to={item.path}
    //               className={({ isActive }) =>
    //                 isActive ? "text-white" : "text-white cursor-pointer"
    //               }
    //             >
    //               <HeaderItem name={item.name} Icon={item.icon} />
    //             </NavLink>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //     <img
    //       src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
    //       className="w-[40px] rounded-full"
    //       alt="User Avatar"
    //     />
    //   </nav>
    // </div>
  );
}

export default NavBar;
