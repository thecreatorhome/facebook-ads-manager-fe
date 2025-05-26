import "../styles/components/InstagramReels.css";
import { Carousel } from 'antd';

interface InstagramReelsProps {
    imageUrlList: string[];
    title: string;
    description: string;
}

const InstagramReels = ({ imageUrlList, title, description }: InstagramReelsProps) => {
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
                            <img className="headlineImageInstagramSearch" src="https://scontent.fblr1-5.fna.fbcdn.net/v/t39.30808-1/459894076_122093043854539676_131138458506691267_n.png?stp=dst-png_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=029d72&_nc_ohc=xWhMous_gtoQ7kNvwFpJYH-&_nc_oc=AdlxG0Fjp0VYY0kwgNXwK--VGARN4GTU-RK4MOHRFu46VHcLQ-cHx0sHspGFqgbUnHY&_nc_zt=24&_nc_ht=scontent.fblr1-5.fna&_nc_gid=r2Kp2nHyj_NWXiPpjVgAtg&oh=00_AfLJf4ehMJygGSIrYBEKXfxFkO21JdbiCWf_T3bvVY5FUQ&oe=6832FFDC" />
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
