import "../styles/components/CampaignLevelSideBar.css";
import { Tree } from 'antd';
import type { TreeDataNode } from 'antd';

const { DirectoryTree } = Tree;

interface CampaignLevelSideBarProps {
    campaignName: string;
    trafficAdSet: string;
    trafficAd: string;
}

// <CampaignLevelSideBar campaignName="Roofing PR" trafficAdSet="New Traffic ad set" trafficAd="New Traffic"/>
const CampaignLevelSideBar = ({campaignName, trafficAdSet, trafficAd}:CampaignLevelSideBarProps) => {

    const campaignsLevel: TreeDataNode[] = [
        {
            title: campaignName,
            key: '0-0',
            children: [
                {
                    title: trafficAdSet,
                    key: '0-0-0',
                    isLeaf: true,
                    icon: <svg viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor" className="x4s1yf2 xlup9mm x1kky2od"><g data-name="Layer 2"><g><g data-name="16"><rect className="xbh8q5q xi5qq39" x="9.5" y="0.5" width="6" height="6" rx="1"></rect><rect className="xbh8q5q xi5qq39" x="0.5" y="0.5" width="6" height="6" rx="1"></rect><rect className="xbh8q5q xi5qq39" x="9.5" y="9.5" width="6" height="6" rx="1" transform="rotate(90 12.5 12.5)"></rect><rect className="xbh8q5q xi5qq39" x="0.5" y="9.5" width="6" height="6" rx="1" transform="rotate(90 3.5 12.5)"></rect></g></g></g></svg>,
                    children: [
                        {
                            title: trafficAd,
                            key: '0-0-0-0',
                            isLeaf: true,
                            icon: <svg viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor" className="x4s1yf2 xlup9mm x1kky2od"><g data-name="Layer 2"><g data-name="16"><rect x="1.5" y="1.5" width="13" height="13" rx="1.25" stroke="currentColor" fill="none"></rect><circle cx="4.5" cy="4.5" r="1"></circle><path stroke-linecap="round" stroke="currentColor" fill="none" d="M7.5 4.5 12.5 4.5"></path></g></g></svg>
                        }
                    ]
                },
            ],
            icon: <svg viewBox="0 0 48 48" width="1em" height="1em" fill="currentColor"><path d="M40.5 10H23.74c-1.08 0-2.03-.69-2.37-1.71s-.18-.53-.18-.53A5.496 5.496 0 0 0 15.97 4H6.5C4.02 4 2 6.02 2 8.5v30C2 41.53 4.47 44 7.5 44h33c3.03 0 5.5-2.47 5.5-5.5v-23c0-3.03-2.47-5.5-5.5-5.5z"></path></svg>
        }
    ];

    return (
        <DirectoryTree
            multiple={false}
            draggable={false}
            treeData={campaignsLevel}
            expandAction={false}

        />
    );
};

export default CampaignLevelSideBar;
