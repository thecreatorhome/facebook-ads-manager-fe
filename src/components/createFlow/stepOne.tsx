import "../../styles/components/createFlow/StepOne.css";
import { Input } from 'antd';
import AuctionDropDown from "../../components/AuctionDropDown";
import BudgetDropDown from "../../components/BudgetDropDown";
import RadioDropDown from "../../components/RadioDropDown";
import CampaignObjective from "../../components/CampaignObjective";
import CurrencyInput from "../../components/currencyInput";
import { useState } from 'react';
import { Switch } from 'antd';
import { InputNumber } from 'antd';
import CategoryDropDown from "../../components/categoryDropDown";


const StepOne = () => {
    const [enabledACB, setEnabledACB] = useState(false);
    const [enabledATB, setEnabledATB] = useState(false);
    return (
        <>
            <div className="campaignNameInbox">
                <div className="campaignNameInputTitle">
                    <div className="inlineFlex">
                        <div className="greenCheck"></div>
                        <div className="campaignBoxTitle">Campaign name</div>
                    </div>
                </div>
                <div className="campaignNameInputOperation">
                    <Input className="campaignNameInput" />
                    <div className="draftBtnContainerGlobal"><span className="draftTitleHeaderGlobal">Create template</span></div>
                </div>
            </div>

            <div className="campaignNameInbox">
                <div className="campaignNameInputTitle">
                    <div className="inlineFlex">
                        <div className="greenCheck"></div>
                        <div className="campaignBoxTitle">Campaign details</div>
                    </div>
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
                    <div className="inlineFlex">
                        {enabledACB && <div className="greenCheck"></div>}
                        <div className="campaignBoxTitle">Advantage campaign budget</div>
                    </div>
                    <div><span className="toogleTitle">{enabledACB ? 'On' : 'Off'}</span><Switch checked={enabledACB} onChange={setEnabledACB} /></div>
                </div>
                <div className="displayColumn">
                    <div className="campaignInboxDescription">Distribute your budget across ad sets to get more results. You can control spending for each ad set. About Advantage campaign budget</div>
                </div>
                {enabledACB &&
                    <>
                        <div><h4 className="noMarginTopBottom">Budget</h4></div>
                        <div className="advantageBudgetInputContainer">
                            <BudgetDropDown />
                            <CurrencyInput />
                        </div>
                        <div className="marginTop5">
                            <span className="budgetDescriptionSpan">You'll spend an average of <strong>$5.00</strong> per day. Your maximum daily spend is <strong>$8.75</strong> and your maximum weekly spend is <strong>$35.00</strong>.</span>
                        </div>
                        <div><h4 className="noMarginTopBottom">Campaign bid strategy</h4></div>
                        <div className="marginTop5">
                            <span className="budgetDescriptionSpan">Highest volume</span>
                        </div>
                        <hr className="dividerForm" />
                        <div className="showMoreOption">Show more options <div className='dropDownIcon' style={{ backgroundColor: '#0a78be' }} /></div>
                    </>
                }
            </div>

            <div className="campaignNameInbox">
                <div className="campaignNameInputTitle">
                    <div className="inlineFlex">
                        {enabledATB && <div className="greenCheck"></div>}
                        <div className="campaignBoxTitle">A/B test</div>
                    </div>
                    <div><span className="toogleTitle">{enabledATB ? 'On' : 'Off'}</span><Switch checked={enabledATB} onChange={setEnabledATB} /></div>
                </div>
                <div className="displayColumn">
                    <div className="campaignInboxDescription">Help improve ad performance by comparing versions to see what works best. For accuracy, each one will be shown to separate groups of your audience. About A/B tests</div>
                </div>
                {enabledATB &&
                    <>
                        <div><h4 className="noMarginTopBottom">What do you want to test?</h4></div>
                        <RadioDropDown optionsDropDown={
                            [
                                {
                                    key: 'Creative',
                                    label: 'Creative',
                                    description: 'Creative description'
                                },
                                {
                                    key: 'Audience',
                                    label: 'Audience',
                                    description: 'Audience description'
                                },
                                {
                                    key: 'Placement',
                                    label: 'Placement',
                                    description: 'Placement description'
                                },
                                {
                                    key: 'Custom',
                                    label: 'Custom',
                                    description: 'Custom description'
                                },
                            ]
                        } />
                        <div><h4 className="noMarginTopBottom">How long should the test run?</h4></div>
                        <InputNumber
                            min={0}
                            step={1}
                            onChange={(value) => console.log(value)}
                            placeholder=""
                            defaultValue={4}
                            className="interInput"
                        />
                        <div><h4 className="noMarginTopBottom">How do you want to compare performance?</h4></div>
                        <RadioDropDown optionsDropDown={
                            [
                                {
                                    key: 'CostPerResult',
                                    label: 'Cost Per Result'
                                },
                                {
                                    key: 'CPC (cost per link click)',
                                    label: 'CPC (cost per link click)'
                                },
                                {
                                    key: 'Cost per 1,000 Accounts center Account reached',
                                    label: 'Cost per 1,000 Accounts center Account reached'
                                }
                            ]
                        } />
                    </>
                }
            </div>

            <div className="campaignNameInbox">
                <div className="campaignNameInputTitle">
                    <div className="inlineFlex">
                        <div className="greenCheck"></div>
                        <div className="campaignBoxTitle">Special Ad Categories</div>
                    </div>
                </div>
                <div className="displayColumn">
                    <div className="campaignInboxDescription">Declare if your ads are related to financial products and services, employment, housing, social issues, elections or politics to help prevent ad rejections. Requirements differ by country. About Special Ad Categories</div>
                </div>
                <div className="displayColumn">
                    <div><h4 className="noMarginTopBottom">Categories</h4></div>
                    <div className="budgetDescriptionSpan">Select the categories that best describe what this campaign will advertise.</div>
                    <CategoryDropDown />
                </div>
            </div>
        </>
    );
};

export default StepOne;
