import {
  MdDashboard,
  MdShoppingCart,
  MdPeople,
  MdAdd,
  MdOutlineShop,
  MdOutlineShoppingCart,
  MdOutlinePerson,
  MdErrorOutline
  // BiUserCircle
} from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 space-x-2
         ${isActive ?
      "text-hijau bg-green-200 font-extrabold" :
      "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
    }`;

  return (
    <div id="sidebar" className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg">
      {/* Logo */}
      <div id="sidebar-logo" className="flex flex-col">
        <span id="logo-title" className="font-poppins-extrabold text-[48px] text-gray-900">
          Sedap <b id="logo-dot" className="text-hijau">.</b>
        </span>
        <span id="logo-subtitle" className="font-semibold text-gray-400">
          Modern Admin Dashboard
        </span>
      </div>

      {/* List Menu */}
      <div id="sidebar-menu" className="mt-10">
        <ul id="menu-list" className="space-y-3">
          <li>
            <NavLink to="/" className={menuClass}>
              <MdDashboard className="mr-4 text-xl" />
              Dashboard
            </NavLink>
          </li>

          {/* Orders Menu */}
          <li>
            <NavLink to="/Orders" className={menuClass}>
              <MdOutlineShoppingCart className="mr-4 text-xl" />
              Orders
            </NavLink>
            {/* <NavLink to="/orders/add" className={menuClass}>
                <MdAdd className="mr-4 text-xl" />
                Add Order
              </NavLink> */}
          </li>

          {/* Customers Menu */}
          <li>
            <NavLink to="/Customers" className={menuClass}>
              <MdPeople className="mr-4 text-xl" /> {/* tetap pakai MdPeople */}
              Customers
            </NavLink>
          </li>

          {/* Users Menu */}
          <li>
            <NavLink to="/users" className={menuClass}>
              <MdOutlinePerson className="mr-4 text-xl" /> {/* ganti ke MdOutlinePerson */}
              User List
            </NavLink>
          </li>

          {/* Error Routes */}
          <li>
            <NavLink to="/400" className={menuClass}>
              <MdErrorOutline className="mr-4 text-xl" />
              Error 400
            </NavLink>
          </li>

          <li>
            <NavLink to="/401" className={menuClass}>
              <MdErrorOutline className="mr-4 text-xl" />
              Error 401
            </NavLink>
          </li>

          <li>
            <NavLink to="/403" className={menuClass}>
              <MdErrorOutline className="mr-4 text-xl" />
              Error 403
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div id="sidebar-footer" className="mt-auto">
        <div id="footer-card" className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center">
          <div id="footer-text" className="text-white text-sm">
            <span>Please organize your menus through button below!</span>
            <div
              id="add-menu-button"
              className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2 text-hijau font-semibold cursor-pointer hover:bg-gray-100"
            >
              <MdAdd className="text-lg" />
              <span>Add Menus</span>
            </div>
          </div>
          <img id="footer-avatar" className="w-20 rounded-full" src="https://avatar.iran.liara.run/public/28" />
        </div>
        <span id="footer-brand" className="font-bold text-gray-400">Sedap Restaurant Admin Dashboard</span>
        <p id="footer-copyright" className="font-light text-gray-400">&copy; 2025 All Right Reserved</p>
      </div>
    </div>
  );
}
