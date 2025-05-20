import "../styles/components/AdsOnFacebookReel.css";

interface AdsOnFacebookReelProps {
    imageUrl: string;
    title: string;
}

/*
<AdsOnFacebookReel 
    title="Better Home"
    imageUrl="https://scontent.fblr1-6.fna.fbcdn.net/v/t45.1600-4/459129430_120211605965250647_9072147744175465530_n.jpg?stp=cp0_dst-jpg_q75_s480x480_spS444_tt6&_nc_cat=102&ccb=1-7&_nc_sid=c02adf&_nc_ohc=TqJ9Yq27gqYQ7kNvwEPuHWC&_nc_oc=Adn9MaKgceKgNLc4IPTxS-MmaOSrRl-OMLjoKoqoyknHMz17REW_yie33qnM7mfn5K4&_nc_zt=1&_nc_ht=scontent.fblr1-6.fna&_nc_gid=qsvyCmWsM0nWSy9gI0f7hg&oh=00_AfKJghnhL-2DRYkGNsa3ORfHDepjL1OEvcUH2kDUYcqDBg&oe=6831E74A"/>
*/

const AdsOnFacebookReel = ({imageUrl, title}: AdsOnFacebookReelProps) => {
    return (
        <div className="adsFbReelContainer">
            <div className="HeaderFacebookReel">
                <div className="imageFBBar"></div>
                <div className="imageFBBar"></div>
            </div>
            <div className="sideBarFBReel">
                <div className="imageFBBar"></div>
                <div className="imageFBBar"></div>
                <div className="imageFBBar"></div>
                <div className="imageFBBar"></div>
            </div>
            <div className="baseLoaderFacebookReel">
                <div className="baseImageLoaderFacebookReel">
                    <div className="imageFBBar"></div>
                    <div className="imageBaseLineDisplay">
                        <div className="imageBaseLineFBReel" style={{ width: '84px' }}></div>
                        <div className="imageBaseLineFBReel"></div>
                    </div>
                </div>
                <div className="baseLineFBReel"></div>
            </div>
            <div className="dataFBReel">
                <div className="imageFBReelContainer">
                    <img className="imageFBReel" src={imageUrl} />
                </div>
                <div className="textFBReelContainer">
                    <div className="textFBReel">
                        <div className="titleTextFBReel">{title}</div>
                        <div><i className="dots active"></i></div>
                        <div className="titleTextFBReel">Sponsor</div>
                    </div>
                </div>
                <div className="controllerFBReel">
                    <div className="crossControllerContainer">
                        <i className="crossController"></i>
                    </div>
                    <div className="optionControllerContainer">
                        <i className="optionController"></i>
                    </div>
                </div>
            </div>
            <div className="bottomDotsFBReel">
                <i className="dots active"></i>
                <i className="dots"></i>
                <i className="dots"></i>
                <i className="dots"></i>
            </div>
        </div>
    );
};

export default AdsOnFacebookReel;
