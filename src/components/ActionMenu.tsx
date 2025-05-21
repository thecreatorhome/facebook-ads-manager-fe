import "../styles/components/ActionMenu.css";
import { DownOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

const items: MenuProps['items'] = [
    {
        key: 'duplicate',
        label: 'Duplicate',
        extra: 'Ctrl+Shift+D',
    },
    {
        key: 'quickDuplicate',
        label: 'Quick Duplicate',
        extra: 'Ctrl+D',
    },
    {
        key: 'copy',
        label: 'Copy',
        extra: 'Ctrl+C',
    },
    {
        key: 'paste',
        label: 'Paste',
        disabled: true,
        extra: 'Ctrl+V',
    },
    {
        key: 'delete',
        label: 'Delete',
        extra: 'Ctrl+Del',
    },
    {
        type: 'divider',
    },
    {
        key: 'createAdSet',
        label: 'Create ad set',
    },
    {
        key: 'createRule',
        label: 'Create rule',
    },
    {
        type: 'divider',
    },
    {
        key: 'id',
        label: 'ID: 32876387147987439',
        extra: 'copy',
        disabled: true
    },
];

const ActionMenu = () => {
    return (
        <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
                <Space>
                    <div className="actionOptionContainer">
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

export default ActionMenu;
