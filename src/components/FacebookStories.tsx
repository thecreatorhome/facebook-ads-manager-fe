import "../styles/components/FacebookStories.css";
import StoryProgress from "./StoryProgress";

interface FacebookStoriesProps {
    imageUrl: string;
    description: string;
    title: string;
    headerImgUrl: string;
}

/*
<FacebookStories 
imageUrl="https://www.facebook.com/ads/image/?d=AQIgwWaK-ouHhRj5sSn6gSdPPXUrC7qggdKVxm_NOul_J3GP3H4zLMYdIEzDKlDcnVye5ekU-tjIAoBmbs_JxLzEQkfP_KtUOfLM4VKiTjhXaUnkRtvs7AUwrU7XiSfbyC3AhcMHdf6pVtNAXaWgTsFo" 
description="Repairing your roof can help you save a lot of money in the long ru...More"/>
*/
const FacebookStories = ({ imageUrl, description, title, headerImgUrl }: FacebookStoriesProps) => {
    return (
        <div className="FacebookContainer">
            <div className="StoryBreadCrumb">
                <StoryProgress />
            </div>
            <div className="headlineContainerInstagramSearch height20">
                <div className="headlineImageContainerInstagramSearch">
                    <img className="headlineImageInstagramSearch" src={headerImgUrl} />
                </div>
                <div className="headlineTitleContainerInstagramSearch">
                    <div className="headlineTitleInstagramSearch">
                        {title}
                    </div>
                    <div className="headlineTitleInstagramSearch sponsoredClass">
                        Sponsored
                    </div>
                </div>
                <div className="controllerFBReel">
                    <div className="inlineJustifiedFlex">
                        <div><i className="optionController"></i></div>
                        <div><i className="crossController"></i></div>
                    </div>
                </div>
            </div>
            <div>
                <div className="FacebookImageContainer marginTop10">
                    <img className="FacebookImage" src={imageUrl} />
                </div>
                <div className="FacebookDescription"><span>{description}</span></div>
            </div>
            <div className="upArrowFacebook"></div>
            <div className="FacebookLearnMore">
                <div className="FacebookLinkClip"></div>
                Learn more
            </div>
        </div>
    );
};

export default FacebookStories;
