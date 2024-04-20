import React from "react";
/** @jsxImportSource @emotion/react */
import { Layout, Typography, Row, Col, Card } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import {
  containerStyles,
  contentStyles,
  titleStyles,
  cardStyle,
  iconStyle,
  title,
  titleCard,
  footer,
  footerContent,
  footerText,
} from "./styles";
const { Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const HomePage = () => {
  return (
    <>
      <Layout css={containerStyles}>
        <Content css={contentStyles}>
          <div css={titleStyles}>
            <Title level={1} style={title}>
              Explore Ukraine on Wheels
            </Title>
            <Paragraph>
              Experience the freedom of the open road with Campervan Rentals
              Ukraine. Discover the beauty of Ukraine's landscapes, from
              majestic mountains to serene coastlines, at your own pace.
            </Paragraph>
          </div>
          <Row justify="center" gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card hoverable css={cardStyle}>
                <Title level={3} style={titleCard}>
                  Easy Booking
                </Title>
                <CheckCircleOutlined css={iconStyle} />
                <Paragraph>Simple and secure online booking process.</Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card hoverable css={cardStyle}>
                <Title level={3} style={titleCard}>
                  Quality Campervans
                </Title>
                <CheckCircleOutlined css={iconStyle} />
                <Paragraph>
                  Modern and well-maintained campervans for your comfort.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card hoverable css={cardStyle}>
                <Title level={3} style={titleCard}>
                  24/7 Support
                </Title>
                <CheckCircleOutlined css={iconStyle} />
                <Paragraph>
                  Customer service available round the clock.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card hoverable css={cardStyle}>
                <Title level={3} style={titleCard}>
                  Flexible Options
                </Title>
                <CheckCircleOutlined css={iconStyle} />
                <Paragraph>
                  Customizable rental plans to suit your needs.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </Content>
        <Footer css={footer}>
          <div css={footerContent}>
            <Paragraph css={footerText}>
              ©2024 Campervan Rentals Ukraine. Author Volodymyr Mikhnov.
            </Paragraph>
          </div>
        </Footer>
      </Layout>
    </>
  );
};

export default HomePage;
