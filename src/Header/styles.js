import { css } from '@emotion/react';

export const headerStyle = css`
  background-color: #E44848;
  padding: 20px;
  color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const navStyle = css`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 10px;
  }

  li {
    margin-right: 20px;
    @media screen and (max-width: 767px) {
      margin: 10px 0;
    }
  }

  a {
    color: #FFFFFF;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 30px;
    background-color: #FF6B6B;
    transition: background-color 0.3s ease, transform 0.3s ease;
    display: inline-block;
  }

  a:hover {
    background-color: #FF8F8F;
    transform: translateY(-3px);
  }
`;
