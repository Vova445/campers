import { css } from "@emotion/react";

export const containerStyles = css`
  display: flex;
  justify-content: space-evenly;
`;

export const searchFormStyles = css`
  width: 30%;
`;

export const sidePanelStyles = css`
  width: 30%;
`;

export const sidePanelItemStyles = css`
  margin-bottom: 64px;
  margin-top: 14px;
  width: 360px;
`;

export const hr = css`
  border: 1px solid rgba(16, 24, 40, 0.1);
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const advertContainerStyles = css`
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
`;

export const galleryImageStyles = css`
  width: 290px;
  height: 310px;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  margin-right: 24px;
  background-repeat: no-repeat;
`;

export const button = css`
  border-radius: 200px;
  background: rgb(228, 72, 72);
  padding: 16px 60px;
  cursor: pointer;
  color: white;
  border: none;
  &:hover {
    background: rgb(216, 67, 67);
  }
`;

export const loadMoreButton = css`
  padding: 16px 32px;
  border: 1px solid rgba(71, 84, 103, 0.2);
  border-radius: 200px;
  cursor: pointer;
  background-color: transparent;
  transition: 0.3s;
  display: flex;
  margin: 0 auto;
  &:hover {
    border: 1px solid rgb(228, 72, 72);
  }
`;

export const nameAndPrice = css`
  display: flex;
  justify-content: space-between;
  height: 40px;
`;

export const locationInput = css`
  border-radius: 10px;
  background: rgb(247, 247, 247);
  border: none;
  padding: 18px;
  width: 360px;
  padding-left: 44px;
  font-family: Inter;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const locationLabel = css`
  color: rgba(16, 24, 40, 0.6);
  font-family: Inter;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;

export const iconStyle = css`
  position: relative;
  top: 43px;
  left: 18px;
`;

export const locationInputContainer = css`
  position: relative;
`;

export const suggestionsList = css`
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  z-index: 100;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 5px 0;
  max-height: 200px;
  overflow-y: auto;
  width: 100%;
`;

export const suggestionItem = css`
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }
`;

export const filters = css`
  margin-top: 32px;
  color: #475467;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
`;

export const topContainer = css`
  margin-top: 50px;
`;

export const equipmentItem = css`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 113px;
  height: 95px;
  gap: 8px;
  align-items: center;
  justify-content: center;
  background: transparent;
  transition: 0.4s;
  cursor: pointer;
  font-family: Inter;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  &:hover {
    border: 1px solid rgb(228, 72, 72);
  }
`;

export const vehicleEquipmentBox = css`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 360px;
`;

export const subtitleFilter = css`
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const nameAndPriceText = css`
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
`;

export const ratingAndLocation = css`
  display: flex;
  gap: 16px;
  align-items: center;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 24px;
`;

export const description = css`
  color: rgb(71, 84, 103);
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

export const loaderContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const loader = css`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
