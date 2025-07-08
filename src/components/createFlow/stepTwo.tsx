import "../../styles/components/createFlow/StepTwo.css";
import { Input, Switch, Checkbox, DatePicker, TimePicker } from 'antd';
import RadioDropDown from "../../components/RadioDropDown";
import { useState } from 'react';
import BudgetDropDown from "../../components/BudgetDropDown";
import CurrencyInput from "../../components/currencyInput";
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import GaugeChart from "../../components/guageChart"

const StepTwo = () => {
    const [enabledDynamicCreative, setDynamicCreative] = useState(false);
    const [endDate, setEndDate] = useState(false);

    const handleEndDateCheck = (e: CheckboxChangeEvent) => {
        setEndDate(e.target.checked);
    };
    return (
        <>
            <div className="columnFlex heightWindowFixer">
                <div className="scroller">
                    <div className="campaignNameInbox">
                        <div className="campaignNameInputTitle">
                            <div className="inlineFlex">
                                <div className="greenCheck"></div>
                                <div className="campaignBoxTitle">Ad set name</div>
                            </div>
                        </div>
                        <div className="campaignNameInputOperation">
                            <Input className="campaignNameInput" />
                            <div className="draftBtnContainerGlobal marginLeft8"><span className="draftTitleHeaderGlobal">Create template</span></div>
                        </div>
                    </div>

                    <div className="campaignNameInbox">
                        <div className="campaignNameInputTitle">
                            <div className="inlineFlex">
                                <div className="greenCheck"></div>
                                <div className="campaignBoxTitle">Awareness</div>
                            </div>
                        </div>
                        <div className="displayColumn">
                            <div className='flex noMarginTopBottom'><div><h4 className="noMargin">Performance goal​</h4></div><div className='infoIcon' /></div>
                            <div className="budgetDescriptionSpan">How you measure success for your ads.</div>
                            <RadioDropDown optionsDropDown={
                                [
                                    {
                                        key: 'Maximize reach of ads',
                                        label: 'Maximize reach of ads',
                                        description: `We'll try to show your ads to as many people as possible.`
                                    },
                                    {
                                        key: 'Maximize number of impressions',
                                        label: 'Maximize number of impressions',
                                        description: `We'll try to show your ads to people as many times as possible.`
                                    },
                                    {
                                        key: 'Maximize ad recall lift',
                                        label: 'Maximize ad recall lift',
                                        description: `We'll try to show your ads to people who are likely to remember seeing them.`
                                    }
                                ]
                            } />
                            <div className="budgetDescriptionSpan lightColor marginTop5">To help us improve delivery, we may survey a small section of your audience.</div>
                        </div>
                        <div className="displayColumn">
                            <div className='flex noMarginTopBottom'><div><h4 className="noMargin">Facebook Page</h4></div><div className='infoIcon' /></div>
                            <div className="budgetDescriptionSpan">Choose the Page you want to promote.</div>
                            <RadioDropDown optionsDropDown={
                                [
                                    {
                                        key: 'Maximize reach of ads',
                                        label: 'Maximize reach of ads',
                                        description: `We'll try to show your ads to as many people as possible.`
                                    },
                                    {
                                        key: 'Maximize number of impressions',
                                        label: 'Maximize number of impressions',
                                        description: `We'll try to show your ads to people as many times as possible.`
                                    },
                                    {
                                        key: 'Maximize ad recall lift',
                                        label: 'Maximize ad recall lift',
                                        description: `We'll try to show your ads to people who are likely to remember seeing them.`
                                    }
                                ]
                            } />
                        </div>
                        <div className="displayColumn">
                            <div className='flex noMarginTopBottom'><div><h4 className="noMargin">Cost per result goal</h4></div>&nbsp;<strong className="lightColor">Optional</strong><div className='infoIcon' /></div>
                            <div className="budgetDescriptionSpan">Choose the Page you want to promote.</div>
                            <RadioDropDown optionsDropDown={
                                [
                                    {
                                        key: 'Maximize reach of ads',
                                        label: 'Maximize reach of ads',
                                        description: `We'll try to show your ads to as many people as possible.`
                                    },
                                    {
                                        key: 'Maximize number of impressions',
                                        label: 'Maximize number of impressions',
                                        description: `We'll try to show your ads to people as many times as possible.`
                                    },
                                    {
                                        key: 'Maximize ad recall lift',
                                        label: 'Maximize ad recall lift',
                                        description: `We'll try to show your ads to people who are likely to remember seeing them.`
                                    }
                                ]
                            } />
                            <div className="campaignInboxDescription marginTop5">Meta will aim to spend your entire budget and get the most 1,000 impressions using the highest volume bid strategy. If keeping the average cost per result around a certain amount is important, enter a cost per result goal.</div>
                            <hr className="dividerForm" />
                            <div className="showMoreOption">Show more options <div className='dropDownIcon' style={{ backgroundColor: '#0a78be' }} /></div>
                        </div>
                    </div>

                    <div className="campaignNameInbox">
                        <div className="campaignNameInputTitle">
                            <div className="inlineFlex">
                                {enabledDynamicCreative && <div className="greenCheck"></div>}
                                <div className="campaignBoxTitle">Dynamic creative</div>
                            </div>
                            <div><span className="toogleTitle">{enabledDynamicCreative ? 'On' : 'Off'}</span><Switch checked={enabledDynamicCreative} onChange={setDynamicCreative} /></div>
                        </div>
                        <div className="displayColumn">
                            <div className="campaignInboxDescription">We’ll automatically create combinations of your media and text that your audience is likely to respond to.</div>
                        </div>
                        <div className="showMoreOption">About dynamic creative</div>
                    </div>

                    <div className="campaignNameInbox">
                        <div className="campaignNameInputTitle">
                            <div className="inlineFlex">
                                <div className="greenCheck"></div>
                                <div className="campaignBoxTitle">Budget & schedule</div>
                            </div>
                        </div>
                        <div className="displayColumn">
                            <div className='flex noMarginTopBottom'><div><h4 className="noMargin">Budget​</h4></div><div className='infoIcon' /></div>
                            <div className="flex">
                                <BudgetDropDown />
                                <CurrencyInput />
                            </div>
                            <div className="marginTop5">
                                <span className="budgetDescriptionSpan">You'll spend an average of $5.00 per day. Your maximum daily spend is $8.75 and your maximum weekly spend is <strong>$35.00</strong>.</span>
                            </div>
                            <div className="showMoreOption">About daily budget</div>
                        </div>
                        <div className="displayColumn">
                            <div className='flex noMarginTopBottom'><div><h4 className="noMargin">Schedule</h4></div></div>
                        </div>
                        <div className="displayColumn">
                            <div className='flex noMarginTopBottom'><div><h4 className="noMargin">Start date</h4></div></div>
                            <div className="flex marginTop5">
                                <DatePicker placeholder="mm/dd/yyyy" className="datePicker" />
                                <TimePicker className="timepicker" />
                            </div>
                        </div>
                        <div className="displayColumn">
                            <div className='flex noMarginTopBottom'><div><h4 className="noMargin">End date</h4></div></div>
                            <Checkbox checked={endDate} onChange={handleEndDateCheck}>Set an end date</Checkbox>
                            {endDate &&
                                <div className="flex marginTop5">
                                    <DatePicker placeholder="mm/dd/yyyy" className="datePicker" />
                                    <TimePicker className="timepicker" />
                                </div>
                            }
                        </div>
                        <hr className="dividerForm" />
                        <div className="showMoreOption">Show more options <div className='dropDownIcon' style={{ backgroundColor: '#0a78be' }} /></div>
                    </div>

                    <div className="campaignNameInbox">
                        <div className="campaignNameInputTitle">
                            <div className="inlineFlex">
                                <div className="greenCheck"></div>
                                <div className="campaignBoxTitle">Audience controls</div>
                                <div className='infoIcon' />
                            </div>
                        </div>
                        <div className="displayColumn">
                            <div className="campaignInboxDescription">Set criteria for where ads for this campaign can be delivered.</div>
                        </div>
                        <hr className="dividerForm" />
                        <div className="showMoreOption">Show more options <div className='dropDownIcon' style={{ backgroundColor: '#0a78be' }} /></div>
                    </div>

                    <div className="campaignNameInbox">
                        <div className="campaignNameInputTitle">
                            <div className="inlineFlex">
                                <div className="greenCheck"></div>
                                <div className="campaignBoxTitle">Advantage+ audience</div>
                                <div className='starIcon' />
                            </div>
                        </div>
                        <div className="displayColumn">
                            <div className="campaignInboxDescription">We’ll automatically show ads to people most likely to respond. We’ll show ads to people matching your suggestion, and other audiences when it’s likely to improve performance.</div>
                        </div>
                        <div className="showMoreOption">About audiences</div>
                        <div className="showMoreOption"></div>
                        <div className="draftBtnContainerGlobal"><div className="plusCircleIcon marginRight5"></div>Audience suggestion (optional)</div>
                        <hr className="dividerForm" />
                        <div className="inlineJustifiedFlex">
                            <div className="draftBtnContainerGlobal">Save audience</div>
                            <div className="showMoreOption noMargin">Switch to original audience options</div>
                        </div>
                    </div>

                    <div className="campaignNameInbox">
                        <div className="campaignNameInputTitle">
                            <div className="inlineFlex">
                                <div className="greenCheck"></div>
                                <div className="campaignBoxTitle">Placements</div>
                            </div>
                        </div>
                        <div className="displayColumn">
                            <div className="campaignInboxDescription">Choose where your ad appears across Meta technologies.</div>
                        </div>
                        <div className="displayColumn">
                            <div className='flex noMarginTopBottom'><div><h4 className="noMargin">Account controls</h4></div><div className='infoIcon' /></div>
                            <span className="budgetDescriptionSpan">Account controls: None</span>
                        </div>
                        <div className="displayColumn">
                            <div className='flex noMarginTopBottom'><div><h4 className="noMargin">Advantage+ placements</h4></div><div className='starIcon' /></div>
                            <span className="budgetDescriptionSpan">Your budget will be allocated by Meta's delivery system across multiple placements based on where it's likely to perform best.</span>
                        </div>
                        <hr className="dividerForm" />
                        <div className="showMoreOption">Show more options <div className='dropDownIcon' style={{ backgroundColor: '#0a78be' }} /></div>
                    </div>
                </div>
                <div className="secondColumnWidth">
                    <div className="campaignNameInbox columnFlex secondColumnWidth">
                        <div className="">
                            <GaugeChart value={65} />
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

                    <div className="campaignNameInbox secondColumnWidth">
                        <div className="campaignScoreInputTitle">
                            <div className="inlineFlex">
                                <div className="campaignBoxTitle">Audience definition</div>
                                <div className='infoIcon' />
                            </div>
                        </div>
                        <div className="displayColumn">
                            <div className="budgetDescriptionSpan">Your audience is broad.</div>
                            <div className="showMoreOption"></div>
                            <div className="budgetDescriptionSpan">Broad audiences can improve performance and reach more people likely to respond.</div>
                            <div className="showMoreOption"></div>
                            <div className="lineMarker marginTop10" />
                            <div className="inlineJustifiedFlex marginTop10"><div className="budgetDescriptionSpan">Narrow</div><div className="budgetDescriptionSpan">Broad</div></div>
                            <hr className="dividerForm" />
                            <div className="showMoreOption"></div>
                            <div className="flex"><div className="budgetDescriptionSpan">Estimated audience size: 36,900,000 - 43,500,000</div><div className='infoIcon' /></div>
                            <div className="budgetDescriptionSpan lightColor marginTop10">Your criteria is currently set to allow Advantage+ detailed targeting.<div className='infoIcon inlineDisplay' /></div>
                            <div className="flex"><div className='graphIcon' /><div className="budgetDescriptionSpan lightColor marginTop10 marginLeft10"><strong>Estimates do not include Advantage+ audience options</strong> and may vary significantly over time based on your targeting selections and available data.</div></div>
                        </div>
                    </div>

                    <div className="campaignNameInbox secondColumnWidth">
                        <div className="campaignNameInputTitle">
                            <div className="inlineFlex">
                                <div className="campaignBoxTitle">Estimated daily results</div>
                            </div>
                        </div>
                        <div className="displayColumn">
                            <div className="budgetDescriptionSpan">Reach<div className='infoIcon inlineDisplay' /></div>
                            <div className="marginTop10"><h2 className="noMargin">20K - 59K</h2></div>
                            <div className="percentageEstimatesDailyReachTotal marginTop10"><div className="percentageEstimatesDailyReach"/></div>
                        </div>
                        <hr className="dividerForm lightColor" />
                        <div className="budgetDescriptionSpan lightColor">The accuracy of estimates is based on factors like past campaign data, the budget you entered, market data, targeting criteria and ad placements. Numbers are provided to give you an idea of performance for your budget, but are only estimates and don't guarantee results.</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StepTwo;