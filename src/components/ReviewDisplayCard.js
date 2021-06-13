import React from "react";
import { IconButton, Icon, Panel } from "rsuite";

const ReviewDisplayCard = ({ title, review }) => {
  return (
    <Panel header={title} bordered>
      {review}
    </Panel>
  );
};

export default ReviewDisplayCard;
