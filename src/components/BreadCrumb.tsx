import "../styles/components/BreadCrumb.css";
import { Breadcrumb } from 'antd';
import { NewTrafficLogo } from "../assets/NewTrafficLogo";
import { FolderLogo } from "../assets/FolderLogo";
import { NewAdLogo } from "../assets/NewAdLogo";

interface BreadCrumbProps {
    formState: number;
    setFormState: React.Dispatch<React.SetStateAction<number>>;
}

const BreadCrumb = ({ formState, setFormState }: BreadCrumbProps) => {
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
                            title: (
                                <div
                                    className={`breadCrumTitleContainer ${formState === 1 ? "activeStep" : ""}`}
                                    onClick={() => setFormState(1)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <div><FolderLogo /></div>
                                    <div className="breadCrumbTitle">Roofing PR</div>
                                </div>
                            ),
                        },
                        {
                            title: (
                                <div
                                className={`breadCrumTitleContainer ${formState === 2 ? "activeStep" : ""}`}
                                    onClick={() => setFormState(2)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <div><NewTrafficLogo /></div>
                                    <div className="breadCrumbTitle">New Traffic ad set</div>
                                </div>
                            ),
                        },
                        {
                            title: (
                                <div
                                className={`breadCrumTitleContainer ${formState === 3 ? "activeStep" : ""}`}
                                    onClick={() => setFormState(3)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <div><NewAdLogo /></div>
                                    <div className="breadCrumbTitle">New Traffic ad</div>
                                </div>
                            ),
                        },
                    ]}
                />
            </div>
        </div>
    );
};

export default BreadCrumb;
