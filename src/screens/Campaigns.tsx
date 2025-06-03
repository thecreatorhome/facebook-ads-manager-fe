import "../styles/screens/Campaigns.css";
import CampaignTable from "../components/CampaignTable";
import AvailableFilter from "../components/AvailableFilter";

const Campaigns = () => {
    return (
        <>
            <AvailableFilter />
            <CampaignTable />
        </>
    );
};

export default Campaigns;
