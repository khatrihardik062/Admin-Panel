import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import {
  Menu,
  X,
  User,
  Settings,
  LogOut,
  LayoutDashboard,
  MessageSquareQuote,
  CheckCircle2,
  Palette,
  Layers,
  FolderTree,
  FolderGit2,
  GitFork,
  Package,
  ChevronDown,
} from "lucide-react";
import { useContext } from "react";
import { MainContext } from "../Context/Context";

export default function Header({ isSidebarOpen, setIsSidebarOpen }) {
  const {setIsLogin} = useContext(MainContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const sidebarRef = useRef(null);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent background scrolling when sidebar is open on mobile
  // useEffect(() => {
  //   if (isSidebarOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "unset";
  //   }
  // }, [isSidebarOpen]);

  // Navigate and close drawer
  const handleNavigation = (path) => {
    setIsSidebarOpen(true);
    navigate(path);
  };

  // Toggle dropdown submenus
  const toggleSubmenu = (id) => {
    setOpenSubmenu((prev) => (prev === id ? null : id));
  };

  const handleLogout = () => {
    setIsDropdownOpen(false);
    localStorage.removeItem("isLogin");
    setIsLogin(0);
    navigate("/");
  };

  // Navigation Items with Sub-buttons
  const navItems = [
    {
      id: "dashboard",
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashbord",
    },
    {
      id: "testimonial",
      name: "Testimonial",
      icon: MessageSquareQuote,
      subItems: [
        { name: "Add Testimonial", path: "/addtestimonial" },
        { name: "View Testimonial", path: "/viewtestimonial" },
      ],
    },
    {
      id: "why",
      name: "Why Choose Us",
      icon: CheckCircle2,
      subItems: [
        { name: "Add Choose", path: "/addchoose" },
        { name: "View Choose", path: "/viewchoose" },
      ],
    },
    {
      id: "color",
      name: "Color",
      icon: Palette,
      subItems: [
        { name: "Add Color", path: "/addcolor" },
        { name: "View Color", path: "/viewcolor" },
      ],
    },
    {
      id: "material",
      name: "Material",
      icon: Layers,
      subItems: [
        { name: "Add Material", path: "/addmaterial" },
        { name: "View Material", path: "/viewmaterial" },
      ],
    },
    {
      id: "category",
      name: "Category",
      icon: FolderTree,
      subItems: [
        { name: "Add Category", path: "/addcategory" },
        { name: "View Category", path: "/viewcategory" },
      ],
    },
    {
      id: "sub-category",
      name: "Sub Category",
      icon: FolderGit2,
      subItems: [
        { name: "Add SubCategory", path: "/addsubcategory" },
        { name: "View SubCategory", path: "/viewsubcategory" },
      ],
    },
    {
      id: "sub-sub-category",
      name: "Sub Sub Category",
      icon: GitFork,
      subItems: [
        { name: "Add SubSubCategory", path: "/addsubsubcategory" },
        { name: "View SubSubCategory", path: "/viewsubsubcategory" },
      ],
    },
    {
      id: "product",
      name: "Product",
      icon: Package,
      subItems: [
        { name: "Add Product", path: "/addproduct" },
        { name: "View Product", path: "/viewproduct" },
      ],
    },
  ];

  return (
    <>
      {/* ================= TOP HEADER BAR ================= */}
      <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm sm:px-6">
        {/* Left Side */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsSidebarOpen(true)}
            aria-label="Open navigation menu"
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <Menu className="h-6 w-6" />
          </button>
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Admin<span className="text-blue-600">Panel</span>
          </span>
        </div>

        {/* Right Side: Account Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            aria-label="User profile menu"
            aria-expanded={isDropdownOpen}
            className="flex items-center gap-2 rounded-full p-1 text-gray-700 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 font-semibold text-white shadow-sm">
              <User className="h-5 w-5" />
            </div>
            <ChevronDown
              className={`hidden h-4 w-4 transition-transform duration-200 sm:block ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-52 rounded-xl border border-gray-100 bg-white py-2 shadow-lg ring-1 ring-black/5 z-50">
              <div className="border-b border-gray-100 px-4 py-2">
                <p className="text-sm font-medium text-gray-900">Signed in as</p>
                <p className="truncate text-xs text-gray-500">admin@gmail.com</p>
              </div>

              <div className="py-1">
                <button
                  type="button"
                  onClick={() => {
                    setIsDropdownOpen(false);
                    navigate("/profile");
                  }}
                  className="flex w-full items-center gap-2.5 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                >
                  <User className="h-4 w-4" />
                  My Profile
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsDropdownOpen(false);
                    navigate("/settings");
                  }}
                  className="flex w-full items-center gap-2.5 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                >
                  <Settings className="h-4 w-4" />
                  Settings
                </button>
              </div>

              <div className="border-t border-gray-100 pt-1">
                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex w-full items-center gap-2.5 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* ================= FULL-LENGTH SIDEBAR ================= */}
      {/* Backdrop */}
      <div
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-0 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Slide-out Sidebar */}
      <aside
        ref={sidebarRef}
        className={`fixed inset-y-0 left-0 z-50 flex h-full w-72 flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex h-16 items-center justify-between border-b border-gray-200 px-5">
          <span className="text-lg font-bold text-gray-800">Navigation</span>
          <button
            type="button"
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Close menu"
            className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-800"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Sidebar Menu Buttons */}
        <nav className="flex-1 space-y-1 overflow-y-auto p-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isOpen = openSubmenu === item.id;
            const hasSubmenu = Boolean(item.subItems?.length);

            // Single navigation button (Dashboard)
            if (!hasSubmenu) {
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavigation(item.path)}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                >
                  <Icon className="h-5 w-5 text-gray-400" />
                  <span>{item.name}</span>
                </button>
              );
            }

            // Dropdown accordion button
            return (
              <div key={item.id} className="space-y-1">
                <button
                  type="button"
                  onClick={() => toggleSubmenu(item.id)}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-gray-400" />
                    <span>{item.name}</span>
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Submenu Buttons */}
                {isOpen && (
                  <div className="ml-8 border-l-2 border-gray-100 pl-3 space-y-1 py-1">
                    {item.subItems.map((sub) => (
                      <button
                        key={sub.name}
                        type="button"
                        onClick={() => handleNavigation(sub.path)}
                        className="block w-full rounded-md px-3 py-1.5 text-left text-sm text-gray-600 transition hover:bg-gray-50 hover:text-blue-600"
                      >
                        {sub.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="border-t border-gray-200 p-4">
          <p className="text-center text-xs text-gray-400">© 2026 Admin Dashboard</p>
        </div>
      </aside>
    </>
  );
}