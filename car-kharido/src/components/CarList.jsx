import React, { useEffect, useState } from "react";
import CarCard from "./CarCard";
import carData from "../data/mockCars";

const CarList = ({ filters }) => {
  const [filteredCars, setFilteredCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 8;

  useEffect(() => {
    let result = carData;

    if (filters.minPrice) {
      result = result.filter((car) => car.price >= Number(filters.minPrice));
    }

    if (filters.maxPrice) {
      result = result.filter((car) => car.price <= Number(filters.maxPrice));
    }

    if (filters.seats) {
      result = result.filter((car) => car.seats === Number(filters.seats));
    }

    if (filters.search) {
      result = result.filter((car) =>
        car.brand.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.fuelType) {
      result = result.filter((car) => car.fuel === filters.fuelType);
    }
    if (filters.sortOrder === "low-to-high") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (filters.sortOrder === "high-to-low") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    setFilteredCars(result);
    setCurrentPage(1);
  }, [filters]);

  const totalPages = Math.ceil(filteredCars.length / carsPerPage);
  const startIndex = (currentPage - 1) * carsPerPage;
  const currentCars = filteredCars.slice(startIndex, startIndex + carsPerPage);

  const goToPrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex flex-col items-center py-6 ">
      {filteredCars.length === 0 ? (
        <p className="text-center text-xl font-semibold text-gray-600 mt-10">
          No cars found matching your filters.
        </p>
      ) : (
        <>
          <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
            {currentCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

          {filteredCars.length > carsPerPage && (
            <div className="v mt-6 flex space-x-4">
              <button
                onClick={goToPrevious}
                disabled={currentPage === 1}
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
                Previous
              </button>
              <span className="self-center text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100 bg-white/30 dark:bg-white/10 px-4 py-1 rounded-full shadow-sm ring-1 ring-gray-300 dark:ring-gray-600">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={goToNext}
                disabled={currentPage === totalPages}
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
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CarList;
