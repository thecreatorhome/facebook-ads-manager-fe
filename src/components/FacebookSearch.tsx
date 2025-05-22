import "../styles/components/FacebookSearch.css";

interface FacebookSearchProps {
    headerImgUrl: string;
    imageUrl: string;
    sideImageUrl: string;
    title: string;
    description: string;
}

/*
<FacebookSearch
    headerImgUrl="https://scontent.fblr1-5.fna.fbcdn.net/v/t39.30808-1/459894076_122093043854539676_131138458506691267_n.png?stp=dst-png_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=029d72&_nc_ohc=xWhMous_gtoQ7kNvwFpJYH-&_nc_oc=AdlxG0Fjp0VYY0kwgNXwK--VGARN4GTU-RK4MOHRFu46VHcLQ-cHx0sHspGFqgbUnHY&_nc_zt=24&_nc_ht=scontent.fblr1-5.fna&_nc_gid=r2Kp2nHyj_NWXiPpjVgAtg&oh=00_AfLJf4ehMJygGSIrYBEKXfxFkO21JdbiCWf_T3bvVY5FUQ&oe=6832FFDC"
    title="Better Home"
    description="Repairing your roof can help you save a.."
    imageUrl="https://scontent.fblr1-6.fna.fbcdn.net/v/t45.1600-4/459129430_120211605965250647_9072147744175465530_n.jpg?stp=cp0_dst-jpg_q75_s480x480_spS444_tt6&_nc_cat=102&ccb=1-7&_nc_sid=c02adf&_nc_ohc=TqJ9Yq27gqYQ7kNvwEkOpse&_nc_oc=AdkDpA9KtmxlHuy1ml5VbxrlTW6WSEBDH4X68xFsFFGBEYJa-en5E_FWmKjklgUwG3U&_nc_zt=1&_nc_ht=scontent.fblr1-6.fna&_nc_gid=r2Kp2nHyj_NWXiPpjVgAtg&oh=00_AfK3LKJreyC1_4EQcVaB6l83-PwMHb5hbbDsNRMQHaSfkQ&oe=6833008A"
    sideImageUrl="https://scontent.fblr1-6.fna.fbcdn.net/v/t45.1600-4/459597814_120211605965220647_5018815817225299628_n.jpg?stp=cp0_dst-jpg_q75_s480x480_spS444_tt6&_nc_cat=102&ccb=1-7&_nc_sid=c02adf&_nc_ohc=x6tLKDbUpVUQ7kNvwGudTsR&_nc_oc=Adnf86GvEaArsnaymjcaT9AX5Dp4cROZgCFXkAKYgKhs2ntQKfAbnA5uhP2CxfJRiEM&_nc_zt=1&_nc_ht=scontent.fblr1-6.fna&_nc_gid=r2Kp2nHyj_NWXiPpjVgAtg&oh=00_AfLUmhpjdDj5qGmdwXx54K943MDnnGglMvoyS6sajvF3Zg&oe=683309EB"
/>
*/

const FacebookSearch = ({ headerImgUrl, title, imageUrl, sideImageUrl, description }: FacebookSearchProps) => {
    return (
        <div className="FbSearchContainer">
            <div>
                <div className="headlineContainerFbSearch">
                    <div className="headlineImageContainerFbInStream">
                        <img className="headlineImageFbSearch" src={headerImgUrl} />
                    </div>
                    <div className="headlineTitleContainerFbSearch">
                        <div className="headlineTitleFbInStream">{title}</div>
                        <div className="sponsoredTitleFbInStream">Sponsored</div>
                    </div>
                    <div className="controllerContainerFbSearch">
                        <i className="actionFbInStream"></i>
                    </div>
                </div>

                <div className="imageContainerFbSearch">
                    <div className="">
                        <img className="imageHolderFbSearch" src={imageUrl} />
                        <div className="imgDescriptionFbSearch">{description}</div>
                    </div>
                    <div className="">
                        <img className="imageHolderFbSearch" src={sideImageUrl} />
                        <div className="imgDescriptionFbSearch">{description}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacebookSearch;
