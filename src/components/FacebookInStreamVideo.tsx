import "../styles/components/FacebookInStreamVideo.css";

interface FacebookInStreamVideoProps {
    imageUrl: string;
    sideImageUrl: string;
    title: string;
}

const FacebookInStreamVideo = ({title, imageUrl, sideImageUrl}:FacebookInStreamVideoProps) => {
    return (
        <div className="FbInStreamContainer">
            <div className="HeaderFacebookFbInStream">
                <div className="imageFbInStream"></div>
                <div className="imageBaseLineDisplayFbInStream">
                    <div className="imageBaseLineFbInStream" style={{ width: '104px' }}></div>
                    <div className="imageBaseLineFbInStream"></div>
                </div>
                <div className="bottomDotsFbInStream">
                    <i className="dotsFbInStream"></i>
                    <i className="dotsFbInStream"></i>
                    <i className="dotsFbInStream"></i>
                </div>
            </div>
            <div className="videoFbInStream">
                <div className="videoPlayContainerFbInStream">
                    <i className="videoPlayBtnFbInStream"></i>
                </div>
            </div>
            <div className="headlineContainerFbInStream">
                <div className="headlineImageContainerFbInStream">
                    <img className="headlineImageFbInStream" src="https://scontent.fblr1-5.fna.fbcdn.net/v/t39.30808-1/459894076_122093043854539676_131138458506691267_n.png?stp=dst-png_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=029d72&_nc_ohc=xWhMous_gtoQ7kNvwFpJYH-&_nc_oc=AdlxG0Fjp0VYY0kwgNXwK--VGARN4GTU-RK4MOHRFu46VHcLQ-cHx0sHspGFqgbUnHY&_nc_zt=24&_nc_ht=scontent.fblr1-5.fna&_nc_gid=r2Kp2nHyj_NWXiPpjVgAtg&oh=00_AfLJf4ehMJygGSIrYBEKXfxFkO21JdbiCWf_T3bvVY5FUQ&oe=6832FFDC" />
                </div>
                <div className="headlineTitleContainerFbInStream">
                    <div className="headlineTitleFbInStream">{title}</div>
                    <div className="sponsoredTitleFbInStream">Sponsored</div>
                </div>
                <div className="controllerContainerFbInStream">
                    <i className="actionFbInStream"></i>
                    <i className="upArrowFbInStream"></i>
                </div>
            </div>
            <div className="imageContainerFbInStream">
                <div className="imageFlexFbInStream">
                    <div className="imageDisplayFbInStream">
                        <img className="imageHolderFbInStream" src={imageUrl} />
                    </div>
                </div>
                <div className="imageFlexFbInStream">
                    <div className="imageDisplayFbInStream">
                        <img className="imageHolderFbInStream" src={sideImageUrl} />
                    </div>
                </div>
            </div>
            <div className="footerContainerFbInStream">
                <div className="textLoaderFbInStream">
                    <div className="imageBaseLineFbInStream footerImageBaseLineFbInStream" style={{ width: '160px' }}></div>
                    <div className="imageBaseLineFbInStream footerImageBaseLineFbInStream" style={{ width: '55px' }}></div>
                </div>
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
    );
};

export default FacebookInStreamVideo;
