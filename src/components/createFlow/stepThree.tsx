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
                        <FacebookSearch
                            headerImgUrl="https://scontent.fblr1-4.fna.fbcdn.net/v/t45.1600-4/482247970_120217490093430647_6460530888921249763_n.jpg?stp=cp0_dst-jpg_q75_s640x640_spS444_tt6&_nc_cat=104&ccb=1-7&_nc_sid=c02adf&_nc_ohc=G6FgjG9mqsAQ7kNvwFwtKed&_nc_oc=AdkEUOltl2jGZJ5EP7m1E8li9D4-RQl_h_yoMfKHi2UW01mpV7OdvfLCzSaFiyI21Zw&_nc_zt=1&_nc_ht=scontent.fblr1-4.fna&_nc_gid=4EhoW06Juq090o_yDjwocw&oh=00_AfNlVMiV2_sVo3hgZwg6YwSOugWw6UNeI3il8dx31OeHgw&oe=6854A6F3"
                            title="Better Home"
                            description="Repairing your roof can help you save a.."
                            imageUrl="https://scontent.fblr1-4.fna.fbcdn.net/v/t45.1600-4/482247970_120217490093430647_6460530888921249763_n.jpg?stp=cp0_dst-jpg_q75_s640x640_spS444_tt6&_nc_cat=104&ccb=1-7&_nc_sid=c02adf&_nc_ohc=G6FgjG9mqsAQ7kNvwFwtKed&_nc_oc=AdkEUOltl2jGZJ5EP7m1E8li9D4-RQl_h_yoMfKHi2UW01mpV7OdvfLCzSaFiyI21Zw&_nc_zt=1&_nc_ht=scontent.fblr1-4.fna&_nc_gid=4EhoW06Juq090o_yDjwocw&oh=00_AfNlVMiV2_sVo3hgZwg6YwSOugWw6UNeI3il8dx31OeHgw&oe=6854A6F3"
                            sideImageUrl="https://scontent.fblr1-4.fna.fbcdn.net/v/t45.1600-4/482247970_120217490093430647_6460530888921249763_n.jpg?stp=cp0_dst-jpg_q75_s640x640_spS444_tt6&_nc_cat=104&ccb=1-7&_nc_sid=c02adf&_nc_ohc=G6FgjG9mqsAQ7kNvwFwtKed&_nc_oc=AdkEUOltl2jGZJ5EP7m1E8li9D4-RQl_h_yoMfKHi2UW01mpV7OdvfLCzSaFiyI21Zw&_nc_zt=1&_nc_ht=scontent.fblr1-4.fna&_nc_gid=4EhoW06Juq090o_yDjwocw&oh=00_AfNlVMiV2_sVo3hgZwg6YwSOugWw6UNeI3il8dx31OeHgw&oe=6854A6F3"
                        />
                        <FacebookReels
                            imageUrlList={["https://scontent.fblr1-4.fna.fbcdn.net/v/t45.1600-4/482247970_120217490093430647_6460530888921249763_n.jpg?stp=cp0_dst-jpg_q75_s640x640_spS444_tt6&_nc_cat=104&ccb=1-7&_nc_sid=c02adf&_nc_ohc=G6FgjG9mqsAQ7kNvwFwtKed&_nc_oc=AdkEUOltl2jGZJ5EP7m1E8li9D4-RQl_h_yoMfKHi2UW01mpV7OdvfLCzSaFiyI21Zw&_nc_zt=1&_nc_ht=scontent.fblr1-4.fna&_nc_gid=4EhoW06Juq090o_yDjwocw&oh=00_AfNlVMiV2_sVo3hgZwg6YwSOugWw6UNeI3il8dx31OeHgw&oe=6854A6F3", "https://scontent.fblr1-4.fna.fbcdn.net/v/t45.1600-4/482247970_120217490093430647_6460530888921249763_n.jpg?stp=cp0_dst-jpg_q75_s640x640_spS444_tt6&_nc_cat=104&ccb=1-7&_nc_sid=c02adf&_nc_ohc=G6FgjG9mqsAQ7kNvwFwtKed&_nc_oc=AdkEUOltl2jGZJ5EP7m1E8li9D4-RQl_h_yoMfKHi2UW01mpV7OdvfLCzSaFiyI21Zw&_nc_zt=1&_nc_ht=scontent.fblr1-4.fna&_nc_gid=4EhoW06Juq090o_yDjwocw&oh=00_AfNlVMiV2_sVo3hgZwg6YwSOugWw6UNeI3il8dx31OeHgw&oe=6854A6F3"]} />
                        <FacebookStories
                            imageUrl="https://scontent.fblr1-4.fna.fbcdn.net/v/t45.1600-4/482247970_120217490093430647_6460530888921249763_n.jpg?stp=cp0_dst-jpg_q75_s640x640_spS444_tt6&_nc_cat=104&ccb=1-7&_nc_sid=c02adf&_nc_ohc=G6FgjG9mqsAQ7kNvwFwtKed&_nc_oc=AdkEUOltl2jGZJ5EP7m1E8li9D4-RQl_h_yoMfKHi2UW01mpV7OdvfLCzSaFiyI21Zw&_nc_zt=1&_nc_ht=scontent.fblr1-4.fna&_nc_gid=4EhoW06Juq090o_yDjwocw&oh=00_AfNlVMiV2_sVo3hgZwg6YwSOugWw6UNeI3il8dx31OeHgw&oe=6854A6F3"
                            description="Repairing your roof can help you save a lot of money in the long ru...More" />
                        <AdsOnFacebookReel
                            title="Better Home"
                            imageUrl="https://scontent.fblr1-6.fna.fbcdn.net/v/t45.1600-4/459129430_120211605965250647_9072147744175465530_n.jpg?stp=cp0_dst-jpg_q75_s480x480_spS444_tt6&_nc_cat=102&ccb=1-7&_nc_sid=c02adf&_nc_ohc=TqJ9Yq27gqYQ7kNvwEPuHWC&_nc_oc=Adn9MaKgceKgNLc4IPTxS-MmaOSrRl-OMLjoKoqoyknHMz17REW_yie33qnM7mfn5K4&_nc_zt=1&_nc_ht=scontent.fblr1-6.fna&_nc_gid=qsvyCmWsM0nWSy9gI0f7hg&oh=00_AfKJghnhL-2DRYkGNsa3ORfHDepjL1OEvcUH2kDUYcqDBg&oe=6831E74A" />
                        <FacebookInStreamVideo
                            title="Better Home"
                            imageUrl="https://scontent.fblr1-4.fna.fbcdn.net/v/t45.1600-4/482247970_120217490093430647_6460530888921249763_n.jpg?stp=cp0_dst-jpg_q75_s640x640_spS444_tt6&_nc_cat=104&ccb=1-7&_nc_sid=c02adf&_nc_ohc=G6FgjG9mqsAQ7kNvwFwtKed&_nc_oc=AdkEUOltl2jGZJ5EP7m1E8li9D4-RQl_h_yoMfKHi2UW01mpV7OdvfLCzSaFiyI21Zw&_nc_zt=1&_nc_ht=scontent.fblr1-4.fna&_nc_gid=4EhoW06Juq090o_yDjwocw&oh=00_AfNlVMiV2_sVo3hgZwg6YwSOugWw6UNeI3il8dx31OeHgw&oe=6854A6F3"
                            sideImageUrl="https://scontent.fblr1-4.fna.fbcdn.net/v/t45.1600-4/482247970_120217490093430647_6460530888921249763_n.jpg?stp=cp0_dst-jpg_q75_s640x640_spS444_tt6&_nc_cat=104&ccb=1-7&_nc_sid=c02adf&_nc_ohc=G6FgjG9mqsAQ7kNvwFwtKed&_nc_oc=AdkEUOltl2jGZJ5EP7m1E8li9D4-RQl_h_yoMfKHi2UW01mpV7OdvfLCzSaFiyI21Zw&_nc_zt=1&_nc_ht=scontent.fblr1-4.fna&_nc_gid=4EhoW06Juq090o_yDjwocw&oh=00_AfNlVMiV2_sVo3hgZwg6YwSOugWw6UNeI3il8dx31OeHgw&oe=6854A6F3"
                            headerImgUrl="https://scontent.fblr1-4.fna.fbcdn.net/v/t45.1600-4/482247970_120217490093430647_6460530888921249763_n.jpg?stp=cp0_dst-jpg_q75_s640x640_spS444_tt6&_nc_cat=104&ccb=1-7&_nc_sid=c02adf&_nc_ohc=G6FgjG9mqsAQ7kNvwFwtKed&_nc_oc=AdkEUOltl2jGZJ5EP7m1E8li9D4-RQl_h_yoMfKHi2UW01mpV7OdvfLCzSaFiyI21Zw&_nc_zt=1&_nc_ht=scontent.fblr1-4.fna&_nc_gid=4EhoW06Juq090o_yDjwocw&oh=00_AfNlVMiV2_sVo3hgZwg6YwSOugWw6UNeI3il8dx31OeHgw&oe=6854A6F3"
                        />
                        <InstagramReels
                            title="Better"
                            description="Repairing your roof can help you save a lot of money in the long run!... more"
                            imageUrlList={["https://scontent.fblr1-4.fna.fbcdn.net/v/t45.1600-4/482247970_120217490093430647_6460530888921249763_n.jpg?stp=cp0_dst-jpg_q75_s640x640_spS444_tt6&_nc_cat=104&ccb=1-7&_nc_sid=c02adf&_nc_ohc=G6FgjG9mqsAQ7kNvwFwtKed&_nc_oc=AdkEUOltl2jGZJ5EP7m1E8li9D4-RQl_h_yoMfKHi2UW01mpV7OdvfLCzSaFiyI21Zw&_nc_zt=1&_nc_ht=scontent.fblr1-4.fna&_nc_gid=4EhoW06Juq090o_yDjwocw&oh=00_AfNlVMiV2_sVo3hgZwg6YwSOugWw6UNeI3il8dx31OeHgw&oe=6854A6F3", "https://scontent.fblr1-4.fna.fbcdn.net/v/t45.1600-4/482247970_120217490093430647_6460530888921249763_n.jpg?stp=cp0_dst-jpg_q75_s640x640_spS444_tt6&_nc_cat=104&ccb=1-7&_nc_sid=c02adf&_nc_ohc=G6FgjG9mqsAQ7kNvwFwtKed&_nc_oc=AdkEUOltl2jGZJ5EP7m1E8li9D4-RQl_h_yoMfKHi2UW01mpV7OdvfLCzSaFiyI21Zw&_nc_zt=1&_nc_ht=scontent.fblr1-4.fna&_nc_gid=4EhoW06Juq090o_yDjwocw&oh=00_AfNlVMiV2_sVo3hgZwg6YwSOugWw6UNeI3il8dx31OeHgw&oe=6854A6F3"]} 
                            headerImgUrl="https://scontent.fblr1-4.fna.fbcdn.net/v/t45.1600-4/482247970_120217490093430647_6460530888921249763_n.jpg?stp=cp0_dst-jpg_q75_s640x640_spS444_tt6&_nc_cat=104&ccb=1-7&_nc_sid=c02adf&_nc_ohc=G6FgjG9mqsAQ7kNvwFwtKed&_nc_oc=AdkEUOltl2jGZJ5EP7m1E8li9D4-RQl_h_yoMfKHi2UW01mpV7OdvfLCzSaFiyI21Zw&_nc_zt=1&_nc_ht=scontent.fblr1-4.fna&_nc_gid=4EhoW06Juq090o_yDjwocw&oh=00_AfNlVMiV2_sVo3hgZwg6YwSOugWw6UNeI3il8dx31OeHgw&oe=6854A6F3" />
                        <InstagramSearch
                            imageUrlList={["https://scontent.fblr1-4.fna.fbcdn.net/v/t45.1600-4/482247970_120217490093430647_6460530888921249763_n.jpg?stp=cp0_dst-jpg_q75_s640x640_spS444_tt6&_nc_cat=104&ccb=1-7&_nc_sid=c02adf&_nc_ohc=G6FgjG9mqsAQ7kNvwFwtKed&_nc_oc=AdkEUOltl2jGZJ5EP7m1E8li9D4-RQl_h_yoMfKHi2UW01mpV7OdvfLCzSaFiyI21Zw&_nc_zt=1&_nc_ht=scontent.fblr1-4.fna&_nc_gid=4EhoW06Juq090o_yDjwocw&oh=00_AfNlVMiV2_sVo3hgZwg6YwSOugWw6UNeI3il8dx31OeHgw&oe=6854A6F3", "https://scontent.fblr1-4.fna.fbcdn.net/v/t45.1600-4/482247970_120217490093430647_6460530888921249763_n.jpg?stp=cp0_dst-jpg_q75_s640x640_spS444_tt6&_nc_cat=104&ccb=1-7&_nc_sid=c02adf&_nc_ohc=G6FgjG9mqsAQ7kNvwFwtKed&_nc_oc=AdkEUOltl2jGZJ5EP7m1E8li9D4-RQl_h_yoMfKHi2UW01mpV7OdvfLCzSaFiyI21Zw&_nc_zt=1&_nc_ht=scontent.fblr1-4.fna&_nc_gid=4EhoW06Juq090o_yDjwocw&oh=00_AfNlVMiV2_sVo3hgZwg6YwSOugWw6UNeI3il8dx31OeHgw&oe=6854A6F3"]}
                            title="Better"
                            description="Repairing your roof can help you save a lot of money in the long run!... more" 
                            headerImgUrl="https://scontent.fblr1-4.fna.fbcdn.net/v/t45.1600-4/482247970_120217490093430647_6460530888921249763_n.jpg?stp=cp0_dst-jpg_q75_s640x640_spS444_tt6&_nc_cat=104&ccb=1-7&_nc_sid=c02adf&_nc_ohc=G6FgjG9mqsAQ7kNvwFwtKed&_nc_oc=AdkEUOltl2jGZJ5EP7m1E8li9D4-RQl_h_yoMfKHi2UW01mpV7OdvfLCzSaFiyI21Zw&_nc_zt=1&_nc_ht=scontent.fblr1-4.fna&_nc_gid=4EhoW06Juq090o_yDjwocw&oh=00_AfNlVMiV2_sVo3hgZwg6YwSOugWw6UNeI3il8dx31OeHgw&oe=6854A6F3" />
                        <InstagramStories
                            imageUrl="https://scontent.fblr1-4.fna.fbcdn.net/v/t45.1600-4/482247970_120217490093430647_6460530888921249763_n.jpg?stp=cp0_dst-jpg_q75_s640x640_spS444_tt6&_nc_cat=104&ccb=1-7&_nc_sid=c02adf&_nc_ohc=G6FgjG9mqsAQ7kNvwFwtKed&_nc_oc=AdkEUOltl2jGZJ5EP7m1E8li9D4-RQl_h_yoMfKHi2UW01mpV7OdvfLCzSaFiyI21Zw&_nc_zt=1&_nc_ht=scontent.fblr1-4.fna&_nc_gid=4EhoW06Juq090o_yDjwocw&oh=00_AfNlVMiV2_sVo3hgZwg6YwSOugWw6UNeI3il8dx31OeHgw&oe=6854A6F3"
                            description="Repairing your roof can help you save a lot of money in the long ru...More" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default StepThree;