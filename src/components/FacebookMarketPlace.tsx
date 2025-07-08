import "../styles/components/FacebookMarketPlace.css";
import AdsActionMenu from "./AdsActionMenu";

interface FacebookMarketPlaceProps {
    imageUrl: string;
    title: string;
    headerImgUrl: string;
}

const FacebookMarketPlace = ({ imageUrl, title, headerImgUrl }: FacebookMarketPlaceProps) => {
    return (
        <div className="hoverMeForTitle">
            <div className="flexAdsHeader">
                <div className="flex"><div className="facebookIconTitle" /><div className="adsTitleConfig">Facebook Market Place</div></div>
                <div><AdsActionMenu /></div>
            </div>
            <div className="FacebookFeedContainer">
                <div className="FacebookMarketPlaceScaleDown">
                    <div className="marketPlaceContainerBox">
                        <div className="headlineContainerInstagramSearch height20">
                            <div className="headlineImageContainerInstagramSearch">
                                <img className="headlineImageInstagramSearch" src={headerImgUrl} alt="FacebookImage" />
                            </div>
                            <div className="headlineTitleContainerInstagramSearch">
                                <div className="headlineTitleMarketPlace black">
                                    {title}
                                </div>
                                <div className="sponsoredMarketPlaceClass">
                                    Sponsored
                                </div>
                            </div>
                            <div className="controllerFBReel">
                                <div className="inlineJustifiedFlex">
                                    <div><i className="optionFeedController"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className="marginTopBottom20">
                            <div className="FacebookImageContainer marginTop10">
                                <img className="FacebookImage" src={imageUrl} alt="FacebookImage" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FacebookMarketPlace;