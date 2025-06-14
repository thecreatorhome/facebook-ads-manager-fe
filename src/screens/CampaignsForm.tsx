import "../styles/screens/CampaignsForm.css";
import BreadCrumb from "../components/BreadCrumb";
import CampaignLevelSideBar from "../components/CampaignLevelSideBar";
import ActionMenu from "../components/ActionMenu";
import StepOne from "../components/createFlow/stepOne";
import FormStepController from "../components/formStepController";

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
                    <div className="campaignFormBarContainerHeader">
                        <BreadCrumb />
                        <div><ActionMenu /></div>
                    </div>
                    <div className="stepContainer">
                        <StepOne />
                        <FormStepController />
                    </div>
                </div>
            </div>
        </>
    );
};

export default CampaignsForm;
