import "../styles/components/InstagramStories.css";
import { LinkClip } from "../assets/LinkClip";
import StoryProgress from "./StoryProgress";

interface InstagramStoriesProps {
    imageUrl: string;
    description: string;
}

/*
<InstagramStories 
    imageUrl="https://www.facebook.com/ads/image/?d=AQIgwWaK-ouHhRj5sSn6gSdPPXUrC7qggdKVxm_NOul_J3GP3H4zLMYdIEzDKlDcnVye5ekU-tjIAoBmbs_JxLzEQkfP_KtUOfLM4VKiTjhXaUnkRtvs7AUwrU7XiSfbyC3AhcMHdf6pVtNAXaWgTsFo" 
    description="Repairing your roof can help you save a lot of money in the long ru...More"/>
);
*/
const InstagramStories = ({ imageUrl, description }: InstagramStoriesProps) => {
    return (
        <div className="InstagramContainer">
            <div className="StoryBreadCrumb">
                <StoryProgress />
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
