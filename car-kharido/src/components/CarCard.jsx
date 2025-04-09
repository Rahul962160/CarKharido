import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

const CarCard = ({ car }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setIsWishlisted(storedWishlist.some((item) => item.id === car.id));
  }, [car.id]);

  const toggleWishlist = () => {
    let storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (isWishlisted) {
      storedWishlist = storedWishlist.filter((item) => item.id !== car.id);
      setIsWishlisted(false);
    } else {
      storedWishlist.push(car);
      setIsWishlisted(true);
    }

    localStorage.setItem("wishlist", JSON.stringify(storedWishlist));
  };
  return (
    <Card
      className="max-w-sm m-4 rounded-xl border border-gray-200 bg-white dark:bg-gray-800 
             shadow-md hover:shadow-2xl transform-gpu transition-all duration-500 
             hover:scale-[1.03] hover:border-indigo-500 hover:ring-2 hover:ring-indigo-200 dark:hover:ring-indigo-500"
    >
      <div className="overflow-hidden rounded-t-xl">
        <CardMedia
          component="img"
          height="140"
          image={car.image}
          alt={car.name}
          className="transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </div>
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          className="text-gray-800 dark:text-white"
        >
          {car.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="dark:text-gray-300"
        >
          Brand: {car.brand} <br />
          Fuel: {car.fuel} <br />
          Price: ₹{car.price.toLocaleString()} <br />
          Seats: {car.seats}
        </Typography>
        <Button
          variant={isWishlisted ? "outlined" : "contained"}
          color="secondary"
          className="mt-3 transition duration-300 ease-in-out hover:scale-105"
          onClick={toggleWishlist}
        >
          {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default CarCard;
