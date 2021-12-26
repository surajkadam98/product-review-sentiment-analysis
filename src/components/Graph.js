import React from "react";
import { Row, Col, Typography } from "antd";
import Cards from "./Cards";
import { DoughnutGraph } from "./DoughnutGraph";
import ProgressBar from "./ProgressBar";

export function Graphs({ status, quickInsight, insightData}) {
  return (
    <Col
      span={12}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingLeft: "10px",
      }}
    >
      <Row justify="start" align="middle" style={{ position: "relative" }}>
        <Col span={24}>
          <Typography.Title level={3}>
            Reviews Sentiment Analysis
          </Typography.Title>
        </Col>
        <Col span={24}>
          <DoughnutGraph
            positiveReviewCount={quickInsight?.positiveReviewCount}
            neutralReviewCount={quickInsight?.neutralReviewCount }
            negativeReviewCount={quickInsight?.negativeReviewCount}
            status={status}
            reviewCount={quickInsight?.totalReviewCount}
          />
        </Col>
      </Row>
      <br></br>
      <Row>
        <Cards
          ratings={quickInsight?.ratings }
          totalReviews={quickInsight?.totalReviewCount }
          discount={quickInsight?.productDiscount }
          status={status}
        />
      </Row>
      <br></br>
      <Row justify="start" align="middle">
        <ProgressBar status={status} rating={quickInsight?.ratings} />
      </Row>
    </Col>
  );
}

export default Graphs;