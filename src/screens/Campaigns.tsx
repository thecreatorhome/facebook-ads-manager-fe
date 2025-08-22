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
            <div className="manageColorCode">
                <AvailableFilter />
                <CampaignTable />
            </div>
        </>
    );
};

export default Campaigns;
