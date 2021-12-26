import React, { useState } from "react";
import { Descriptions, Image, Col, Typography, Breadcrumb, Empty, Spin } from "antd";
import ImageModal from "./ImageModal";
import { statusType } from "../utils/constant";

function ProductInfo({
  productImages,
  productId,
  productBrand,
  productName,
  productPrice,
  actualPrice,
  productCategory,
  status,
}) {
  const [isImagesmodalVisible, setIsImagesmodalVisible] = useState(false);
  return (
    <Col span={24} style={{ height: "100%" }}>
      {status === statusType.LOADING ? (
        <center>
          <Spin size="default"/>
        </center>
      ) : productImages && productName ? (
        <ImageModal
          productImages={productImages}
          isImagesmodalVisible={isImagesmodalVisible}
          setIsImagesmodalVisible={setIsImagesmodalVisible}
        />
      ) : (
        <Empty />
      )}
      <Typography.Title level={3}>Product Details</Typography.Title>
      {status === statusType.LOADING ? (
        <center>
          <Spin size="default"/>
        </center>
      ) : productImages && productName ? (
        <Descriptions layout="horizontal" column={4} bordered>
          <Descriptions.Item
            label="Product Image"
            span={4}
            style={{ position: "relative" }}
          >
            <div
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                style={{ maxWidth: 200 }}
                // width={100}
                src={productImages[0]}
              />
            </div>

            <Typography.Text
              underline
              style={{
                position: "absolute",
                bottom: 5,
                right: 20,
                color: "#1890ff",
                cursor: "pointer",
                fontStyle: "underlined",
              }}
              onClick={() => setIsImagesmodalVisible(true)}
            >
              More
            </Typography.Text>
          </Descriptions.Item>
          <Descriptions.Item label="Product Id" span={4}>
            {productId || "-"}
          </Descriptions.Item>
          <Descriptions.Item label="Product Brand" span={4}>
            {productBrand || productName?.split(" ")[0] || "-"}
          </Descriptions.Item>
          <Descriptions.Item label="Product Name" span={4}>
            {productName || "-"}
          </Descriptions.Item>
          <Descriptions.Item label="Product Price" span={4}>
            Rs. {productPrice || "-"}
          </Descriptions.Item>
          <Descriptions.Item label="Actual Price" span={4}>
            Rs. {actualPrice || "-"}
          </Descriptions.Item>
          <Descriptions.Item label="Breadcrumb" span={4}>
            {productCategory ? (
              <>
                <Breadcrumb separator=">">
                  {productCategory.map((cat) => (
                    <Breadcrumb.Item>{cat}</Breadcrumb.Item>
                  ))}
                </Breadcrumb>
              </>
            ) : (
              "Home"
            )}
          </Descriptions.Item>
        </Descriptions>
      ) : (
        <Empty />
      )}
    </Col>
  );
}

export default ProductInfo;
