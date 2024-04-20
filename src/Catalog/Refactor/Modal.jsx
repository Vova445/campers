import React, { useState } from 'react';
import Modal from 'react-modal';
import { Tabs } from 'antd';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {
  nameAndClose,
  closeBtn,
  containerTwoInModal,
  priceInModal,
  ratingAndLocationText,
  modal,
  modalGallery,
  descriptionText,
  categoryFeatures,
  featuresContainer,
  containerFeatues,
  secondContainer,
  containerFeatuesTwo,
  detailsItem,
  detailsTitle,
  formDiv,
  reviewsContainer,
  commentContainer,
  avatar,
  avatarAndName,
} from '../styles';

import Form from './BookingForm';

import { ReactComponent as Rating } from '../../svg/icon_star.svg';
import { ReactComponent as EnabledLocation } from '../../svg/EnabledLocationIcon.svg';
import { ReactComponent as Close } from '../../svg/Close.svg';
import { ReactComponent as Adults } from '../../svg/Adults.svg';
import { ReactComponent as Transmission } from '../../svg/Transmission.svg';
import { ReactComponent as AC } from '../../svg/airConditioner.svg';
import { ReactComponent as Engine } from '../../svg/engine.svg';
import { ReactComponent as Kitchen } from '../../svg/Kitchen(2).svg';
import { ReactComponent as Bed } from '../../svg/Bed.svg';
import { ReactComponent as AirConditioner } from '../../svg/AirConditioner(2).svg';
import { ReactComponent as CD } from '../../svg/CD.svg';
import { ReactComponent as Radio } from '../../svg/Radio.svg';
import { ReactComponent as Hob } from '../../svg/Hob.svg';
import { ReactComponent as Toilet } from '../../svg/Toilet.svg';
import { ReactComponent as Freezer } from '../../svg/freezer.svg';
import { ReactComponent as Microwave } from '../../svg/Microwave.svg';

const { TabPane } = Tabs;

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(17, 18, 19, 0.4)',
  },
};
Modal.setAppElement('#root');

const CustomModal = ({ isOpen, onRequestClose, camper }) => {
  const [selectedTab, setSelectedTab] = useState('features');

  const handleTabClick = key => {
    setSelectedTab(key);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Book Camper"
      css={modal}
      style={customStyles}
    >
      <div css={nameAndClose}>
        <h2>{camper.name}</h2>
        <Close onClick={onRequestClose} css={closeBtn} />
      </div>

      <div css={containerTwoInModal}>
        <p css={ratingAndLocationText}>
          <Rating />
          <u>
            {camper.rating}({camper.reviews.length} Reviews)
          </u>
        </p>
        <p css={ratingAndLocationText}>
          <EnabledLocation /> {camper.location.split(',')[1].trim()},{' '}
          {camper.location.split(',')[0].trim()}
        </p>
        <p css={priceInModal}>
          Price: €{parseFloat(camper.price).toFixed(2).toLocaleString()}
        </p>
      </div>

      <div css={modalGallery}>
        {camper.gallery.map((photo, index) => (
          <div
            key={index}
            css={css`
              background-image: url(${photo});
              background-size: cover;
              background-position: center;
              width: 290px;
              height: 310px;
              border-radius: 10px;
            `}
          ></div>
        ))}
      </div>

      <p css={descriptionText}>{camper.description}</p>

      <Tabs
        activeKey={selectedTab}
        onTabClick={handleTabClick}
        css={css`
          .ant-tabs-ink-bar {
            background-color: red;
          }
        `}
      >
        <TabPane
          tab={
            <span
              css={css`
                color: rgb(16, 24, 40);
                font-family: Inter;
                font-size: 20px;
                font-weight: 600;
                line-height: 24px;
              `}
            >
              Features
            </span>
          }
          key="features"
        >
          <div css={containerFeatues}>
            <div css={secondContainer}>
              <div css={featuresContainer}>
                <div css={categoryFeatures}>
                  <Adults /> {camper.adults} adults
                </div>
                <div css={categoryFeatures}>
                  <Transmission />{' '}
                  {camper.transmission.charAt(0).toUpperCase() +
                    camper.transmission.slice(1)}
                </div>
                {camper.details.airConditioner !== undefined &&
                  camper.details.airConditioner >= 1 && (
                    <div css={categoryFeatures}>
                      <AC />
                      AC
                    </div>
                  )}
                <div css={categoryFeatures}>
                  <Engine />{' '}
                  {camper.engine.charAt(0).toUpperCase() +
                    camper.engine.slice(1)}
                </div>

                {camper.details.kitchen !== undefined &&
                  camper.details.kitchen >= 1 && (
                    <div css={categoryFeatures}>
                      <Kitchen />
                      Kitchen
                    </div>
                  )}
                <div css={categoryFeatures}>
                  <Bed /> {camper.details.beds} beds
                </div>
                <div style={{ width: '160px' }} css={categoryFeatures}>
                  <AirConditioner /> {camper.details.airConditioner} air
                  conditioner
                </div>
                {camper.details.CD !== undefined && camper.details.CD >= 1 && (
                  <div css={categoryFeatures}>
                    <CD />
                    CD
                  </div>
                )}

                {camper.details.radio !== undefined &&
                  camper.details.radio >= 1 && (
                    <div css={categoryFeatures}>
                      <Radio />
                      Radio
                    </div>
                  )}

                <div css={categoryFeatures}>
                  <Hob />
                  {camper.details.beds} hob
                </div>

                {camper.details.toilet !== undefined &&
                  camper.details.toilet >= 1 && (
                    <div css={categoryFeatures}>
                      <Toilet />
                      Toilet
                    </div>
                  )}

                {camper.details.freezer !== undefined &&
                  camper.details.freezer >= 1 && (
                    <div css={categoryFeatures}>
                      <Freezer />
                      Freezer
                    </div>
                  )}

                {camper.details.microwave !== undefined &&
                  camper.details.microwave >= 1 && (
                    <div css={categoryFeatures}>
                      <Microwave />
                      Microwave
                    </div>
                  )}
              </div>
              <div css={secondContainer}>
                <h2 css={detailsTitle}>Vehicle details</h2>
                <div css={containerFeatuesTwo}>
                  <p css={detailsItem}>
                    <span>Form:</span> {camper.form}
                  </p>
                  <p css={detailsItem}>
                    <span>Length:</span> {camper.length}
                  </p>
                  <p css={detailsItem}>
                    <span>Width:</span> {camper.width}
                  </p>
                  <p css={detailsItem}>
                    <span>Height:</span> {camper.height}
                  </p>
                  <p css={detailsItem}>
                    <span>Tank:</span> {camper.tank}
                  </p>
                  <p css={detailsItem}>
                    <span>Consumption:</span> {camper.consumption}
                  </p>
                </div>
              </div>
            </div>
            <div css={formDiv}>
              <Form />
            </div>
          </div>
        </TabPane>
        <TabPane
          tab={
            <span
              css={css`
                color: rgb(16, 24, 40);
                font-family: Inter;
                font-size: 20px;
                font-weight: 600;
                line-height: 24px;
              `}
            >
              Reviews
            </span>
          }
          key="reviews"
        >
          <div css={reviewsContainer}>
            <div css={commentContainer}>
              {camper.reviews.map((review, index) => (
                <div key={index}>
                  <div css={avatarAndName}>
                    <div css={avatar}>{review.reviewer_name.charAt(0)}</div>
                    {review.reviewer_name}
                  </div>
                  <div>{review.comment}</div>
                </div>
              ))}
            </div>
          </div>
        </TabPane>
      </Tabs>
    </Modal>
  );
};

export default CustomModal;
