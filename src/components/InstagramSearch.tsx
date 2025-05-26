import Title from "antd/es/skeleton/Title";
import "../styles/components/InstagramSearch.css";
import { Carousel } from 'antd';

interface InstagramSearchProps {
    imageUrlList: string[];
    title: string;
    description: string;
}

/*
<InstagramSearch
    imageUrlList={["https://scontent.fblr1-6.fna.fbcdn.net/v/t45.1600-4/459129430_120211605965250647_9072147744175465530_n.jpg?stp=cp0_dst-jpg_q75_s480x480_spS444_tt6&_nc_cat=102&ccb=1-7&_nc_sid=c02adf&_nc_ohc=TqJ9Yq27gqYQ7kNvwEkOpse&_nc_oc=AdkDpA9KtmxlHuy1ml5VbxrlTW6WSEBDH4X68xFsFFGBEYJa-en5E_FWmKjklgUwG3U&_nc_zt=1&_nc_ht=scontent.fblr1-6.fna&_nc_gid=r2Kp2nHyj_NWXiPpjVgAtg&oh=00_AfK3LKJreyC1_4EQcVaB6l83-PwMHb5hbbDsNRMQHaSfkQ&oe=6833008A", "https://scontent.fblr1-6.fna.fbcdn.net/v/t45.1600-4/459129430_120211605965250647_9072147744175465530_n.jpg?stp=cp0_dst-jpg_q75_s480x480_spS444_tt6&_nc_cat=102&ccb=1-7&_nc_sid=c02adf&_nc_ohc=TqJ9Yq27gqYQ7kNvwEkOpse&_nc_oc=AdkDpA9KtmxlHuy1ml5VbxrlTW6WSEBDH4X68xFsFFGBEYJa-en5E_FWmKjklgUwG3U&_nc_zt=1&_nc_ht=scontent.fblr1-6.fna&_nc_gid=r2Kp2nHyj_NWXiPpjVgAtg&oh=00_AfK3LKJreyC1_4EQcVaB6l83-PwMHb5hbbDsNRMQHaSfkQ&oe=6833008A"]}
    title="Better"
    description="Repairing your roof can help you save a lot of money in the long run!... more" />
*/

const InstagramSearch = ({ title, imageUrlList, description }: InstagramSearchProps) => {
    return (
        <div className="instagramSearchContainer">
            <div className="headerInstagramSearch">
                <div>
                    <i className="backArrowInstagramSearch"></i>
                </div>
                <div className="headerTitleContainerInstagramSearch">
                    <span className="headerTitleInstagramSearch">{'[search term]'}</span>
                </div>
            </div>
            <Carousel arrows={true} dots={{ className: 'custom-dots' }}>
                {imageUrlList.map((url, index) => (
                    <img
                        key={index}
                        src={url}
                        alt={`Instagram image ${index + 1}`}
                        style={{ width: '200px', height: '200px', objectFit: 'cover', margin: '8px' }}
                    />
                ))}
            </Carousel>
            <div className="footerInstagramSearch">
                <div className="columnHeadlineContainerInstagramSearch">
                    <div className="headlineContainerInstagramSearch">
                        <div className="headlineImageContainerInstagramSearch">
                            <img className="headlineImageInstagramSearch" src="https://scontent.fblr1-5.fna.fbcdn.net/v/t39.30808-1/459894076_122093043854539676_131138458506691267_n.png?stp=dst-png_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=029d72&_nc_ohc=xWhMous_gtoQ7kNvwFpJYH-&_nc_oc=AdlxG0Fjp0VYY0kwgNXwK--VGARN4GTU-RK4MOHRFu46VHcLQ-cHx0sHspGFqgbUnHY&_nc_zt=24&_nc_ht=scontent.fblr1-5.fna&_nc_gid=r2Kp2nHyj_NWXiPpjVgAtg&oh=00_AfLJf4ehMJygGSIrYBEKXfxFkO21JdbiCWf_T3bvVY5FUQ&oe=6832FFDC" />
                        </div>
                        <div className="headlineTitleContainerInstagramSearch">
                            <div className="headlineTitleInstagramSearch">{title}</div>
                            <div className="sponsoredTitleInstagramSearch">Sponsored</div>
                        </div>
                    </div>
                    <div className="learnMoreContainer">
                        <div className="learnMoreFlex">
                            <div className="learnMoreTitle">Learn more</div>
                            <div className="sideArrowLearnMore"></div>
                        </div>
                    </div>
                    <div className="learnMoreDescriptionInstagramSearch">{description}</div>
                </div>

                <div className="iconOptionContainerInstagramSearch">
                    <div><i className="loveIconInstagramSearch"></i></div>
                    <div><i className="chatIconInstagramSearch"></i></div>
                    <div><i className="forwardIconInstagramSearch"></i></div>
                    <div><i className="dotsIconInstagramSearch"></i></div>
                </div>
            </div>
        </div>
    );
};

export default InstagramSearch;
