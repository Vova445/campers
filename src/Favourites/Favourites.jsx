/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, Typography, Rate, Avatar, Button, Popconfirm, message } from 'antd';
import { ReactComponent as RatingIcon } from "../svg/icon_star.svg";
import { removeFromFavorites } from '../Redux/actions';
import { animated, useSpring } from 'react-spring';

const { Text } = Typography;

const Favourites = ({ adverts }) => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const handleRemove = (advertId) => {
    dispatch(removeFromFavorites(advertId));
    message.success('Removed from favourites');
  };

  return (
    <div css={containerStyle}>
      <h1 css={titleStyle}>Favourites</h1>
      <List
        itemLayout="horizontal"
        dataSource={favorites}
        renderItem={(advertId, index) => {
          const advert = adverts.find((ad) => ad._id === advertId);
          if (advert) {
            return (
              <ListItem key={index} advert={advert} handleRemove={handleRemove} />
            );
          }
          return null;
        }}
      />
    </div>
  );
};

const ListItem = ({ advert, handleRemove }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={props}>
      <List.Item css={listItemStyle}>
        <div css={contentStyle}>
          <Avatar src={advert.gallery[0]} size={80} css={avatarStyle} />
          <div>
            <Text strong css={nameStyle}>{advert.name}</Text>
            <div>
              <Text css={priceStyle}>€{parseFloat(advert.price).toFixed(2).toLocaleString()}</Text>
              <span css={ratingStyle}>
                <RatingIcon css={ratingIconStyle} />
                <u>{advert.rating} ({advert.reviews.length} Reviews)</u>
              </span>
            </div>
          </div>
        </div>
        <div css={actionStyle}>
          <Rate allowHalf defaultValue={advert.rating} disabled css={rateStyle} />
          <Popconfirm
            title="Are you sure to remove this item from favourites?"
            onConfirm={() => handleRemove(advert._id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="text" danger css={buttonStyle}>Remove</Button>
          </Popconfirm>
        </div>
      </List.Item>
    </animated.div>
  );
};

const containerStyle = css`
  padding: 20px;
`;

const titleStyle = css`
  margin-bottom: 40px;
  font-size: 32px;
  text-align: center;
`;

const listItemStyle = css`
  margin-bottom: 20px;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const contentStyle = css`
  display: flex;
  align-items: center;
`;

const avatarStyle = css`
  background-color: #f56a00;
  margin-right: 20px;
`;

const nameStyle = css`
  font-size: 20px;
  color: red;
`;

const priceStyle = css`
  margin-right: 20px;
  font-size: 16px;
  color: #333;
`;

const ratingStyle = css`
  margin-right: 20px;
  font-size: 16px;
  color: #666;
`;

const ratingIconStyle = css`
  vertical-align: middle;
  margin-right: 5px;
`;

const actionStyle = css`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const rateStyle = css`
  font-size: 16px;
  color: #FFD700;
`;

const buttonStyle = css`
  margin-left: 10px;
  font-size: 16px;
`;

export default Favourites;
