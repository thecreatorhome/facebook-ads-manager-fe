import React from "react";
import { Layout, Menu } from "antd";
import "../styles/components/SideBar.css";
import { useNavigate } from "react-router-dom";
import CompanyLogo from "../assets/metaLogo.svg";
import CampaignLogo from "../assets/campaign-logo.png";

const { Sider } = Layout;

interface SideBarProps {
    collapsed: boolean;
    toggleSidebar: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ collapsed, toggleSidebar }) => {
    const navigate = useNavigate();
    const menuItems = [
        {
            key: "Comapny",
            label: (
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <img alt="img"  src={CompanyLogo} className="CompanyLogo" />
                  <span>Meta</span>
                </div>
              ),
            icon: collapsed ? <img alt="img"  src={CompanyLogo} className="CompanyLogo" /> : "",
            className: ""
        },
        {
            key: "Comapny",
            label: (
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <img alt="img"  src={CampaignLogo} className="CompanyLogo" />
                  <span></span>
                </div>
              ),
            icon: collapsed ? <img alt="img"  src={CampaignLogo} className="CompanyLogo" /> : "",
            className: ""
        },
        {
            key: "Notifications",
            label: (
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div className="sideBarLogo notificationsLogo" />
                  <span>Notifications</span>
                </div>
              ),
            icon: collapsed ? <div className="sideBarLogo notificationsLogo" /> : "",
            className: "ComapnyLogo"
        },
        {
            key: "AccountOverview",
            label: (
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div className="sideBarLogo accountOverviewLogo" />
                  <span>Account Overview</span>
                </div>
              ),
            icon: collapsed ? <div className="sideBarLogo accountOverviewLogo" /> : "",
            className: ""
        },
        {
            key: "Campaigns",
            label: (
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div className="sideBarLogo campaignsLogo" />
                  <span>Campaigns</span>
                </div>
              ),
            icon: collapsed ? <div className="sideBarLogo campaignsLogo" /> : "",
            className: ""
        },
        {
            key: "AdsReporting",
            label: (
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div className="sideBarLogo adsReportingLogo" />
                  <span>Ads Reporting</span>
                </div>
              ),
            icon: collapsed ? <div className="sideBarLogo adsReportingLogo" /> : "",
            className: ""
        },
        {
            key: "Audiences",
            label: (
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div className="sideBarLogo audienceLogo" />
                  <span>Audiences</span>
                </div>
              ),
            icon: collapsed ? <div className="sideBarLogo audienceLogo" /> : "",
            className: ""
        },
        {
            key: "AdvertisingSettings",
            label: (
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div className="sideBarLogo advertisingSettingsLogo" />
                  <span>Advertising Settings</span>
                </div>
              ),
            icon: collapsed ? <div className="sideBarLogo advertisingSettingsLogo" /> : "",
            className: ""
        },
        {
            key: "Billing&Payments",
            label: (
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div className="sideBarLogo billingPaymentsLogo" />
                  <span>Billing & Payments</span>
                </div>
              ),
            icon: collapsed ? <div className="sideBarLogo billingPaymentsLogo" /> : "",
            className: ""
        },
        {
            key: "EventsManager",
            label: (
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div className="sideBarLogo eventManagerLogo" />
                  <span>Events Manager</span>
                </div>
              ),
            icon: collapsed ? <div className="sideBarLogo eventManagerLogo" /> : "",
            className: ""
        }
    ];

    return (
        <Sider collapsible collapsed={collapsed} width={200} style={{ height: "100vh", backgroundColor: "white" }} onClick={toggleSidebar}>
            <Menu theme="light" mode="inline" className="SideBarMenu" items={menuItems} />
        </Sider>
    );
};

export default SideBar;
