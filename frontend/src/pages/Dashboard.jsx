import React, { useRef, useState } from "react";
import { Form, Input, InputNumber, Space, Divider, Row, Col } from "antd";

import { Layout, Breadcrumb, Statistic, Progress, Tag } from "antd";

import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { DashboardLayout } from "@/layout";
import RecentTable from "@/components/RecentTable";
import Charts from "./Charts";

const TopCard = ({ title, tagContent, tagColor, prefix }) => {
  return (
    <Col className="gutter-row" span={6}>
      <div
        className="whiteBox shadow"
        style={{ color: "#595959", fontSize: 13, height: "106px" }}
      >
        <div
          className="pad15 strong"
          style={{ textAlign: "center", justifyContent: "center" }}
        >
          <h3 style={{ color: "#22075e", marginBottom: 0 }}>{title}</h3>
        </div>
        <Divider style={{ padding: 0, margin: 0 }}></Divider>
        <div className="pad15">
          <Row gutter={[0, 0]}>
            <Col className="gutter-row" span={11} style={{ textAlign: "left" }}>
              <div className="left">{prefix}</div>
            </Col>
            <Col className="gutter-row" span={2}>
              <Divider
                style={{ padding: "10px 0", justifyContent: "center" }}
                type="vertical"
              ></Divider>
            </Col>
            <Col
              className="gutter-row"
              span={11}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Tag
                color={tagColor}
                style={{ margin: "0 auto", justifyContent: "center" }}
              >
                {tagContent}
              </Tag>
            </Col>
          </Row>
        </div>
      </div>
    </Col>
  );
};
const PreviewState = ({ tag, color, value }) => {
  let colorCode = "#000";
  switch (color) {
    case "blue":
      colorCode = "#1890ff";
      break;
    case "green":
      colorCode = "#95de64";
      break;
    case "red":
      colorCode = "#ff4d4f";
      break;
    case "orange":
      colorCode = "#ffa940";
      break;
    case "purple":
      colorCode = "#722ed1";
      break;
    case "grey":
      colorCode = "#595959";
      break;
    case "cyan":
      colorCode = "#13c2c2";
      break;
    case "brown":
      colorCode = "#614700";
      break;
    default:
      break;
  }

  return (
    <div style={{ color: "#595959", marginBottom: 5 }}>
      <div className="left alignLeft">{tag}</div>
      <div className="right alignRight">{value} %</div>
      <Progress
        percent={value}
        showInfo={false}
        strokeColor={{
          "0%": colorCode,
          "100%": colorCode,
        }}
      />
    </div>
  );
};
export default function Dashboard() {
  const leadColumns = [
    {
      title: "Client",
      dataIndex: "client",
    },
    {
      title: "phone",
      dataIndex: "phone",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => {
        let color = status === "working" ? "blue" : "green";

        return <Tag color={color}>{status.toUpperCase()}</Tag>;
      },
    },
  ];

  const productColumns = [
    {
      title: "Project Name",
      dataIndex: "productName",
    },

    {
      title: "Budget",
      dataIndex: "price",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => {
        let color = status === "ongoing" ? "blue" : "volcano";

        return <Tag color={color}>{status.toUpperCase()}</Tag>;
      },
    },
  ];
  const style1 = { "font-size": "30px" };
  const style2 = { "text-align": "center" };
  return (
    <DashboardLayout>
      <h1 style={{ ...style1, ...style2 }}>Welcome, GaneshKumar.</h1>
      <Row gutter={[24, 24]}>
        <TopCard
          title={"Managing Directors"}
          tagColor={"cyan"}
          prefix={"Total"}
          tagContent={"2 "}
        />
        <TopCard
          title={"Projects"}
          tagColor={"purple"}
          prefix={"This month"}
          tagContent={"10 "}
        />
        <TopCard
          title={"Employees"}
          tagColor={"green"}
          prefix={"Total"}
          tagContent={"50"}
        />
        <TopCard
          title={"Completed Projects"}
          tagColor={"red"}
          prefix={"This Month"}
          tagContent={"Nil"}
        />
      </Row>
      <div className="space30"></div>
      <Row gutter={[24, 24]}>
        <Col className="gutter-row" span={18}>
          <div className="whiteBox shadow" style={{ height: "380px" }}>
            <Row className="pad10" gutter={[0, 0]}>
              <Col className="gutter-row" >
                <div className="pad15">
                  <Charts/>
                  {/* <h3 style={{ color: "#22075e", marginBottom: 15 }}>
                    Lead Preview
                  </h3>
                  <PreviewState tag={"Arachalur project"} color={"grey"} value={14} />
                  <PreviewState tag={"Thudiyalur project"} color={"cyan"} value={23} />
                  <PreviewState tag={"Sunil's house"} color={"orange"} value={29} />
                  <PreviewState tag={"Rajagopal's house"} color={"blue"} value={80} />
                  <PreviewState tag={"Avinashi project"} color={"red"} value={59} />
                  <PreviewState tag={"Coimbatore project"} color={"green"} value={22} /> */}
                </div>
              </Col>
              {/* <Col className="gutter-row" span={8}>
                {" "}
                <div className="pad15">
                  <h3 style={{ color: "#22075e", marginBottom: 15 }}>
                    Quote Preview
                  </h3>
                  <PreviewState tag={"Arachalur project"} color={"grey"} value={27} />
                  <PreviewState tag={"Thudiyalur project"} color={"cyan"} value={2} />
                  <PreviewState tag={"Sunil's house"} color={"orange"} value={12} />
                  <PreviewState tag={"Rajagopal's house"} color={"blue"} value={60} />
                  <PreviewState tag={"Avinashi project"} color={"red"} value={29} />
                  <PreviewState tag={"Coimbatore project"} color={"green"} value={12} />

                </div>
              </Col>
              <Col className="gutter-row" span={8}>
                {" "}
                <div className="pad15">
                  <h3 style={{ color: "#22075e", marginBottom: 15 }}>
                    Order Preview
                  </h3>
                  <PreviewState tag={"Arachalur project"} color={"grey"} value={35} />
                  <PreviewState tag={"Thudiyalur project"} color={"cyan"} value={20} />
                  <PreviewState tag={"Sunil's house"} color={"orange"} value={85} />
                  <PreviewState tag={"Rajagopal's house"} color={"blue"} value={30} />
                  <PreviewState tag={"Avinashi project"} color={"red"} value={19} />
                  <PreviewState tag={"Coimbatore project"} color={"green"} value={72} />
                </div>
              </Col> */}
            </Row>
          </div>
        </Col>

        <Col className="gutter-row" span={6}>
          <div className="whiteBox shadow" style={{ height: "380px" }}>
            <div
              className="pad20"
              style={{ textAlign: "center", justifyContent: "center" }}
            >
              <h3 style={{ color: "#22075e", marginBottom: 30 }}>
                Projects Preview
              </h3>
             
              <Progress type="dashboard" percent={65} width={148} />
              <p>New Projects this Month</p>
              <Divider />
              <Statistic
                title="Ongoing projects"
                value={11.28}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </div>
          </div>
        </Col>
      </Row>
      <div className="space30"></div>
      <Row gutter={[24, 24]}>
        <Col className="gutter-row" span={12}>
          <div className="whiteBox shadow">
            <div className="pad20">
              <h3 style={{ color: "#22075e", marginBottom: 5 }}>
                Recent Leads
              </h3>
            </div>

            <RecentTable entity={"lead"} dataTableColumns={leadColumns} />
          </div>
        </Col>

        <Col className="gutter-row" span={12}>
          <div className="whiteBox shadow">
            <div className="pad20">
              <h3 style={{ color: "#22075e", marginBottom: 5 }}>
                Recent Projects
              </h3>
            </div>
            <RecentTable entity={"product"} dataTableColumns={productColumns} />
          </div>
        </Col>
      </Row>
    </DashboardLayout>
  );
}
