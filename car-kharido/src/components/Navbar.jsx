import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({
  toggleWishlist,
  goHome,
  filters,
  setFilters,
  darkMode,
  setDarkMode,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="backdrop-blur-md bg-gradient-to-r from-cyan-200 via-sky-300 to-blue-400 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-black dark:text-white p-4 shadow-xl border-b border-blue-300 dark:border-gray-700">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 dark:from-yellow-400 dark:via-orange-500 dark:to-red-500 drop-shadow-md dark:drop-shadow-lg">
          Car Kharido
        </h1>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Nav Buttons */}
        <div
          className={`flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 absolute md:static dark:bg-gray-900 p-4 md:p-0 rounded-lg md:rounded-none shadow-md md:shadow-none top-20 right-4 z-50 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "flex" : "hidden md:flex"
          }`}
        >
          <button
            onClick={goHome}
            className="mt-3 px-6 py-2 rounded-lg font-semibold text-white 
    bg-gradient-to-r from-indigo-500 to-purple-600
    transition-all duration-300 ease-in-out 
    transform hover:scale-105 hover:shadow-lg 
    hover:from-purple-600 hover:to-indigo-500 
    dark:from-indigo-700 dark:to-purple-800 
    hover:ring-2 hover:ring-offset-2 hover:ring-purple-300 
    dark:hover:ring-purple-600
    active:scale-95"
          >
            Home
          </button>
          <button
            onClick={toggleWishlist}
            className="mt-3 px-6 py-2 rounded-lg font-semibold text-white 
    bg-gradient-to-r from-indigo-500 to-purple-600
    transition-all duration-300 ease-in-out 
    transform hover:scale-105 hover:shadow-lg 
    hover:from-purple-600 hover:to-indigo-500 
    dark:from-indigo-700 dark:to-purple-800 
    hover:ring-2 hover:ring-offset-2 hover:ring-purple-300 
    dark:hover:ring-purple-600
    active:scale-95"
          >
            Wishlist
          </button>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mt-3 px-6 py-2 rounded-lg font-semibold text-white 
    bg-gradient-to-r from-indigo-500 to-purple-600
    transition-all duration-300 ease-in-out 
    transform hover:scale-105 hover:shadow-lg 
    hover:from-purple-600 hover:to-indigo-500 
    dark:from-indigo-700 dark:to-purple-800 
    hover:ring-2 hover:ring-offset-2 hover:ring-purple-300 
    dark:hover:ring-purple-600
    active:scale-95"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>

      {/* Filters (Unchanged) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-6 px-4">
        <input
          type="text"
          placeholder="🔎 Search by brand"
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          className="w-full px-4 py-2 rounded-lg bg-white text-black dark:bg-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <select
          value={filters.fuelType}
          onChange={(e) => setFilters({ ...filters, fuelType: e.target.value })}
          className="w-full px-4 py-2 rounded-lg bg-white text-black dark:bg-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 shadow-sm"
        >
          <option value="">⛽ All Fuel Types</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="Electric">Electric</option>
        </select>
        <select
          value={filters.sortOrder}
          onChange={(e) =>
            setFilters({ ...filters, sortOrder: e.target.value })
          }
          className="w-full px-4 py-2 rounded-lg bg-white text-black dark:bg-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 shadow-sm"
        >
          <option value="">Sort By Price</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
        <input
          type="number"
          placeholder="Min ₹"
          value={filters.minPrice}
          onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
          className="w-full px-4 py-2 rounded-lg bg-white text-black dark:bg-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 shadow-sm"
        />
        <input
          type="number"
          placeholder="Max ₹"
          value={filters.maxPrice}
          onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
          className="w-full px-4 py-2 rounded-lg bg-white text-black dark:bg-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 shadow-sm"
        />
        <input
          type="number"
          placeholder="Seats"
          value={filters.seats}
          onChange={(e) => setFilters({ ...filters, seats: e.target.value })}
          className="w-full px-4 py-2 rounded-lg bg-white text-black dark:bg-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 shadow-sm"
        />
      </div>
    </nav>
  );
};

export default Navbar;
