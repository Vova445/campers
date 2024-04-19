import React, { useState, useEffect } from "react";
/** @jsxImportSource @emotion/react */
import {
  containerStyles,
  advertContainerStyles,
  galleryImageStyles,
  button,
  loadMoreButton,
  nameAndPrice,
  nameAndPriceText,
  ratingAndLocation,
  description,
  loaderContainer,
  loader
} from "./styles";

import SidePanel from "./Refactor/SidePanel";

import { ReactComponent as EnabledLocation } from "../svg/EnabledLocationIcon.svg";
import { ReactComponent as FavouriteIcon } from "../svg/heart.svg";
import { ReactComponent as Rating } from "../svg/icon_star.svg";


import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../Redux/actions";

const Catalog = () => {
  const [adverts, setAdverts] = useState([]);
  const [visibleAdverts, setVisibleAdverts] = useState([]);
  const [loadMoreVisible, setLoadMoreVisible] = useState(true);
  const [loading, setLoading] = useState(true);
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://661ff5d73bf790e070ae8dac.mockapi.io/Advert")
      .then((response) => {
        setAdverts(response.data);
        setVisibleAdverts(response.data.slice(0, 4));
        if (response.data.length <= 4) {
          setLoadMoreVisible(false);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const loadMore = () => {
    const nextVisibleAdverts = adverts.slice(
      visibleAdverts.length,
      visibleAdverts.length + 4
    );
    setVisibleAdverts((prevState) => [...prevState, ...nextVisibleAdverts]);
    if (visibleAdverts.length + nextVisibleAdverts.length >= adverts.length) {
      setLoadMoreVisible(false);
    }
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    } else {
      return text;
    }
  };

  const handleAddToFavorites = (advertId) => {
    if (!favorites.includes(advertId)) {
      dispatch(addToFavorites(advertId));
    } else {
      dispatch(removeFromFavorites(advertId));
    }
  };

  return (
    <main style={{ marginTop: "30px" }}>
      {loading ? ( 
        <div css={loaderContainer}>
          <div css={loader}></div>
        </div>
      ) : (
      <div css={containerStyles} className="catalog">
       <SidePanel locations={adverts.map(ad => ad.location)}/>
        <div>
          {visibleAdverts.map((ad) => (
            <div
              key={ad._id}
              css={advertContainerStyles}
              className="advert-container"
            >
              <div className="gallery">
                {ad.gallery.length > 0 && (
                  <div
                    css={galleryImageStyles}
                    style={{ backgroundImage: `url(${ad.gallery[0]})` }}
                  ></div>
                )}
              </div>
              <div>
                <div css={nameAndPrice}>
                  <h2 css={nameAndPriceText}>{ad.name}</h2>
                  <h2 css={nameAndPriceText}>
                    €{parseFloat(ad.price).toFixed(2).toLocaleString()}{" "}
                    <FavouriteIcon
                      style={{
                        fill: favorites.includes(ad._id) ? "#E44848" : "none",
                      }}
                      onClick={() => handleAddToFavorites(ad._id)}
                    />
                  </h2>
                </div>
                <div css={ratingAndLocation}>
                  <p>
                    <Rating />
                    {ad.rating}({ad.reviews.length} Reviews)
                  </p>
                  <p>
                    <EnabledLocation /> {ad.location}
                  </p>
                </div>
                <p css={description}>{truncateText(ad.description, 70)}</p>
                <button css={button}>Show more</button>
              </div>
            </div>
          ))}
           {loadMoreVisible && (
        <button onClick={loadMore} css={loadMoreButton}>
          Load more
        </button>
      )}
        </div>
        
      </div>
      )}
    </main>
  );
};

export default Catalog;
