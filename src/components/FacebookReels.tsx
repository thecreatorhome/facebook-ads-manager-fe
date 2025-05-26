import "../styles/components/FacebookReels.css";
import { Carousel } from 'antd';

interface FacebookReelsProps {
    imageUrlList: string[];
    // title: string;
    // description: string;
}
const FacebookReels = ({ imageUrlList }: FacebookReelsProps) => {
    return (
        <div className="FacebookReelsContainer">
            <div className="headerFacebookReels"></div>
            <Carousel arrows={false} autoplay={true} dots={false} autoplaySpeed={3000} effect='fade'>
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
                <div></div>
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
