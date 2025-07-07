import "../../styles/components/createFlow/StepThree.css";
import { useState } from 'react';
import { Input, Switch } from 'antd';
import FacebookSearch from "../../components/FacebookSearch";
import FacebookReels from "../../components/FacebookReels";
import FacebookStories from "../../components/FacebookStories";
import AdsOnFacebookReel from "../../components/AdsOnFacebookReel";
import FacebookInStreamVideo from "../../components/FacebookInStreamVideo";
import InstagramReels from "../../components/InstagramReels";
import InstagramSearch from "../../components/InstagramSearch";
import InstagramStories from "../../components/InstagramStories";
import FacebookFeed from "../../components/FacebookFeed";
import FacebookVideoFeed from "../../components/FacebookVideoFeed";
import FacebookProfileFeed from "../../components/FacebookProfileFeed";
import { bodyImage, headerImage } from "../../constants";
import FacebookMarketPlace from "../../components/FacebookMarketPlace";
import InstagramExploreHome from "../../components/InstagramExploreHome";
import InstagramFeed from "../../components/InstagramFeed";

const StepThree = () => {
    const [enabledPartnershipAd, setPartnershipAd] = useState(false);
    return (
        <>
            <div className="columnFlex">
                <div>
                    <div className="campaignNameInbox width400">
                        <div className="campaignNameInputTitle">
                            <div className="inlineFlex">
                                <div className="greenCheck"></div>
                                <div className="campaignBoxTitle">Ad name</div>
                            </div>
                        </div>
                        <div className="campaignNameInputOperation">
                            <Input className="campaignNameInput width220" />
                            <div className="draftBtnContainerGlobal marginLeft8"><span className="draftTitleHeaderGlobal">Create template</span></div>
                        </div>
                    </div>

                    <div className="campaignNameInbox width400">
                        <div className="campaignNameInputTitle">
                            <div className="inlineFlex">
                                {enabledPartnershipAd && <div className="greenCheck"></div>}
                                <div className="campaignBoxTitle">Partnership ad</div>
                            </div>
                            <div><span className="toogleTitle">{enabledPartnershipAd ? 'On' : 'Off'}</span><Switch checked={enabledPartnershipAd} onChange={setPartnershipAd} /></div>
                        </div>
                        <div className="displayColumn">
                            <div className="campaignInboxDescription">Run ads with creators, brands and other businesses. These ads leverage signals from both accounts to improve campaign performance.</div>
                        </div>
                        {enabledPartnershipAd &&
                            <></>
                        }
                    </div>
                </div>
                <div>
                    <div className="gridWrapper">
                        <InstagramStories
                            imageUrl={bodyImage}
                            description="Repairing your roof can help you save a lot of money in the long ru...More"
                            title="Better"
                            headerImgUrl={headerImage} />
                        <FacebookStories
                            imageUrl={bodyImage}
                            description="Repairing your roof can help you save a lot of money in the long ru...More"
                            title="Better"
                            headerImgUrl={headerImage} />
                        <InstagramReels
                            title="Better"
                            description="Repairing your roof can help you save a lot of money in the long run!... more"
                            imageUrlList={[bodyImage, bodyImage, bodyImage]}
                            headerImgUrl={headerImage} />
                        <FacebookReels
                            title="Better"
                            description="Repairing your roof can help you save a lot of money in the long run!... more"
                            imageUrlList={[bodyImage, bodyImage, bodyImage]}
                            headerImgUrl={headerImage} />
                        <AdsOnFacebookReel
                            title="Better Home"
                            imageUrl={bodyImage} />
                        <FacebookInStreamVideo
                            title="iNHOUSE"
                            imageUrl={bodyImage}
                            sideImageUrl={headerImage}
                            headerImgUrl={headerImage}
                        />
                        <FacebookSearch
                            headerImgUrl={headerImage}
                            title="Better Home"
                            description="Repairing your roof can help you save a.."
                            imageUrl={bodyImage}
                            sideImageUrl={headerImage}
                        />
                        <InstagramSearch
                            imageUrlList={[bodyImage, bodyImage, bodyImage]}
                            title="Better"
                            description="Repairing your roof can help you save a lot of money in the long run!... more"
                            headerImgUrl={headerImage} />
                        <FacebookFeed
                            imageUrl={bodyImage}
                            title="Better Homes"
                            headerImgUrl={headerImage} />
                        <FacebookVideoFeed
                            imageUrl={bodyImage}
                            title="Better Homes"
                            headerImgUrl={headerImage} />
                        <FacebookProfileFeed
                            imageUrl={bodyImage}
                            title="Better Homes"
                            description="Repairing your roof "
                            headerImgUrl={headerImage} />
                        <FacebookMarketPlace
                            imageUrl={bodyImage}
                            title="Better Homes"
                            headerImgUrl={headerImage} />
                        <InstagramExploreHome
                            imageUrl={bodyImage} />
                        <InstagramFeed
                            imageUrl={bodyImage}
                            title="Better Homes"
                            headerImgUrl={headerImage}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StepThree;