import { Progress, Row, Col, Typography, Empty, Spin } from "antd";
import React from "react";
import { StarOutlined } from "@ant-design/icons";
import { statusType } from "../utils/constant";

const ProgressBar = ({ status, rating }) => {
  let totalRating = rating?.reduce((a, b) => +a + +b, 0);

  return (
    <Col span={24}>
      <Typography.Title level={3}>Rating Stats</Typography.Title>
      {status === statusType.LOADING ? (
        <center>
          <Spin size="default"/>
        </center>
      ) : rating ? (
        <>
          <Row gutter={[10, 10]}>
            <Col span={2}>
              5 <StarOutlined />
            </Col>
            <Col span={10}>
              <Progress
                percent={Math.round((+rating[0] / totalRating) * 100)}
                strokeColor="#5ad8a6"
              />
            </Col>
          </Row>
          <Row gutter={[10, 10]}>
            <Col span={2}>
              4 <StarOutlined />
            </Col>
            <Col span={10}>
              <Progress
                percent={Math.round((+rating[1] / totalRating) * 100)}
                strokeColor="#5ad8a6"
              />
            </Col>
          </Row>
          <Row gutter={[10, 10]}>
            <Col span={2}>
              3 <StarOutlined />
            </Col>
            <Col span={10}>
              <Progress
                percent={Math.round((+rating[2] / totalRating) * 100)}
                strokeColor="#F6BD16"
              />
            </Col>
          </Row>
          <Row gutter={[10, 10]}>
            <Col span={2}>
              2 <StarOutlined />
            </Col>
            <Col span={10}>
              <Progress
                percent={Math.round((+rating[3] / totalRating) * 100)}
                strokeColor="#F6BD16"
              />
            </Col>
          </Row>
          <Row gutter={[10, 10]}>
            <Col span={2}>
              1 <StarOutlined />
            </Col>
            <Col span={10}>
              <Progress
                percent={Math.round((+rating[4] / totalRating) * 100)}
                strokeColor="#E8684A"
              />
            </Col>
          </Row>
        </>
      ) : (
        <Empty />
      )}
    </Col>
  );
};

export default ProgressBar;
