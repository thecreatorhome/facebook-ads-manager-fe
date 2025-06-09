// import "../styles/components/CampaignObjective.css";
import { Radio, RadioChangeEvent } from 'antd';
import { useState } from "react";


const CampaignObjective = () => {
    const [createCampaignType, setCreateCampaignType] = useState(1);

    const onChangeCreateCampaignType = (e: RadioChangeEvent) => {
        console.log('setCreateCampaignType:', e.target.value);
        setCreateCampaignType(e.target.value);
    };
    const createCampaignOptions = [
        {
            "key": 1,
            "title": "Awareness",
            "icon": "awarenessIcon",
            "imageClass": "awarenessClass",
            "description": "Show your ads to people who are most likely to remember them.",
            "badges": [
                {
                    "title": "Conversions",
                    "description": "Get people to add an item to their cart, make a purchase, start a subscription or take another action on your website or app."
                },
                {
                    "title": "Catalog sales",
                    "description": "Get people to buy products or services from your catalog."
                },
            ]
        },
        {
            "key": 2,
            "title": "Traffic",
            "icon": "trafficIcon",
            "imageClass": "trafficClass",
            "description": "Send people to a destination, like your website, app, Instagram profile or Facebook event. About traffic",
            "badges": [
                {
                    "title": "Conversions",
                    "description": "Get people to add an item to their cart, make a purchase, start a subscription or take another action on your website or app."
                },
                {
                    "title": "Catalog sales",
                    "description": "Get people to buy products or services from your catalog."
                },
            ]
        },
        {
            "key": 3,
            "title": "Engagement",
            "icon": "engagementIcon",
            "imageClass": "engagementClass",
            "description": "Get more messages, purchases through messaging, video views, post engagement, Page likes or event responses.",
            "badges": [
                {
                    "title": "Conversions",
                    "description": "Get people to add an item to their cart, make a purchase, start a subscription or take another action on your website or app."
                },
                {
                    "title": "Catalog sales",
                    "description": "Get people to buy products or services from your catalog."
                },
            ]
        },
        {
            "key": 4,
            "title": "Leads",
            "icon": "leadsIcon",
            "imageClass": "leadsClass",
            "description": "Collect leads for your business or brand.",
            "badges": [
                {
                    "title": "Conversions",
                    "description": "Get people to add an item to their cart, make a purchase, start a subscription or take another action on your website or app."
                },
                {
                    "title": "Catalog sales",
                    "description": "Get people to buy products or services from your catalog."
                },
            ]
        },
        {
            "key": 5,
            "title": "App promotion",
            "icon": "appPromotionIcon",
            "imageClass": "appPromotionClass",
            "description": "Find new people to install your app and continue using it. About app promotion",
            "badges": [
                {
                    "title": "Conversions",
                    "description": "Get people to add an item to their cart, make a purchase, start a subscription or take another action on your website or app."
                },
                {
                    "title": "Catalog sales",
                    "description": "Get people to buy products or services from your catalog."
                },
            ]
        },
        {
            "key": 6,
            "title": "Sales",
            "icon": "salesIcon",
            "imageClass": "salesClass",
            "description": "Find people likely to purchase your product or service.",
            "badges": [
                {
                    "title": "Conversions",
                    "description": "Get people to add an item to their cart, make a purchase, start a subscription or take another action on your website or app."
                },
                {
                    "title": "Catalog sales",
                    "description": "Get people to buy products or services from your catalog."
                },
            ]
        }
    ]
    return (
        <Radio.Group onChange={onChangeCreateCampaignType} value={createCampaignType} className="createCampaignType">
            {
                createCampaignOptions.map(createCampaignOption =>
                    <Radio value={createCampaignOption.key}>
                        <div
                            className={
                                "createCampaignOptionBackground" +
                                (createCampaignOption.key === createCampaignType ? " createCampaignOptionActiveBackground" : "")
                            }
                        >
                            <div
                                className={createCampaignOption.icon + (createCampaignOption.key === createCampaignType ? " salesIconActive" : "")}>
                            </div>
                        </div>
                        <div>{createCampaignOption.title}</div>
                    </Radio>
                )
            }
        </Radio.Group>
    );
};

export default CampaignObjective;
