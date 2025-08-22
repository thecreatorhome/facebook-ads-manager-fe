import "../styles/components/AuctionDropDown.css";
import { Button, Dropdown, Menu, MenuProps } from 'antd';
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AuctionDropDown = () => {
    const buyingTypeDropDown = [
        {
            key: uuidv4(),
            label: 'Auction',
            description: 'Buy in real-time with cost effective bidding.'
        },
        {
            key: uuidv4(),
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
        <div onClick={(e) => e.stopPropagation()}>
            <Dropdown
                overlay={menu}
                trigger={['click']}
                className="auctionTypeOptionDropDown"
                getPopupContainer={(triggerNode) => triggerNode.parentElement as HTMLElement}
            >
                <Button>
                    {selectedLabel}<div className='dropDownIcon' />
                </Button>
            </Dropdown>
        </div>
    );

};

export default AuctionDropDown;
