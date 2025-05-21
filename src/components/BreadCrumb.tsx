import "../styles/components/BreadCrumb.css";
import { Breadcrumb } from 'antd';
import { NewTrafficLogo } from "../assets/NewTrafficLogo";
import { FolderLogo } from "../assets/FolderLogo";
import { NewAdLogo } from "../assets/NewAdLogo";

const BreadCrumb = () => {
    return (
        <div className="breadcrumbContainer">
            <div className="homeOptionBreadCrumb">
                <i className="homeOptionLogoBreadCrumb" />
            </div>
            <div>
                <Breadcrumb
                    separator={<i className="breadCrumbSeparator" />}
                    items={[
                        {
                            title: (<><div className="breadCrumTitleContainer"><div><FolderLogo /></div><div className="breadCrumbTitle">Roofing PR</div></div></>),
                            href: '',
                            className: ''
                        },
                        {
                            title: (<><div className="breadCrumTitleContainer"><div><NewTrafficLogo /></div><div className="breadCrumbTitle">New Traffic ad set</div></div></>),
                            href: '',
                            className: '',
                        },
                        {
                            title: (<><div className="breadCrumTitleContainer"><div><NewAdLogo /></div><div className="breadCrumbTitle">New Traffic ad</div></div></>),
                            href: '',
                            className: ''
                        },
                    ]}
                />
            </div>
            <div></div>
        </div>

    );
};

export default BreadCrumb;
