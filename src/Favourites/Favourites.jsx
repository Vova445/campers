import React from "react";
import { useSelector } from "react-redux";

const Favourites = () => {
  const favorites = useSelector((state) => state.favorites);

  if (!favorites || favorites.length === 0) {
    return <div>No favourites selected yet.</div>;
  }

  return (
    <div>
      <h1>Favourites</h1>
      <ul>
        {favorites.map((advert, index) => (
          <li key={index}>
            <span>{advert._id}</span>
            <span>{advert.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favourites;
