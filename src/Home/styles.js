import { css } from '@emotion/react';

export const containerStyles = css`
  min-height: 100vh;
  background-color: #ffffff;
  color: #000000;
`;

export const contentStyles = css`
  padding: 50px;
  @media screen and (max-width: 767px) {
    padding: 30px;
  }
  @media screen and (max-width: 479px) {
    padding: 20px;
  }
  @media screen and (min-width: 768px) and (max-width: 1385px) {
    padding: 40px;
  }
`;

export const titleStyles = css`
  text-align: center;
  margin-bottom: 50px;
  @media screen and (max-width: 767px) {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 479px) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 768px) and (max-width: 1385px) {
    margin-bottom: 40px;
  }
`;

export const cardStyle = css`
  text-align: center;
  background-color: #ffffff;
  border: 1px solid #e44848;
  height: 280px; /* Фіксована висота */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  @media screen and (max-width: 767px) {
    height: auto;
  }
  @media screen and (max-width: 479px) {
    height: auto;
  }
  @media screen and (min-width: 768px) and (max-width: 1385px) {
    margin: 10px;
    height:350px;
    
  }
`;


export const iconStyle = css`
  font-size: 24px;
  color: #e44848;
  margin-bottom: 10px;
  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
  @media screen and (max-width: 479px) {
    font-size: 18px;
  }
`;

export const title = css`
  color: #e44848;
`;

export const titleCard = css`
  color: #e44848;
  margin-bottom: 10px;
  @media screen and (max-width: 767px) {
    font-size: 18px;
    margin-bottom: 5px;
  }
  @media screen and (max-width: 479px) {
    font-size: 16px;
    margin-bottom: 3px;
  }
`;

export const footer = css`
  background-color: #e44848;
  text-align: center;
`;

export const footerContent = css`
  padding: 20px;
  @media screen and (max-width: 767px) {
    padding: 15px;
  }
  @media screen and (max-width: 479px) {
    padding: 10px;
  }
`;

export const footerText = css`
  color: #ffffff;
  font-size: 16px;
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
  @media screen and (max-width: 479px) {
    font-size: 12px;
  }
`;
