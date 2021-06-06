import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../utils/SectionProps";
import SectionHeader from "./sections/partials/SectionHeader";
import "../App.css";
import "rsuite/dist/styles/rsuite-dark.css";

import Screen from "../components/Screen";
import Image from "./elements/Image";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const Analyzer = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );
  const aboutUsContent =
    "Finding a property to buy, lease or rent could be really frustrating as there are many options available and further more" +
    "many other factors to be taken into consideration. And keeping track of all these things can be really painful. Bhalu the AI assistan was built" +
    "with vision to enable users with data insights and predictions to make better decisions";

  const sectionHeader = {
    title: "Driven by real problem",
    paragraph: aboutUsContent,
  };

  return (
    <div className="screen dark">
      {/* <div className="theme_toggle">
      <Toggle size="lg" defaultChecked unCheckedChildren={<Icon icon="sun-o" size="2x" />} checkedChildren={<Icon icon="moon-o" size="2x" />} />
    </div> */}
      <Screen />;
    </div>
  );
};

Analyzer.propTypes = propTypes;
Analyzer.defaultProps = defaultProps;

export default Analyzer;
