import { Button, Carousel, Image, Modal, Row, Col } from "antd";
import React from "react";

function ImageModal({
  productImages,
  isImagesmodalVisible,
  setIsImagesmodalVisible,
}) {
  const handleBack = () => {
    setIsImagesmodalVisible(!isImagesmodalVisible);
  };

  const handleCancel = () => {
    setIsImagesmodalVisible(!isImagesmodalVisible);
  };


  return (
    <Modal
      className="hello"
      title="Product Images"
      visible={isImagesmodalVisible}
      onCancel={handleCancel}
      footer={
        <Button onClick={handleBack} type="primary">
          Back
        </Button>
      }
    >
      <Carousel autoplay>
        {productImages.map((img) => (
          <div key={productImages.indexOf(img)}>
            <Row>
              <Col span={6}></Col>
              <Col span={12}>
                <Image
                  src={img}
                  style={{
                    width: "100%",
                  }}
                />
              </Col>
              <Col span={6}></Col>
            </Row>
          </div>
        ))}
      </Carousel>
    </Modal>
  );
}

export default ImageModal;
