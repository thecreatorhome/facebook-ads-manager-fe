import "../styles/screens/CampaignsForm.css";
import BreadCrumb from "../components/BreadCrumb";
import CampaignLevelSideBar from "../components/CampaignLevelSideBar";
import ActionMenu from "../components/ActionMenu";

const CampaignsForm = () => {
    return (
        <>
            <div className="campaignFormScreenContainer">
                <div className="campaignLevelBarContainer">
                    <CampaignLevelSideBar
                        campaignName="Roofing PR"
                        trafficAdSet="New Traffic ad set"
                        trafficAd="New Traffic" />
                </div>
                <div className="campaignFormBarContainer">
                    <BreadCrumb />
                    <div><ActionMenu /></div>
                </div>
            </div>



        </>
    );
};

export default CampaignsForm;
