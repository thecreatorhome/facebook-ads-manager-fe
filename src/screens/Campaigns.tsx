import "../styles/screens/Campaigns.css";
import InstagramStories from "../components/InstagramStories";
import FacebookStories from "../components/FacebookStories";
import AdsOnFacebookReel from "../components/AdsOnFacebookReel";


const Campaigns = () => {
    return (
        <>
            <InstagramStories 
            imageUrl="https://www.facebook.com/ads/image/?d=AQIgwWaK-ouHhRj5sSn6gSdPPXUrC7qggdKVxm_NOul_J3GP3H4zLMYdIEzDKlDcnVye5ekU-tjIAoBmbs_JxLzEQkfP_KtUOfLM4VKiTjhXaUnkRtvs7AUwrU7XiSfbyC3AhcMHdf6pVtNAXaWgTsFo" 
            description="Repairing your roof can help you save a lot of money in the long ru...More"/>
            <FacebookStories 
            imageUrl="https://www.facebook.com/ads/image/?d=AQIgwWaK-ouHhRj5sSn6gSdPPXUrC7qggdKVxm_NOul_J3GP3H4zLMYdIEzDKlDcnVye5ekU-tjIAoBmbs_JxLzEQkfP_KtUOfLM4VKiTjhXaUnkRtvs7AUwrU7XiSfbyC3AhcMHdf6pVtNAXaWgTsFo" 
            description="Repairing your roof can help you save a lot of money in the long ru...More"/>
            <AdsOnFacebookReel 
            title="Better Home"
            imageUrl="https://scontent.fblr1-6.fna.fbcdn.net/v/t45.1600-4/459129430_120211605965250647_9072147744175465530_n.jpg?stp=cp0_dst-jpg_q75_s480x480_spS444_tt6&_nc_cat=102&ccb=1-7&_nc_sid=c02adf&_nc_ohc=TqJ9Yq27gqYQ7kNvwEPuHWC&_nc_oc=Adn9MaKgceKgNLc4IPTxS-MmaOSrRl-OMLjoKoqoyknHMz17REW_yie33qnM7mfn5K4&_nc_zt=1&_nc_ht=scontent.fblr1-6.fna&_nc_gid=qsvyCmWsM0nWSy9gI0f7hg&oh=00_AfKJghnhL-2DRYkGNsa3ORfHDepjL1OEvcUH2kDUYcqDBg&oe=6831E74A"/>

       </>
    );
};

export default Campaigns;
