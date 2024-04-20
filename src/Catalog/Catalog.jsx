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
  loader,
  categoryContainer,
  category,
} from "./styles";

import SidePanel from "./Refactor/SidePanel";
import CustomModal from './Refactor/Modal';

import { ReactComponent as EnabledLocation } from "../svg/EnabledLocationIcon.svg";
import { ReactComponent as FavouriteIcon } from "../svg/heart.svg";
import { ReactComponent as Rating } from "../svg/icon_star.svg";
import { ReactComponent as Adults } from "../svg/Adults.svg";
import { ReactComponent as Transmission } from "../svg/Transmission.svg";
import { ReactComponent as Engine } from "../svg/engine.svg";
import { ReactComponent as Kitchen } from "../svg/Kitchen(2).svg";
import { ReactComponent as Bed } from "../svg/Bed.svg";
import { ReactComponent as AirConditioner } from "../svg/airConditioner.svg";

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
  const [showModal, setShowModal] = useState(false);
  const [selectedCamper, setSelectedCamper] = useState(null); 

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

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);




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

  const handleShowModal = (camper) => {
    setSelectedCamper(camper);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
                    <u>{ad.rating}({ad.reviews.length} Reviews)</u>
                  </p>
                  <p>
                    <EnabledLocation /> {ad.location.split(',')[1].trim()}, {ad.location.split(',')[0].trim()}
                  </p>
                </div>
                <p css={description}>{truncateText(ad.description, 70)}</p>
                <div css={categoryContainer}>
                      <div css={category}><Adults /> {ad.adults} adults</div>
                      <div css={category}><Transmission /> {ad.transmission.charAt(0).toUpperCase() + ad.transmission.slice(1)}</div>
                      <div css={category}><Engine /> {ad.engine.charAt(0).toUpperCase() + ad.engine.slice(1)}</div>
                      {ad.details.kitchen && (<div css={category}><Kitchen />Kitchen</div>)}
                      <div css={category}><Bed />{ad.details.beds} beds</div>
                      {ad.details.airConditioner && (
                      <div css={category}>
                      <AirConditioner />AC
                      </div>
                        )}
                  </div>
               <button css={button} onClick={() => handleShowModal(ad)}>Show more</button>
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
      {selectedCamper && (
        <CustomModal
          isOpen={showModal}
          onRequestClose={handleCloseModal}
          camper={selectedCamper}
        />
      )}
    </main>
  );
};

export default Catalog;
