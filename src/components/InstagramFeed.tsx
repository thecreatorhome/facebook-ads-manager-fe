import "../styles/components/InstagramFeed.css";
import instagramHeader from '../assets/instagramHeader.png';

interface InstagramFeedProps {
    imageUrl: string;
    title: string;
    headerImgUrl: string;
}

const InstagramFeed = ({ imageUrl, title, headerImgUrl }: InstagramFeedProps) => {
    return (
        <div className="FacebookFeedContainer">
            <div className="InstagramFeedScaleDown">
                <div>
                    <img src={instagramHeader} className="instagramHeaderTitle"/>
                </div>
                <div className="headlineContainerInstagramSearch height20">
                    <div className="headlineImageContainerInstagramSearch">
                        <img className="headlineImageInstagramSearch" src={headerImgUrl} alt="FacebookImage" />
                    </div>
                    <div className="headlineTitleContainerInstagramSearch">
                        <div className="headlineTitleInstagramSearch black">
                            {title}
                        </div>
                        <div className="sponsoredFeedClass">
                            Sponsored
                        </div>
                    </div>
                    <div className="controllerFBReel">
                        <div className="inlineJustifiedFlex">
                            <div><i className="optionFeedController"></i></div>
                        </div>
                    </div>
                </div>
                <div className="marginTopBottom10">
                    <div className="FacebookImageContainer marginTop10">
                        <img className="FacebookImage" src={imageUrl} alt="FacebookImage" />
                    </div>
                </div>
                <div className="footerContainerInstagramFeed">
                    <div className="footerOptionInstagramFeed">
                        <div className="">
                            <i className="likeOptionImgInstagramFeed" />
                        </div>
                        <div className="">
                            <i className="commentOptionImgInstagramFeed" />
                        </div>
                        <div className="">
                            <i className="shareOptionImgInstagramFeed" />
                        </div>
                    </div>
                    <div>
                        <div className="">
                            <i className="pokeOptionImgInstagramFeed" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InstagramFeed;