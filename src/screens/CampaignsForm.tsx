import "../styles/screens/CampaignsForm.css";
import BreadCrumb from "../components/BreadCrumb";
import CampaignLevelSideBar from "../components/CampaignLevelSideBar";
import ActionMenu from "../components/ActionMenu";
import StepOne from "../components/createFlow/stepOne";
import StepTwo from "../components/createFlow/stepTwo";
import FormStepController from "../components/formStepController";
import { useState } from 'react';

const CampaignsForm = () => {
    const [formState, setformState] = useState(1);
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
                        {formState === 1 && <StepOne />}
                        {formState === 2 && <StepTwo />}
                        <FormStepController formState={formState} setFormState={setformState}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CampaignsForm;
