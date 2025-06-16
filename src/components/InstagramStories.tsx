import "../styles/components/InstagramStories.css";
import { LinkClip } from "../assets/LinkClip";
import StoryProgress from "./StoryProgress";

interface InstagramStoriesProps {
    imageUrl: string;
    description: string;
    title: string;
    headerImgUrl: string;
}

/*
<InstagramStories 
    imageUrl="https://www.facebook.com/ads/image/?d=AQIgwWaK-ouHhRj5sSn6gSdPPXUrC7qggdKVxm_NOul_J3GP3H4zLMYdIEzDKlDcnVye5ekU-tjIAoBmbs_JxLzEQkfP_KtUOfLM4VKiTjhXaUnkRtvs7AUwrU7XiSfbyC3AhcMHdf6pVtNAXaWgTsFo" 
    description="Repairing your roof can help you save a lot of money in the long ru...More"/>
);
*/
const InstagramStories = ({ imageUrl, description, title, headerImgUrl }: InstagramStoriesProps) => {
    return (
        <div className="InstagramContainer">
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
            <div className="LearnMore">
                <div className="LinkClip"><LinkClip /></div>
                Learn more
            </div>
            <div>
                <div className="InstagramImageContainer">
                    <img className="InstagramImage" id="instagram_story_preview_media" src={imageUrl} />
                </div>
                <div className="InstagramDescription"><span>{description}</span></div>
            </div>
        </div>
    );
};

export default InstagramStories;
