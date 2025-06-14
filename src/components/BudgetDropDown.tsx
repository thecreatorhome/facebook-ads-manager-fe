import { Button, Dropdown, Radio } from 'antd';
import { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import "../styles/components/BudgetDropDown.css";

const BudgetDropDown = () => {
    const optionsDropDown = [
        {
            key: 'DailyBudget',
            label: 'Daily Budget',
        },
        {
            key: 'LifeTimeBudget',
            label: 'Life Time Budget',
        },
    ];

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
                        {option.label}
                    </Radio>
                ))}
            </Radio.Group>
        </div>
    );

    return (
        <Dropdown overlay={dropdownContent} trigger={['click']} className="budgetTypeOptionDropDown">
            <Button>
                {selectedLabel} <DownOutlined />
            </Button>
        </Dropdown>
    );
};

export default BudgetDropDown;
