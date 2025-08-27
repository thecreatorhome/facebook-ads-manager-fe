import "../styles/components/AdCreativeDropDown.css";
import { Button, Dropdown, Menu, MenuProps } from "antd";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import UploadCreativeModal from "../components/UploadCreativeModal";

const AdCreativeDropDown = () => {
  const buyingTypeDropDown = [
    {
      key: uuidv4(),
      label: "Set up creative",
      description: "",
    },
    {
      key: uuidv4(),
      label: (
        <>
          <i className="imageCreative" /> Image ad
        </>
      ),
      description: "",
    },
    // {
    //   key: uuidv4(),
    //   label: (
    //     <>
    //       <i className="videoCreative" /> Video ad (Coming Soon)
    //     </>
    //   ),
    //   description: ""
    // },
  ];

  const [selectedLabel, setSelectedLabel] = useState(
    buyingTypeDropDown[0].label
  ); // Default: first option

  const [isAdCreativeUploaderVisible, setAdCreativeUploaderVisible] =
    useState(false);

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    const selectedItem = buyingTypeDropDown.find((item) => item.key === e.key);
    if (selectedItem) {
      setSelectedLabel(selectedItem.label);
      setAdCreativeUploaderVisible(true);
    }
  };

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={buyingTypeDropDown}
      className="adCreative"
    />
  );

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Dropdown
        overlay={menu}
        trigger={["click"]}
        className="adCreativeTypeOptionDropDown"
        getPopupContainer={(triggerNode) =>
          triggerNode.parentElement as HTMLElement
        }
      >
        <Button>
          {selectedLabel}
          <div className="dropDownIcon" />
        </Button>
      </Dropdown>
      
      <UploadCreativeModal
        isAdCreativeUploaderVisible={isAdCreativeUploaderVisible}
        setAdCreativeUploaderVisible={setAdCreativeUploaderVisible}
      />
    </div>
  );
};

export default AdCreativeDropDown;
