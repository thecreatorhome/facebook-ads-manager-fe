import "../../styles/components/createFlow/CreateModal.css";
import { Modal, Button, Radio, RadioChangeEvent, Dropdown, Menu, MenuProps } from 'antd';
import { useState } from "react";
import AuctionDropDown from "../../components/AuctionDropDown";



interface CreateModalProps {
    isModalOpen: boolean;
    setIsModalOpen: (open: boolean) => void;
}

const CreateModal = ({ isModalOpen, setIsModalOpen }: CreateModalProps) => {

    const handleContinue = () => {
        // Your logic for continue
        console.log("Continue clicked");
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        console.log("Cancel clicked");
        setIsModalOpen(false);
    };

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
        <>
            <Modal
                title=""
                open={isModalOpen}
                onCancel={handleCancel}
                footer={
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ color: 'rgba(0, 0, 0, 0.45)' }}>About campaign objectives</span>
                        <div>
                            <Button key="cancel" onClick={handleCancel}>
                                Cancel
                            </Button>
                            <Button key="continue" type="primary" onClick={handleContinue} style={{ marginLeft: 8 }}>
                                Continue
                            </Button>
                        </div>
                    </div>
                }
            >
                <div className="createCampaignOptionsContainer">
                    <div className="createCampaignOption actionCreateCampaignOption">Create new campaign</div>
                    <div className="createCampaignOption">New ad set or ad</div>
                </div>
                <div className="buyingTypeOptionContainer">
                    <h4 className="goodForTitle">Choose a buying type</h4>
                    <AuctionDropDown />
                </div>
                <div className="campaignObjectContainers">
                    <div className="campaignObjectOptionContainer">
                        <h3>Choose a campaign objective</h3>
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
                    </div>
                    <div className="campaignObjectDetailContainer">
                        {(() => {
                            const selected = createCampaignOptions.find(
                                (option) => option.key === createCampaignType
                            );
                            return selected ? (
                                <>
                                    <div className="createCampaignImageContainer"><div className={selected.imageClass}></div></div>
                                    <h3 className="goodForTitle">{selected.title}</h3>
                                    <span className="createCampaignDescription">{selected.description}</span>
                                    <h3 className="goodForTitle">Good for:</h3>
                                    <div>
                                        {selected.badges.map((badge, index) => (
                                            <div key={index} className="createBadgeTitleContainer">
                                                <div className="createBadgeTitle">{badge.title}</div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            ) : null;
                        })()}
                    </div>

                </div>
            </Modal>
        </>
    );
};

export default CreateModal;
