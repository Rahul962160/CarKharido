import React from "react";

const Navbar = ({
  toggleWishlist,
  goHome,
  filters,
  setFilters,
  darkMode,
  setDarkMode,
}) => {
  return (
    <nav className="backdrop-blur-md bg-gradient-to-r from-cyan-200 via-sky-300 to-blue-400 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-black dark:text-white p-4 shadow-xl border-b border-blue-300 dark:border-gray-700">
      <div className="container mx-auto flex justify-between items-center">
        <h1
          className="
    text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent 
    bg-clip-text 
    bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 
    dark:from-yellow-400 dark:via-orange-500 dark:to-red-500
    drop-shadow-md dark:drop-shadow-lg 
    animate-pulse
  "
        >
          Car Kharido
        </h1>

        <div className="space-x-4 text-black text-xl font-bold">
          <button
            onClick={goHome}
            className="
    mt-3 px-6 py-2 rounded-lg font-semibold text-white 
    bg-gradient-to-r from-indigo-500 to-purple-600
    transition-all duration-300 ease-in-out 
    transform hover:scale-105 hover:shadow-lg 
    hover:from-purple-600 hover:to-indigo-500 
    dark:from-indigo-700 dark:to-purple-800 
    hover:ring-2 hover:ring-offset-2 hover:ring-purple-300 
    dark:hover:ring-purple-600
    active:scale-95
  "
          >
            Home
          </button>
          <button
            className="className={`
    mt-3 px-6 py-2 rounded-lg font-semibold text-white 
    bg-gradient-to-r from-indigo-500 to-purple-600
    transition-all duration-300 ease-in-out 
    transform hover:scale-105 hover:shadow-lg 
    hover:from-purple-600 hover:to-indigo-500 
    dark:from-indigo-700 dark:to-purple-800 
    hover:ring-2 hover:ring-offset-2 hover:ring-purple-300 
    dark:hover:ring-purple-600
    active:scale-95
  `}"
            onClick={toggleWishlist}
          >
            Wishlist
          </button>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="className={`
    mt-3 px-6 py-2 rounded-lg font-semibold text-white 
    bg-gradient-to-r from-indigo-500 to-purple-600
    transition-all duration-300 ease-in-out 
    transform hover:scale-105 hover:shadow-lg 
    hover:from-purple-600 hover:to-indigo-500 
    dark:from-indigo-700 dark:to-purple-800 
    hover:ring-2 hover:ring-offset-2 hover:ring-purple-300 
    dark:hover:ring-purple-600
    active:scale-95
  `}"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>

      {/* 🔍 Search & Filters */}
      <div className="flex flex-wrap gap-3 items-center mt-6 px-4">
        <input
          type="text"
          placeholder="🔎 Search by brand"
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          className="px-4 py-2 w-48 rounded-lg bg-white text-black dark:bg-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        <select
          value={filters.fuelType}
          onChange={(e) => setFilters({ ...filters, fuelType: e.target.value })}
          className="px-4 py-2 rounded-lg w-40 bg-white text-black dark:bg-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
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
          className="px-4 py-2 rounded-lg w-40 bg-white text-black dark:bg-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
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
          className="w-28 px-4 py-2 rounded-lg bg-white text-black dark:bg-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
        />

        <input
          type="number"
          placeholder="Max ₹"
          value={filters.maxPrice}
          onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
          className="w-28 px-4 py-2 rounded-lg bg-white text-black dark:bg-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
        />

        <input
          type="number"
          placeholder="Seats"
          value={filters.seats}
          onChange={(e) => setFilters({ ...filters, seats: e.target.value })}
          className="w-24 px-4 py-2 rounded-lg bg-white text-black dark:bg-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
        />
      </div>
    </nav>
  );
};

export default Navbar;
