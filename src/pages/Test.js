import React, { useState } from "react";
import {
  Row,
  Col,
  Alert,
  Input,
  Button,
  message,
  Table,
  Tag,
} from "antd";
import { SmileOutlined, MehOutlined, FrownOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { testHistoryReducer } from "../state/testHistory/testHistorySlice";
import {testModel} from '../services/index'

const { Column } = Table;

const Test = () => {
  const dispatch = useDispatch();
  const {testHistory} = useSelector((state) => state.testHistory);

  const [testData, setTestData] = useState("");

  const onTestingDataChange = (event) => {
    setTestData(event.target.value);
  };

  const handleTesting = () => {
    if(!testData){
      message.error('Please enter test data')
      return
    }
    const response = testModel({ data: testData})
    response.then((res) => {
      if (res.data) {
        let tempTestResult = {
          data: testData,
          result:
            res.data.neg < 0 || res.data.compound < 0
              ? "Negative"
              : res.data.compound > 0.2
              ? "Positive"
              : "Neutral",
          time: `${new Date().getHours()} Hr: ${new Date().getMinutes()} Min: ${new Date().getSeconds()} Sec`,
        };
        dispatch(testHistoryReducer(tempTestResult));
        setTestData("");
      } else {
        message.error("Something went wrong");
        setTestData("");
      }
    })
  };

  return (
    <Row gutter={[10, 50]}>
      <Col span={12}>
        <Alert
          showIcon
          type="info"
          message="Please enter test data word, sentence or json."
          closable
        />
        <br></br>
        <Row justify="end" gutter={[0, 5]}>
          <Col span={24}>
            <Input.TextArea
              placeholder="Eg. That's awesome!"
              value={testData}
              allowClear
              showCount
              maxLength={2000}
              autoSize={{ minRows: 10 }}
              onChange={onTestingDataChange}
            ></Input.TextArea>
          </Col>
          <Button type="primary" size="large" onClick={handleTesting}>
            Test model
          </Button>
        </Row>
      </Col>
      <Col span={12}>
        <Table dataSource={testHistory || []}>
          <Column title="Test Data" dataIndex="data" key="data"   ellipsis />
          <Column
            title="Result"
            dataIndex="result"
            key="result"
            render={(result) => (
              <>
                {result === 'Negative' ? (
                  <Tag icon={<FrownOutlined />} color="red">
                    Negative
                  </Tag>
                ) : result === 'Positive' ? (
                  <Tag icon={<SmileOutlined />} color="lime">
                    Positive
                  </Tag>
                ) : (
                  <Tag icon={<MehOutlined />} color="gold">
                    Neutral
                  </Tag>
                )}
              </>
            )}
          />
          <Column title="Time" dataIndex="time" key="time" />
        </Table>
      </Col>
    </Row>
  );
};

export default Test;
