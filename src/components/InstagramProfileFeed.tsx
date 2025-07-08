import "../styles/components/InstagramFeed.css";
import AdsActionMenu from "./AdsActionMenu";

interface InstagramProfileFeedProps {
    imageUrl: string;
    title: string;
    headerImgUrl: string;
}

const InstagramProfileFeed = ({ imageUrl, title, headerImgUrl }: InstagramProfileFeedProps) => {
    return (
        <div className="hoverMeForTitle">
            <div className="flexAdsHeader">
                <div className="flex"><div className="instagramIconTitle" /><div className="adsTitleConfig">Instagram profile feed</div></div>
                <div><AdsActionMenu /></div>
            </div>
            <div className="FacebookFeedContainer">
                <div className="InstagramFeedScaleDown">
                    <div className="instagramHeaderTitle">
                        <div className="postNameInstagramProfileFeed">kaiblue</div>
                        <div className="postTitleInstagramProfileFeed">Posts</div>
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
        </div>
    )
}

export default InstagramProfileFeed;