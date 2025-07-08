import "../styles/components/ActionMenu.css";
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

const items: MenuProps['items'] = [
    {
        key: 'expand',
        label: 'Expand'
    },
    {
        key: 'refresh',
        label: 'Refresh',
    },
    {
        key: 'Reportaproblem',
        label: 'Report a problem',
    },
];

interface AdsActionMenuProps {
    noBorder?: boolean;
}

const AdsActionMenu = ({ noBorder = false}: AdsActionMenuProps) => {
    return (
        <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
                <Space>
                    <div className={"actionOptionContainer " +(noBorder ? "noBorderActionOptionContainer": "")}>
                        <div className="actionDots">
                            <i className="dotActionMenu"></i>
                            <i className="dotActionMenu"></i>
                            <i className="dotActionMenu"></i>
                        </div>
                    </div>
                </Space>
            </a>
        </Dropdown>
    );
};

export default AdsActionMenu;
