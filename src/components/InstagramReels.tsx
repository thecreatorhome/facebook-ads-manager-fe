import "../styles/components/InstagramReels.css";
import { Carousel } from 'antd';

interface InstagramReelsProps {
    imageUrlList: string[];
    title: string;
    description: string;
    headerImgUrl: string;
}

const InstagramReels = ({ imageUrlList, title, description, headerImgUrl }: InstagramReelsProps) => {
    return (
        <div className="instagramReelsContainer">
            <div className="headerInstagramReels">
                <div className="headerTitleContainerInstagramReels">
                    <span className="headerTitleInstagramReels">Reels</span>
                </div>
                <div>
                    <i className="cameraInstagramReels"></i>
                </div>
            </div>
            <Carousel arrows={true} dots={{ className: 'custom-dots' }}>
                {imageUrlList.map((url, index) => (
                    <img
                        key={index}
                        src={url}
                        alt={`Instagram image ${index + 1}`}
                        style={{ width: '200px', height: '200px', objectFit: 'cover', margin: '8px' }}
                    />
                ))}
            </Carousel>
            <div className="footerInstagramSearch">
                <div className="columnHeadlineContainerInstagramSearch">
                    <div className="headlineContainerInstagramSearch">
                        <div className="headlineImageContainerInstagramSearch">
                            <img className="headlineImageInstagramSearch" src={headerImgUrl} />
                        </div>
                        <div className="headlineTitleContainerInstagramSearch">
                            <div className="headlineTitleInstagramSearch">
                                {title}
                                <span className="followInstagramReels">follow</span>
                            </div>
                        </div>
                    </div>
                    <div className="learnMoreContainer">
                        <div className="learnMoreFlex">
                            <div className="learnMoreTitle">Learn more</div>
                            <div className="sideArrowLearnMore"></div>
                        </div>
                    </div>
                    <div className="learnMoreDescriptionInstagramSearch">{description}</div>
                    <div className="sponsorInstagramReels">
                        <div><i className="speakerInstagramReels"></i></div>
                        <span className="speakerTitleInstagramReels">sponsor</span>
                    </div>
                </div>
                <div className="iconOptionContainerInstagramSearch">
                    <div><i className="loveIconInstagramSearch"></i></div>
                    <div><i className="chatIconInstagramSearch"></i></div>
                    <div><i className="forwardIconInstagramSearch"></i></div>
                    <div><i className="dotsIconInstagramSearch"></i></div>
                </div>
            </div>
        </div>
    );
};

export default InstagramReels;
