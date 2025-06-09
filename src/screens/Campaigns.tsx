import "../styles/screens/Campaigns.css";
import CampaignTable from "../components/CampaignTable";
import AvailableFilter from "../components/AvailableFilter";
import HeaderDisplay from "../components/HeaderDisplay";
import { Layout } from "antd";

const { Header } = Layout;

const Campaigns = () => {
    return (
        <>
            <Header className="Header" >
                <HeaderDisplay />
            </Header>
            <AvailableFilter />
            <CampaignTable />
        </>
    );
};

export default Campaigns;
