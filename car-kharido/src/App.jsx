import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import CarList from "./components/CarList";
import Footer from "./components/Footer";
import Wishlist from "./components/Wishlist";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [filters, setFilters] = useState({
    search: "",
    fuelType: "",
    minPrice: "",
    maxPrice: "",
    seats: "",
    sortOrder: "",
  });
  const [showWishlist, setShowWishlist] = useState(false);
  const goHome = () => setShowWishlist(false);

  // 👇 Yeh hook html tag pe class "dark" toggle karta hai
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`flex flex-col min-h-screen ${
        darkMode ? "dark" : ""
      } bg-white dark:bg-gray-950 text-black dark:text-white`}
    >
      <Navbar
        toggleWishlist={() => setShowWishlist(!showWishlist)}
        goHome={goHome}
        filters={filters}
        setFilters={setFilters}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="flex-grow bg-cyan-50 dark:bg-neutral-400 text-black dark:text-white">
        {showWishlist ? <Wishlist /> : <CarList filters={filters} />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
