import "../styles/components/FacebookFeed.css";

interface FacebookFeedProps {
    imageUrl: string;
    title: string;
    headerImgUrl: string;
}

const FacebookFeed = ({ imageUrl, title, headerImgUrl }: FacebookFeedProps) => {
    return (
        <div className="FacebookFeedContainer">
            <div className="FacebookFeedScaleDown">
                <div className="headlineContainerInstagramSearch height20">
                    <div className="headlineImageContainerInstagramSearch">
                        <img className="headlineImageInstagramSearch" src={headerImgUrl} alt="FacebookImage"/>
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
                            <div><i className="crossFeedController"></i></div>
                        </div>
                    </div>
                </div>
                <div className="marginTopBottom20">
                    <div className="FacebookImageContainer marginTop10">
                        <img className="FacebookImage" src={imageUrl} alt="FacebookImage"/>
                    </div>
                </div>
                <div className="footerContainerFbInStream">
                    <div className="dividerFbInStream"></div>
                    <div className="footerOptionFbInStream">
                        <div className="optionFbInStream">
                            <i className="likeOptionImgFbInStream" />
                            <div className="textOptionImgFbInStream">Like</div>
                        </div>
                        <div className="optionFbInStream">
                            <i className="commentOptionImgFbInStream" />
                            <div className="textOptionImgFbInStream">Comment</div>
                        </div>
                        <div className="optionFbInStream">
                            <i className="shareOptionImgFbInStream" />
                            <div className="textOptionImgFbInStream">Share</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FacebookFeed;