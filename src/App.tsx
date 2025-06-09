import React, { useState } from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import "./App.css";
import Campaigns from "./screens/Campaigns";
import CampaignsForm from "./screens/CampaignsForm";


const { Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleSidebar = () => setCollapsed(!collapsed);

  const routePath = [
    {
      "path": "/",
      "screen": <Campaigns />,
      "key": "Campaigns",
      "headerPath": [
        {
          "name": "Campaigns",
          "path": "/"
        }
      ],
    },
    {
      "path": "/form",
      "screen": <CampaignsForm />,
      "key": "CampaignsForm",
      "headerPath": [
        {
          "name": "Campaigns",
          "path": "/"
        }
      ],
    }
  ];

  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        {/* Sidebar */}
        <SideBar collapsed={collapsed} toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <Layout className="LayoutBoard" style={{ marginLeft: collapsed ? 0 : 0 }}>

          {/* Page Content */}
          <Content style={{ padding: 20, background: "#fff", overflow: "hidden" }}>
            <Routes>
              {routePath.map((route) =>
                <Route path={route.path} element={route.screen} />
              )}
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
