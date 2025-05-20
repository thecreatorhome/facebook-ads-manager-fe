import "../styles/components/FacebookStories.css";
import StoryProgress from "./StoryProgress";

interface FacebookStoriesProps {
    imageUrl: string;
    description: string;
}

/*
<FacebookStories 
imageUrl="https://www.facebook.com/ads/image/?d=AQIgwWaK-ouHhRj5sSn6gSdPPXUrC7qggdKVxm_NOul_J3GP3H4zLMYdIEzDKlDcnVye5ekU-tjIAoBmbs_JxLzEQkfP_KtUOfLM4VKiTjhXaUnkRtvs7AUwrU7XiSfbyC3AhcMHdf6pVtNAXaWgTsFo" 
description="Repairing your roof can help you save a lot of money in the long ru...More"/>
*/
const FacebookStories = ({ imageUrl, description }: FacebookStoriesProps) => {
    return (
        <div className="FacebookContainer">
            <div className="StoryBreadCrumb">
                <StoryProgress />
            </div>
            <div>
                <div className="FacebookImageContainer">
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
