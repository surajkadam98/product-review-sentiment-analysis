import { Col, Typography, Rate, Empty, Spin } from "antd";
import React from "react";
import { MessageOutlined } from "@ant-design/icons";
import { statusType } from "../utils/constant";

function Cards({ ratings, totalReviews, discount, status }) {
  let rating = 0;
  let totalRating = 0;
  let ratingResult = 0;
  if (ratings && ratings.length > 0) {
    rating = [...ratings].map((element) => {
      return +element.replace(",", "");
    });
    totalRating = ratings?.reduce((a, b) => +a + +b, 0);
    ratingResult =
      (5 * +rating[0] +
        4 * +rating[1] +
        3 * +rating[2] +
        2 * +rating[3] +
        1 * +rating[4]) /
      totalRating;
  }

  let ratingFix = rating - Math.round(ratingResult) < 0.5 ? 0 : 0.5;

  let cardData = [
    {
      id: 1,
      title: "Rating",
      data:
        (
          <Rate
            disabled
            allowHalf
            style={{ fontSize: "16px" }}
            value={Math.round(ratingResult) + ratingFix}
          />
        ) || "-",
      icon: "",
      iconColor: "#fadb14",
    },
    {
      id: 2,
      title: "Total Reviews",
      data: totalReviews || "-",
      icon: <MessageOutlined />,
      iconColor: "#1890ff",
    },
    {
      id: 3,
      title: "Discount",
      data: discount || "-",
      icon: "",
      iconColor: "#000",
    },
  ];

  return (
    <>
      <Col span={24}>
        <Typography.Title level={3}>Other Product Data</Typography.Title>
      </Col>
      <Col
        span={24}
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        {status === statusType.LOADING ? (
            <center>
              <Spin size="middle" />
            </center>
        ) : ratings || totalReviews || discount ? (
          <>
            {cardData.map((data) => {
              return (
                <Col
                  key={data.id}
                  span={7}
                  style={{
                    height: "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "10px",
                    boxShadow: "5px 5px 5px #ddd, -2px -2px 5px #ddd",
                    padding: "25px 0px",
                  }}
                >
                  <Typography.Text
                    style={{ fontSize: "16px" }}
                    strong
                    underline
                  >
                    {data.title}
                  </Typography.Text>
                  <span
                    style={{ fontSize: "20px", color: `${data.iconColor}` }}
                  >
                    {data.icon} {data.data}
                  </span>
                </Col>
              );
            })}
          </>
        ) : (
          <Empty />
        )}
      </Col>
    </>
  );
}

export default Cards;
