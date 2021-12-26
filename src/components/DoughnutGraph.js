import { Pie } from "@ant-design/charts";
import { Empty, message, Spin } from "antd";
import React, { useEffect } from "react";
import { statusType } from "../utils/constant";

export function DoughnutGraph({
  positiveReviewCount,
  neutralReviewCount,
  negativeReviewCount,
  status,
  reviewCount,
}) {
  useEffect(() => {
    if (+reviewCount.replace(',', '') > 5) return;
    message.info(
      `Not sufficient reviews to analyse, review count: ${+reviewCount}`,
      5
    );
  }, []);

  let doughtData = [
    {
      reviewType: "Positive",
      value: positiveReviewCount,
    },
    {
      reviewType: "Neutral",
      value: neutralReviewCount,
    },
    {
      reviewType: "Negative",
      value: negativeReviewCount,
    },
  ];

  let doughtConfig = {
    height: 350,
    width: 350,
    appendPadding: 10,
    data: doughtData,
    angleField: "value",
    colorField: "reviewType",
    color: ["#5ad8a6", "#F6BD16", "#E8684A"],
    radius: 0.9,
    innerRadius: 0.5,
    label: {
      type: "inner",
      offset: "-50%",
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: "center",
      },
    },
    meta: {
      value: {
        formatter: function formatter(value) {
          return `${value}`;
        },
      },
    },
    statistic: {
      title: "",
    },
  };

  return (
    <>
      {status === statusType.LOADING ? (
        <center>
          <Spin size="default"/>
        </center>
      ) : positiveReviewCount && negativeReviewCount && neutralReviewCount ? (
        <Pie {...doughtConfig} />
      ) : (
        <Empty />
      )}
    </>
  );
}
