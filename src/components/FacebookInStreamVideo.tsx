import "../styles/components/FacebookInStreamVideo.css";

interface FacebookInStreamVideoProps {
    imageUrl: string;
    sideImageUrl: string;
    title: string;
}

/*
FacebookInStreamVideo
    title="Better Home"
    imageUrl="https://scontent.fblr1-6.fna.fbcdn.net/v/t45.1600-4/459129430_120211605965250647_9072147744175465530_n.jpg?stp=cp0_dst-jpg_q75_s480x480_spS444_tt6&_nc_cat=102&ccb=1-7&_nc_sid=c02adf&_nc_ohc=TqJ9Yq27gqYQ7kNvwEkOpse&_nc_oc=AdkDpA9KtmxlHuy1ml5VbxrlTW6WSEBDH4X68xFsFFGBEYJa-en5E_FWmKjklgUwG3U&_nc_zt=1&_nc_ht=scontent.fblr1-6.fna&_nc_gid=r2Kp2nHyj_NWXiPpjVgAtg&oh=00_AfK3LKJreyC1_4EQcVaB6l83-PwMHb5hbbDsNRMQHaSfkQ&oe=6833008A"
    sideImageUrl="https://scontent.fblr1-6.fna.fbcdn.net/v/t45.1600-4/459597814_120211605965220647_5018815817225299628_n.jpg?stp=cp0_dst-jpg_q75_s480x480_spS444_tt6&_nc_cat=102&ccb=1-7&_nc_sid=c02adf&_nc_ohc=x6tLKDbUpVUQ7kNvwGudTsR&_nc_oc=Adnf86GvEaArsnaymjcaT9AX5Dp4cROZgCFXkAKYgKhs2ntQKfAbnA5uhP2CxfJRiEM&_nc_zt=1&_nc_ht=scontent.fblr1-6.fna&_nc_gid=r2Kp2nHyj_NWXiPpjVgAtg&oh=00_AfLUmhpjdDj5qGmdwXx54K943MDnnGglMvoyS6sajvF3Zg&oe=683309EB"
/>
*/
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
