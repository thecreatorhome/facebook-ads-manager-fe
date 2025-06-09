import "../../styles/components/createFlow/StepOne.css";
import { Input } from 'antd';
import AuctionDropDown from "../../components/AuctionDropDown";
import CampaignObjective from "../../components/CampaignObjective";

const StepOne = () => {
    return (
        <>
            <div className="campaignNameInbox">
                <div className="campaignNameInputTitle">
                    <div className="greenCheck"></div>
                    <div className="campaignBoxTitle">Campaign name</div>
                </div>
                <div className="campaignNameInputOperation">
                    <Input className="campaignNameInput" />
                    <div className="draftBtnContainerGlobal"><span className="draftTitleHeaderGlobal">Create template</span></div>
                </div>
            </div>

            <div className="campaignNameInbox">
                <div className="campaignNameInputTitle">
                    <div className="greenCheck"></div>
                    <div className="campaignBoxTitle">Campaign details</div>
                </div>
                <div className="displayColumn">
                    <div><h4 className="noMarginTopBottom">Buying type</h4></div>
                    <AuctionDropDown />
                    <div><h4 className="noMarginTopBottom">Campaign objective</h4></div>
                    <CampaignObjective />
                </div>
            </div>

            <div className="campaignNameInbox">
                <div className="campaignNameInputTitle">
                    <div className="campaignBoxTitle">Advantage campaign budget</div>
                </div>
                <div className="displayColumn">
                    <div className="campaignInboxDescription">Distribute your budget across ad sets to get more results. You can control spending for each ad set. About Advantage campaign budget</div>
                </div>
            </div>

            <div className="campaignNameInbox">
                <div className="campaignNameInputTitle">
                    <div className="campaignBoxTitle">A/B test</div>
                </div>
                <div className="displayColumn">
                    <div className="campaignInboxDescription">Help improve ad performance by comparing versions to see what works best. For accuracy, each one will be shown to separate groups of your audience. About A/B tests</div>
                </div>
            </div>


        </>
    );
};

export default StepOne;
