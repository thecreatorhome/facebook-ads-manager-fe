import { Button, Checkbox, Dropdown } from 'antd';
import { useState } from 'react';
import "../styles/components/CategoryDropDown.css";
import AuctionDropDown from "./AuctionDropDown";

// interface DropDownOption {
//     key: string;
//     label: string;
//     description?: string;
// }

// interface CategoryDropDownProps {
//     optionsDropDown: DropDownOption[];
// }

const CategoryDropDown = () => {
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]); // Multiple selections

    const optionsDropDown = [
        {
            key: "Financial products and services",
            label: "Financial products and services",
            description: "Ads for credit cards, long-term financing, checking and savings accounts, investment services, insurance services, or other related financial opportunities.",
            classIconName: "financialIcon"
        },
        {
            key: "Employment",
            label: "Employment",
            description: "Ads for job offers, internships, professional certification programs or other related opportunities.",
            classIconName: "employmentIcon"
        },
        {
            key: "Housing",
            label: "Housing",
            description: "Ads for real estate listings, homeowners insurance, mortgage loans or other related opportunities.",
            classIconName: "housingIcon"
        },
        {
            key: "Social issues, elections or politics",
            label: "Social issues, elections or politics",
            description: "Ads about social issues (such as the economy, or civil and social rights), elections, or political figures or campaigns.",
            classIconName: "socialIssueIcon"
        }
    ]

    const handleChange = (checkedValues: any) => {
        setSelectedKeys(checkedValues);
    };

    const dropdownContent = (
        <div className='categoryDropDownContainerGroup'>
            <Checkbox.Group value={selectedKeys} onChange={handleChange}>
                {optionsDropDown.map(option => (
                    <div key={option.key} style={{ marginBottom: 6 }}>
                        <Checkbox value={option.key}>
                            <div className='categoryIconContainer'>
                                <div> <i className={option.classIconName} /></div>
                                <div>
                                    {option.label}
                                    {option.description && (
                                        <div style={{ fontSize: 12, color: '#888' }}>
                                            {option.description}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Checkbox>
                    </div>
                ))}
                <div className='marginTop5'>If none of the categories apply to your ad, you may not need to select a Special Ad Category. If you are unsure, you can also get help declaring categories.</div>
            </Checkbox.Group>
        </div>
    );

    return (
        <>
            <Dropdown overlay={dropdownContent} trigger={['click']} className='categoryDropDownContainerBox' overlayClassName="budgetTypeDropdownOverlay">
                <Button>
                    <div className='selectedInformationCategory'>{selectedKeys.length > 0 ? `${selectedKeys}` : "Select Categories"}</div><div className='dropDownIcon' />
                </Button>
            </Dropdown>
            {selectedKeys.length > 0 && (selectedKeys.includes("Social issues, elections or politics") ?
                <>
                    <div className="displayColumn marginTop5">
                        <div><h4 className="noMarginTopBottom fontWeight700">Authorization to run issue, electoral or political ads</h4></div>
                    </div>
                    <div className="displayColumn marginTop20">
                        <div className='flex'><div><h4 className="fontWeight700">Confirmed identity​</h4></div><div className='infoIcon' /></div>
                        <div className='categoryDoubtContainer'>
                            <div className='doubtIconContainer'><i className='doubtIcon' /></div>
                            <div>
                                <div className="">Confirmed identity​</div>
                                <div className="budgetDescriptionSpan lightColor marginTopBottom5">We require people who want to run issue, electoral or political ads to first upload a copy of a valid government-issued ID document. The ID information won't be displayed on ads or in the Meta Ad Library. Once we've confirmed your identity, we'll delete your ID within 30 days.</div>
                                <div className="reviewPublishContainerGlobal marginTop10">Confirm ID</div>
                            </div>
                        </div>
                    </div>
                    <div className="displayColumn marginTop20">
                        <div className='flex'><div><h4 className="fontWeight700">Pages and disclaimers​​</h4></div><div className='infoIcon' /></div>
                        <div className='categoryDoubtContainer'>
                            <div className='doubtIconContainer'><i className='doubtIcon' /></div>
                            <div>
                                <div className="">No Pages set up to run ads​</div>
                                <div className="budgetDescriptionSpan lightColor marginTopBottom5">Link a Page to an approved ad account, and create a disclaimer.</div>
                            </div>
                        </div>
                    </div>
                </>
                :
                <div className="displayColumn marginTop20">
                    <div><h4 className="noMarginTopBottom">Countries</h4></div>
                    <div className="budgetDescriptionSpan">Select where you want to run this campaign. If there are additional requirements to run your ads in those locations, your advertising options will be adjusted.</div>
                    <AuctionDropDown />
                </div>
                )}
        </>
    );
};

export default CategoryDropDown;
