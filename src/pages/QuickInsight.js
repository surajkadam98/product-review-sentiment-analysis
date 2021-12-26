import {
  Row,
  Col,
  Result,
  Input,
  Button,
  Popconfirm,
  Alert,
  message,
  Spin,
} from "antd";
import React, { useState, useEffect } from "react";
import {
  MonitorOutlined,
  ClearOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { statusType } from "../utils/constant";
import ProductInsights from "../components/ProductInsights";
import { useDispatch, useSelector } from "react-redux";
import {
  quickInsightState,
  clean,
  setStatus,
  getProductQuickInsight,
} from "../state/quickInsight/quickInsightSlice";
import Tooltip from "antd/es/tooltip";

const { Search } = Input;

const QuickInsights = () => {
  const [productUrl, setProductUrl] = useState("");
  const quickInsight = useSelector(quickInsightState);
  const dispatch = useDispatch();

  const onSearch = (value) => {
    setProductUrl("");
    if (!value) {
      message.warn("Please enter product url to get quick insights");
      return;
    }
    if (!value.includes("flipkart.com/")) {
      message.warn("Please enter flipkart product url!");
      return;
    }
    dispatch(getProductQuickInsight(value));
  };

  useEffect(() => {
    return () => {
      dispatch(clean);
    };
  }, []);

  const clearAnalysis = () => {
    dispatch(clean());
    dispatch(setStatus(statusType.IDLE));
  };

  return (
    <Row gutter={[0, 24]}>
      <Col span={24}>
        <Row
          justify="space-between"
          style={{ height: "50px", alignItems: "center" }}
        >
          <Col span={12} style={{ display: "flex", alignItems: "center" }}>
            <Search
              value={productUrl}
              size="large"
              onChange={(e) => setProductUrl(e.target.value)}
              placeholder={"Eg: https://flipkart.com/..."}
              onSearch={onSearch}
              enterButton={<MonitorOutlined style={{ fontSize: "25px" }} />}
            />
            <Tooltip title="Currently only flipkart product anlaysis support!">
              <InfoCircleOutlined
                color="blue"
                style={{
                  marginLeft: "10px",
                  fontSize: "22px",
                  color: "#1890ff",
                }}
              />
            </Tooltip>
          </Col>
          <Col>
            <Alert
              message="Analysis is done on most recent 100 reviews"
              type="info"
              showIcon
              closable
            />
          </Col>
          {quickInsight.status === statusType.INFORMATION ? (
            <Col>
              <Popconfirm
                title="Are you sure to clear analysis?"
                onConfirm={() => clearAnalysis()}
                okText="Yes"
                cancelText="No"
                placement="left"
              >
                <Button type="primary" size="large">
                  <ClearOutlined style={{ fontSize: "25px" }} />
                </Button>
              </Popconfirm>
            </Col>
          ) : (
            ""
          )}
        </Row>
        <Row justify="center" style={{ height: "92%" }}>
          {quickInsight.status === statusType.IDLE ? (
            <Result style={{ height: "70%" }} status="404" title="" />
          ) : quickInsight.status === statusType.LOADING ? (
            <center style={{ marginTop: "200px" }}>
              <Spin size="large" />
            </center>
          ) : quickInsight.status === statusType.ERROR ? (
            <Result
              style={{ height: "70%" }}
              status="500"
              title=""
              subTitle="Sorry something went wrong, please try again!"
            />
          ) : (
            <ProductInsights
              quickInsight={quickInsight.quickInsight}
              status={quickInsight.status}
            />
          )}
        </Row>
      </Col>
    </Row>
  );
};

export default QuickInsights;
