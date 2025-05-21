import "../styles/screens/Campaigns.css";
import InstagramStories from "../components/InstagramStories";
import FacebookStories from "../components/FacebookStories";
import AdsOnFacebookReel from "../components/AdsOnFacebookReel";
import FacebookInStreamVideo from "../components/FacebookInStreamVideo";
import BreadCrumb from "../components/BreadCrumb";
import ActionMenu from "../components/ActionMenu";
import CampaignTable from "../components/CampaignTable";

const Campaigns = () => {
    return (
        <>
            <CampaignTable />
            <BreadCrumb />
            <ActionMenu />
            <InstagramStories
                imageUrl="https://www.facebook.com/ads/image/?d=AQIgwWaK-ouHhRj5sSn6gSdPPXUrC7qggdKVxm_NOul_J3GP3H4zLMYdIEzDKlDcnVye5ekU-tjIAoBmbs_JxLzEQkfP_KtUOfLM4VKiTjhXaUnkRtvs7AUwrU7XiSfbyC3AhcMHdf6pVtNAXaWgTsFo"
                description="Repairing your roof can help you save a lot of money in the long ru...More" />
            <FacebookStories
                imageUrl="https://www.facebook.com/ads/image/?d=AQIgwWaK-ouHhRj5sSn6gSdPPXUrC7qggdKVxm_NOul_J3GP3H4zLMYdIEzDKlDcnVye5ekU-tjIAoBmbs_JxLzEQkfP_KtUOfLM4VKiTjhXaUnkRtvs7AUwrU7XiSfbyC3AhcMHdf6pVtNAXaWgTsFo"
                description="Repairing your roof can help you save a lot of money in the long ru...More" />
            <AdsOnFacebookReel
                title="Better Home"
                imageUrl="https://scontent.fblr1-6.fna.fbcdn.net/v/t45.1600-4/459129430_120211605965250647_9072147744175465530_n.jpg?stp=cp0_dst-jpg_q75_s480x480_spS444_tt6&_nc_cat=102&ccb=1-7&_nc_sid=c02adf&_nc_ohc=TqJ9Yq27gqYQ7kNvwEPuHWC&_nc_oc=Adn9MaKgceKgNLc4IPTxS-MmaOSrRl-OMLjoKoqoyknHMz17REW_yie33qnM7mfn5K4&_nc_zt=1&_nc_ht=scontent.fblr1-6.fna&_nc_gid=qsvyCmWsM0nWSy9gI0f7hg&oh=00_AfKJghnhL-2DRYkGNsa3ORfHDepjL1OEvcUH2kDUYcqDBg&oe=6831E74A" />
            <FacebookInStreamVideo
                title="Better Home"
                imageUrl="https://scontent.fblr1-6.fna.fbcdn.net/v/t45.1600-4/459129430_120211605965250647_9072147744175465530_n.jpg?stp=cp0_dst-jpg_q75_s480x480_spS444_tt6&_nc_cat=102&ccb=1-7&_nc_sid=c02adf&_nc_ohc=TqJ9Yq27gqYQ7kNvwEkOpse&_nc_oc=AdkDpA9KtmxlHuy1ml5VbxrlTW6WSEBDH4X68xFsFFGBEYJa-en5E_FWmKjklgUwG3U&_nc_zt=1&_nc_ht=scontent.fblr1-6.fna&_nc_gid=r2Kp2nHyj_NWXiPpjVgAtg&oh=00_AfK3LKJreyC1_4EQcVaB6l83-PwMHb5hbbDsNRMQHaSfkQ&oe=6833008A"
                sideImageUrl="https://scontent.fblr1-6.fna.fbcdn.net/v/t45.1600-4/459597814_120211605965220647_5018815817225299628_n.jpg?stp=cp0_dst-jpg_q75_s480x480_spS444_tt6&_nc_cat=102&ccb=1-7&_nc_sid=c02adf&_nc_ohc=x6tLKDbUpVUQ7kNvwGudTsR&_nc_oc=Adnf86GvEaArsnaymjcaT9AX5Dp4cROZgCFXkAKYgKhs2ntQKfAbnA5uhP2CxfJRiEM&_nc_zt=1&_nc_ht=scontent.fblr1-6.fna&_nc_gid=r2Kp2nHyj_NWXiPpjVgAtg&oh=00_AfLUmhpjdDj5qGmdwXx54K943MDnnGglMvoyS6sajvF3Zg&oe=683309EB"
            />
        </>
    );
};

export default Campaigns;
