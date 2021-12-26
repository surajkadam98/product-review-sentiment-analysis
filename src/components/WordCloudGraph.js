import { Alert, Col, Empty, Typography, Spin } from "antd";
import React from "react";
import { WordCloud } from "@ant-design/charts";
import { statusType } from "../utils/constant";

function WordCloudGraph({ data, status }) {
  let wordCloudConfig = {
    data: data,
    wordField: "word",
    weightField: "value",
    colorField: "word",
    wordStyle: {
      fontFamily: "Roboto",
      fontSize: [50, 150],
      rotation: 0,
    },
    random: () => {
      return 0.5;
    },
  };

  return (
    <Col span={24}>
      <Typography.Title level={2}>Word Cloud</Typography.Title>
      <Alert
        message="This words are frequently used in reviews, hover on word to know count"
        type="info"
        showIcon
        closable
      />
      <br></br>
      <br></br>
      {status === statusType.LOADING ? (
        <center>
          <Spin size="default"/>
        </center>
      ) : data ? (
        <WordCloud {...wordCloudConfig} />
      ) : (
        <Empty />
      )}
    </Col>
  );
}

export default WordCloudGraph;
