import React, { useState } from "react";
import { Button, Row, Col, Input, Alert, message, Popconfirm } from "antd";
import { ReloadOutlined } from "@ant-design/icons";
import { trainModel, resetModel } from "../services";

const Train = () => {
  const [trainData, setTrainData] = useState("");

  const onTrainingDataChange = (event) => {
    setTrainData(event.target.value);
  };
  const handleTraining = () => {
    if (!trainData) {
      message.error("Please enter training data");
      return;
    }
    const response = trainModel({ data: trainData });
    response.then((res) => {
      if (res.data === "success") {
        message.success("Model updated successfully!");
        setTrainData("");
      } else {
        message.error("Something went wrong");
        setTrainData("");
      }
    });
  };

  const resetModal = () => {
    const response = resetModel();
    response.then((res) => {
      if (res.data === "success") {
        message.success("Reset model successfully!");
      } else {
        message.error("Something went wrong");
      }
    });
  };

  return (
    <div>
      <Row align="middle">
        <Col span={12}>
          <Alert
            style={{ textAlign: "start" }}
            action
            showIcon
            type="info"
            message="Please enter traning data in json format as shown in text area."
            closable
          />
          <br></br>
          <Row justify="end" gutter={[0, 5]}>
            <Col span={24}>
              <Input.TextArea
                placeholder='Eg: {"good": 1, "Ok": 0, "Bad": -1}'
                value={trainData}
                allowClear
                showCount
                maxLength={2000}
                autoSize={{ minRows: 10 }}
                onChange={onTrainingDataChange}
              ></Input.TextArea>
            </Col>
            <Button type="primary" size="large" onClick={handleTraining}>
              Train model
            </Button>
          </Row>
        </Col>
        <Col span={12}>
          <Row justify="center">
            <Popconfirm 
            title={"Are you sure?"}
            onConfirm={() => resetModal()}
            okText='Yes'
            cancelText='No'
            >
              <Button
                danger
                icon={<ReloadOutlined />}>
                Reset Model
              </Button>
            </Popconfirm>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Train;
