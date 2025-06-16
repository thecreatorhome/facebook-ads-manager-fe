import "../styles/components/FacebookReels.css";
import { Carousel } from 'antd';

interface FacebookReelsProps {
    imageUrlList: string[];
    title: string;
    description: string;
    headerImgUrl: string;
}
const FacebookReels = ({ imageUrlList, title, description, headerImgUrl }: FacebookReelsProps) => {
    return (
        <div className="FacebookReelsContainer">
            <div className="headerFacebookReels"></div>
            <Carousel arrows={false} autoplay={true} dots={false} autoplaySpeed={3000} effect='fade' className="facebookReelsCarousel marginTop30 height">
                {imageUrlList.map((url, index) => (
                    <img
                        key={index}
                        src={url}
                        alt={`Instagram image ${index + 1}`}
                        style={{ width: '200px', height: '200px', objectFit: 'cover', margin: '8px' }}
                    />
                ))}
            </Carousel>
            <div className="footerInstagramSearch footerFacebookReels">
                <div className="columnHeadlineContainerInstagramSearch columnHeadlineContainerFacebookReel">
                    <div className="headlineContainerInstagramSearch">
                        <div className="headlineImageContainerInstagramSearch">
                            <img className="headlineImageInstagramSearch" src={headerImgUrl} />
                        </div>
                        <div className="headlineTitleContainerInstagramSearch">
                            <div className="headlineTitleInstagramSearch">
                                {title}
                            </div>
                        </div>
                    </div>
                    <div className="learnMoreDescriptionInstagramSearch">{description}</div>
                    <div className="learnMoreContainer">
                        <div className="learnMoreFlex learnMoreFlexFacebookReel">
                            <div className="learnMoreTitle">Learn more</div>
                        </div>
                    </div>
                    <div className="sponsorInstagramReels">
                        <span className="speakerTitleFacebookReels">Sponsored</span>
                    </div>
                </div>
                <div className="iconOptionContainerInstagramSearch iconOptionContainerFacebookReels">
                    <div className="optionContainerFacebookReels"><i className="LikeIconFacebookReels"></i><span className="numberIconFacebookReels">50</span></div>
                    <div className="optionContainerFacebookReels"><i className="chatIconFacebookReels"></i><span className="numberIconFacebookReels">3</span></div>
                    <div className="optionContainerFacebookReels"><i className="forwardIconFacebookReels"></i><span className="numberIconFacebookReels">1</span></div>
                    <div className="optionContainerFacebookReels"><i className="dotsIconInstagramSearch"></i></div>
                </div>
            </div>
        </div>
    );
};

export default FacebookReels;
