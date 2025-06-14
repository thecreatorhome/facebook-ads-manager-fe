import { Button, Dropdown, Radio } from 'antd';
import { useState } from 'react';
import "../styles/components/RadioDropDown.css";

interface DropDownOption {
    key: string;
    label: string;
    description?: string;
}

interface RadioDropDownProps {
    optionsDropDown: DropDownOption[];
}

const RadioDropDown = ( {optionsDropDown}: RadioDropDownProps) => {

    const [selectedKey, setSelectedKey] = useState(optionsDropDown[0].key); // Default to first key

    const handleChange = (e: any) => {
        setSelectedKey(e.target.value);
    };

    const selectedLabel = optionsDropDown.find(item => item.key === selectedKey)?.label;

    const dropdownContent = (
        <div>
            <Radio.Group onChange={handleChange} value={selectedKey} className='radioOptionBudget'>
                {optionsDropDown.map(option => (
                    <Radio key={option.key} value={option.key}>
                        <div>{option.label}<br/><span className='budgetDescriptionSpan'>{option.description}</span></div>
                    </Radio>
                ))}
            </Radio.Group>
        </div>
    );

    return (
        <Dropdown overlay={dropdownContent} trigger={['click']} className="budgetTypeOptionDropDown marginTop10" >
            <Button>
                {selectedLabel} <div className='dropDownIcon' />
            </Button>
        </Dropdown>
    );
};

export default RadioDropDown;
