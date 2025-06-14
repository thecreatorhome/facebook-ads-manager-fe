import "../styles/components/AvailableFilter.css";
import { Input } from 'antd';

const { Search } = Input;

const onSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const value = (e.target as HTMLInputElement).value;
      console.log('Search value:', value);
      // perform search logic here
    }
  };
const AvailableFilter = () => {
    return (
        <div>
            <div className="availableFilterContainer">
                <div className="leftFilterContainer">
                    <div className="searchFilterBtnContainer">
                        <div className="searchFilterBtn"></div>
                    </div>
                    <div className="dividerAvailableFilter"></div>
                    <div className="filterBtnContainer activeFilterContainer">
                        <div className="allAdsIconFilter activeIconFilter" />
                        <div className="filterTitle activeFilterTitle">All ads</div>
                    </div>
                    <div className="filterBtnContainer">
                        <div className="allActiveAdsIconFilter" />
                        <div className="filterTitle">Active Ads</div>
                    </div>
                    <div className="filterBtnContainer">
                        <div className="allHadDeliveryIconFilter" />
                        <div className="filterTitle">Had delivery</div>
                    </div>
                    <div className="filterBtnContainer seeMoreFilterContainer">
                        <div className="seeMoreIconFilter" />
                        <div className="filterTitle">See More</div>
                    </div>
                </div>
                <div className="rightFilterContainer">
                    <div className="draftBtnContainerGlobal marginLeft8">Create a view</div>
                    <div className="refreshBtnContainerGlobal"><div className="availableFilterSettings"></div></div>
                </div>
            </div>
            <div className="availableCampaignSearchContainer">
                <Search
                    placeholder="Search by name, ID or metrics"
                    allowClear
                    size="middle"
                    onKeyDown={onSearch}
                />
            </div>
            <div className="availableCampaignTabsContainer">
                <div className="tabContainer"><div className="campaignTab" /><div className="tabTitle activeFilterTitle">Campaigns</div></div>
                <div className="tabContainer"><div className="adSetsTab" /><div className="tabTitle">Ad sets</div></div>
                <div className="tabContainer"><div className="adsTab" /><div className="tabTitle">Ads</div></div>
            </div>
        </div>
    );
};

export default AvailableFilter;
