import React from "react";
import { Row, Col } from "antd";
import ProductInfo from "./ProductInfo";
import WordCloudGraph from "./WordCloudGraph";
import Graphs from "./Graph";

const ProductInsights = ({ quickInsight, status}) => {
  return (
    <Col span={24} style={{ padding: "10px 0" }}>
      <Row>
        <Col span={12} style={{ paddingRight: "10px" }}>
          <ProductInfo
            productImages={quickInsight?.productImages}
            productId={quickInsight?.productId}
            productBrand={quickInsight?.productBrand}
            productName={quickInsight?.productName}
            productPrice={quickInsight?.productPrice }
            actualPrice={quickInsight?.productActualPrice}
            productCategory={quickInsight?.productCategory}
            status={status}
          />
        </Col>
        <Graphs quickInsight={quickInsight} status={status} />
      </Row>
      <br></br>
      <Row>
        <WordCloudGraph data={quickInsight?.mostCommonWords} status={status} />
      </Row>
    </Col>
  );
};

export default ProductInsights;
