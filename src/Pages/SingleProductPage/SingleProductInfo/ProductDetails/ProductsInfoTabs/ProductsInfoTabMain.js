import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import { styled } from "@mui/system";
import React from "react";
import Additionalnfo from "./ExtraInfo/Additionalnfo";
import Description from "./ExtraInfo/Description";
import RatingsAndReviews from "./ExtraInfo/RatingsAndReviews";

const ProductsInfoTabMain = ({ extraInfo }) => {
  const Tab = styled(TabUnstyled)`
    font-family: poppins;
    color: #a749ff;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: bold;
    background-color: transparent;
    width: 100%;
    padding: 12px 16px;
    margin: 6px 6px;
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;

    &:hover {
      background-color: #fff;
    }

    &:focus {
      color: #a749ff;
      border-radius: 3px;
      background-color: #a749ff;
    }

    &.${tabUnstyledClasses.selected} {
      background-color: #a749ff;
      color: #fff;
    }

    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

  const TabPanel = styled(TabPanelUnstyled)`
    width: 100%;
    font-family: Poppins;
    font-size: 0.875rem;
  `;

  const TabsList = styled(TabsListUnstyled)`
    min-width: 100%;
    background-color: #fff;
    box-shadow: 1px 0px 4px 1px #c4b7d1;
    border-radius: 8px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
  `;

  const { sizes, ratingsandreviews } = extraInfo;

  return (
    <div style={{ width: "100%", marginTop: "20px" }}>
      <TabsUnstyled defaultValue={0}>
        <TabsList>
          <Tab>Description</Tab>
          <Tab>Additional Information</Tab>
          <Tab>Review</Tab>
        </TabsList>

        <TabPanel value={0}>
          <Description />
        </TabPanel>
        <TabPanel value={1}>
          <Additionalnfo sizes={sizes} />
        </TabPanel>
        <TabPanel value={2}>
          <RatingsAndReviews ratingsandreviews={ratingsandreviews} />
        </TabPanel>
      </TabsUnstyled>
    </div>
  );
};

export default ProductsInfoTabMain;
