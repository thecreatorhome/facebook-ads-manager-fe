// import "../styles/components/AuctionDropDown.css";
import { Button, Dropdown, Menu, MenuProps } from 'antd';
import { useState } from "react";
import { DownOutlined } from '@ant-design/icons';

const AuctionDropDown = () => {
    const buyingTypeDropDown = [
        {
            key: '1',
            label: 'Auction',
            description: 'Buy in real-time with cost effective bidding.'
        },
        {
            key: '2',
            label: 'Reservation',
            description: 'Buy in advancefor more predictable outcomes.'
        },
    ];
    const [selectedLabel, setSelectedLabel] = useState(buyingTypeDropDown[0].label); // Default: first option

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        const selectedItem = buyingTypeDropDown.find(item => item.key === e.key);
        if (selectedItem) {
            setSelectedLabel(selectedItem.label);
        }
    };

    const menu = (
        <Menu onClick={handleMenuClick} items={buyingTypeDropDown} />
    );

    return (
        <Dropdown overlay={menu} trigger={['click']} className="buyingTypeOptionDropDown">
            <Button>
                {selectedLabel}<DownOutlined />
            </Button>
        </Dropdown>
    );
};

export default AuctionDropDown;
