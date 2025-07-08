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
import InstagramProfileFeed from "../../components/InstagramProfileFeed";
import InstagramExplore from "../../components/InstagramExplore";
import GaugeChart from "../../components/guageChart"

const StepThree = () => {
    const [enabledPartnershipAd, setPartnershipAd] = useState(false);
    const [enabledLanguage, setLanguage] = useState(false);
    const [enabledAdPreview, setAdPreview] = useState(false);
    return (
        <>
            <div className="columnFlex">
                <div>
                    <div className="campaignNameInbox width480">
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

                    <div className="campaignNameInbox width480">
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

                    <div className="campaignNameInbox width480">
                        <div className="campaignNameInputTitle">
                            <div className="inlineFlex">
                                <div className="greenCheck"></div>
                                <div className="campaignBoxTitle">Identity</div>
                            </div>
                        </div>
                        <div className="displayColumn">
                            <div className="campaignInboxDescription">Choose the Facebook Page and Instagram account that this ad will be associated with.</div>
                        </div>
                    </div>

                    <div className="campaignNameInbox width480">
                        <div className="campaignNameInputTitle">
                            <div className="inlineFlex">
                                <div className="greenCheck"></div>
                                <div className="campaignBoxTitle">Ad Setup</div>
                            </div>
                        </div>
                        <div className="displayColumn">
                            <div className="campaignInboxDescription">Choose the Facebook Page and Instagram account that this ad will be associated with.</div>
                        </div>
                    </div>

                    <div className="campaignNameInbox width480">
                        <div className="campaignNameInputTitle">
                            <div className="inlineFlex">
                                <div className="greenCheck"></div>
                                <div className="campaignBoxTitle">Ad Creative</div>
                            </div>
                        </div>
                        <div className="displayColumn">
                            <div className="campaignInboxDescription">Select and optimize your ad text, media and enhancements.</div>
                        </div>
                    </div>

                    <div className="campaignNameInbox width480">
                        <div className="campaignNameInputTitle">
                            <div className="inlineFlex">
                                <div className="greenCheck"></div>
                                <div className="campaignBoxTitle">Event details</div>
                            </div>
                        </div>
                        <div className="displayColumn">
                            <div className="campaignInboxDescription">Include event details for your ad. Your ad will display a title, start or end time, and a reminder button so your audience can get reminders about the event.</div>
                        </div>
                    </div>

                    <div className="campaignNameInbox width480">
                        <div className="campaignNameInputTitle">
                            <div className="inlineFlex">
                                {enabledLanguage && <div className="greenCheck"></div>}
                                <div className="campaignBoxTitle">Languages</div>
                            </div>
                            <div><span className="toogleTitle">{enabledLanguage ? 'On' : 'Off'}</span><Switch checked={enabledLanguage} onChange={setLanguage} /></div>
                        </div>
                        <div className="displayColumn">
                            <div className="campaignInboxDescription">Add your own translations or automatically translate your ad to reach people in more languages.</div>
                        </div>
                        {enabledLanguage &&
                            <></>
                        }
                    </div>

                    <div className="campaignNameInbox width480">
                        <div className="campaignNameInputTitle">
                            <div className="inlineFlex">
                                <div className="greenCheck"></div>
                                <div className="campaignBoxTitle">Tracking</div>
                            </div>
                        </div>
                        <div className="displayColumn">
                            <div className="campaignInboxDescription">Track event datasets that contain the conversions your ad might motivate. The dataset that contains the conversion selected for the ad account will be tracked by default.</div>
                        </div>
                    </div>

                </div>

                <div className="secondColumnWidthStepThree">
                    <div className="campaignNameInbox columnFlex secondColumnWidthStepThree campaignScoreStepThree">
                        <div className="">
                            <GaugeChart value={100} className="guageStepThree" />
                        </div>
                        <div className="alignCenterItem marginLeft10">
                            <div className="campaignScoreInputTitle">
                                <div className="inlineFlex">
                                    <div className="campaignBoxTitle">Campaign score</div>
                                    <div className='infoIcon' />
                                </div>
                                <div className="campaignInboxDescription">Your campaign has room to improve.</div>
                            </div>
                        </div>
                    </div>
                    <div className="campaignNameInbox columnFlex secondColumnWidthStepThree campaignScoreStepThree">
                        <div className="campaignNameInputTitle">
                            <div className="marginLeft10"><Switch checked={enabledAdPreview} onChange={setAdPreview} /><span className="toogleTitle marginLeft10">Ad preview</span></div>
                        </div>
                    </div>
                    {enabledAdPreview &&
                        <><div className="gridWrapper">
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
                                headerImgUrl={headerImage} />
                            <InstagramProfileFeed
                                imageUrl={bodyImage}
                                title="Better Homes"
                                headerImgUrl={headerImage} />
                            <InstagramExplore
                                imageUrl={bodyImage}
                                title="Better Homes"
                                headerImgUrl={headerImage} />
                        </div></>
                    }
                </div>
            </div>
        </>
    )
}

export default StepThree;