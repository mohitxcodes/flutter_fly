import {
  AllScreenRoutes,
  AllWidgetRoutes,
  sidebarMenuArr,
} from "@/routes/sidebar-routes";
import { useState } from "react";
import {
  HiOutlineSearch,
  HiOutlineTemplate,
  HiOutlineCube,
  HiChevronDown,
} from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("getting-started");

  return (
    <div className="w-80 h-screen overflow-y-auto text-slate-400 py-6 px-4 left-0 top-16 border-r border-slate-800">
      {/* Search Bar */}
      <div className="relative mb-6">
        <HiOutlineSearch className="absolute left-3 top-3 text-slate-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Quick search..."
          className="w-full bg-slate-800/75 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-slate-600 placeholder-slate-500"
        />
      </div>

      {/* Main Navigation */}
      <nav className="space-y-1 mb-8">
        {sidebarMenuArr.map((item) => (
          <Link
            to={`/explore${item.path}`}
            key={item.path}
            onClick={() => setActiveItem(item.path)}
            className={`flex items-center w-full px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              activeItem === item.path
                ? "text-sky-400 bg-sky-400/10"
                : "hover:bg-slate-800 hover:text-slate-300"
            }`}
          >
            <item.icon className="mr-3 h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Sections */}
      <div className="space-y-8">
        {/* Screens Section */}
        <div>
          <div className="flex items-center justify-between px-3 mb-2 text-slate-400">
            <div className="flex items-center">
              <HiOutlineTemplate className="mr-2 h-5 w-5" />
              <span className="text-sm font-semibold">Screens</span>
            </div>
            <HiChevronDown className="h-5 w-5" />
          </div>
          <div className="space-y-1">
            {AllScreenRoutes.map((data, index) => (
              <Link
                to={`/screens${data.path}`}
                key={index}
                onClick={() => setActiveItem(data.path)}
                className={`w-full flex items-center pl-8 pr-4 py-2 text-sm rounded-md transition-colors border-l-2 ${
                  activeItem === data.path
                    ? "text-sky-400 bg-sky-400/10 border-sky-400"
                    : "hover:bg-slate-800 hover:text-slate-300 border-transparent"
                }`}
              >
                {data.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Widgets Section */}
        <div>
          <div className="flex items-center justify-between px-3 mb-2 text-slate-400">
            <div className="flex items-center">
              <HiOutlineCube className="mr-2 h-5 w-5" />
              <span className="text-sm font-semibold">Widgets</span>
            </div>
            <HiChevronDown className="h-5 w-5" />
          </div>
          <div className="space-y-1">
            {AllWidgetRoutes.map((data, index) => (
              <Link
                to={`/widgets${data.path}`}
                key={index}
                onClick={() => setActiveItem(data.path)}
                className={`w-full flex items-center pl-8 pr-4 py-2 text-sm rounded-md transition-colors border-l-2 ${
                  activeItem === data.path
                    ? "text-sky-400 bg-sky-400/10 border-sky-400"
                    : "hover:bg-slate-800 hover:text-slate-300 border-transparent"
                }`}
              >
                {data.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
