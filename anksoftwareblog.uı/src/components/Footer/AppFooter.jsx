import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer style={{ textAlign: "center", backgroundColor: "#001529", color: "#fff" }}>
      ©2024 Reserved AnkSoftware
    </Footer>
  );
};

export default AppFooter;
