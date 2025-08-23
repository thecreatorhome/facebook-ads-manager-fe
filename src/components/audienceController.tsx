import "../styles/components/audienceController.css";
import { Tabs } from "antd";
import { Button, Dropdown, Radio } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import React, { useState } from "react";

const { TabPane } = Tabs;

const AudienceController: React.FC = () => {
    const [selectedAudience, setAudience] = useState<string>('Pakistan');
    const ageDropDown = Array.from({ length: 65 - 13 + 1 }, (_, i) => {
        const age = i + 13;
        return {
          key: age.toString(),
          label: age.toString(),
        };
      });
    const [selectedAge, setSelectedAge] = useState(ageDropDown[0].key); // Default to first key
    const selectedAgeLabel = ageDropDown.find(item => item.key === selectedAge)?.label;

    const handleAgeChange = (e: any) => {
        setSelectedAge(e.target.value);
    };

    const dropdownContent = (
        <div>
            <Radio.Group onChange={handleAgeChange} value={selectedAge} className='radioOptionBudget ageDropDownOption'>
                {ageDropDown.map(option => (
                    <Radio key={option.key} value={option.key}>
                        {option.label}
                    </Radio>
                ))}
            </Radio.Group>
        </div>
    );

    return (
        <Tabs defaultActiveKey="1" tabPosition="top">
            <TabPane tab="Create new audience" key="CreateNewAudience">
                <div>
                    <div>
                        <div className="flex"><div className="fontWeight700">* Location</div><div className='infoIcon' /></div>
                        <div className="locationText marginTop5">Included location:</div>
                        <div className="locationText"><b>*</b><span className="marginLeft10">{selectedAudience}</span></div>
                    </div>
                    <div className="marginTop20">
                        <div className="flex"><div className="fontWeight700">Age</div><div className='infoIcon' /></div>
                        <Dropdown overlay={dropdownContent} trigger={['click']} className="budgetTypeOptionDropDown marginTop5 ageDropDown">
                            <Button>
                                {selectedAgeLabel} <DownOutlined />
                            </Button>
                        </Dropdown>
                    </div>

                    <div className="marginTop20">
                        <div className="flex"><div className="fontWeight700">Detailed targeting</div><div className='infoIcon' /></div>
                        <div className="locationText marginTop5">No options added</div>
                    </div>

                    <div className="marginTop20">
                        <div className="flex"><div className="fontWeight700">Languages</div><div className='infoIcon' /></div>
                        <div className="locationText marginTop5">All languages</div>
                    </div>
                </div>
            </TabPane>
            <TabPane tab="Use saved audience" key="UseSavedAudience">
                <div className="fontWeight700">Coming Soon</div>
            </TabPane>
        </Tabs>
    );
};

export default AudienceController;
