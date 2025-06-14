import "../styles/components/HeaderDisplay.css";
import ActionMenu from "./ActionMenu";

const HeaderDisplay = () => {
    return (
        <div className="headerContainerGlobal">
            <div className="headerTitleGlobal">Campaigns</div>
            <div className="headerRightFlexAlign">
                <div className="updatedTimeGlobal">Updated today at 9:14 AM</div>
                <div className="refreshBtnContainerGlobal"><div className="refreshBtnHeaderGlobal"></div></div>
                <div className="draftBtnContainerGlobal marginLeft8"><div className="draftBtnHeaderGlobal"></div><span className="draftTitleHeaderGlobal">Discard Drafts</span></div>
                <div className="reviewPublishContainerGlobal">Review and Publish (4)</div>
                <div><ActionMenu /></div>
            </div>
        </div>
    );
};

export default HeaderDisplay;
