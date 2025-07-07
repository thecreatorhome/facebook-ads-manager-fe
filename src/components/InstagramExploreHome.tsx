import "../styles/components/InstagramExploreHome.css"

interface InstagramExploreHomeProps {
    imageUrl: string;
}


const InstagramExploreHome = ({ imageUrl }: InstagramExploreHomeProps) => {
    return (
        <div className="InstagramExploreHomeContainer">
            <div className="boxContainer">
                <div className="VerticleFlex">
                    <div className="InstagramExploreHomeTopBox" />
                    <div className="InstagramExploreHomeMiddleBox" />
                </div>
                <div className="VerticleFlex">
                    <div className="InstagramExploreHomeTopBox marginBottom2" />
                    <div className="InstagramExploreHomeMiddleBox marginBottom2" />
                </div>
                <div className="VerticleFlex">
                    <div className="InstagramExploreHomeTopBox marginBottom2" />
                    <div className="InstagramExploreHomeMiddleBox marginBottom2" />
                </div>
                <div className="VerticleFlex">
                    <div className="InstagramExploreHomeMiddleBox marginBottom2" />
                    <div className="InstagramExploreHomeMiddleBox marginBottom2" />
                </div>
                <div className="VerticleFlex image">
                    <div className="InstagramExploreHomeMiddleBox marginBottom2 backgroundImage" style={{
                        backgroundImage: `url(${imageUrl})`
                    }}>
                        <div className="shadeTitleInstagramHome">
                            <div className="sponsoredInstagramHomeFlex">
                                <div className="sponsoredInstagramHome">Sponsored</div>
                            </div>
                        </div>

                    </div>
                    <div className="InstagramExploreHomeMiddleBox marginBottom2" />
                </div>
                <div className="VerticleFlex">
                    <div className="InstagramExploreHomeMiddleBox marginBottom2" />
                    <div className="InstagramExploreHomeMiddleBox marginBottom2" />
                </div>
                <div className="VerticleFlex">
                    <div className="InstagramExploreHomeMiddleBox" />
                    <div className="InstagramExploreHomeTopBox" />
                </div>
                <div className="VerticleFlex">
                    <div className="InstagramExploreHomeMiddleBox marginBottom2" />
                    <div className="InstagramExploreHomeTopBox" />
                </div>
                <div className="VerticleFlex">
                    <div className="InstagramExploreHomeMiddleBox marginBottom2" />
                    <div className="InstagramExploreHomeTopBox" />
                </div>
            </div>

        </div>
    )
}

export default InstagramExploreHome;