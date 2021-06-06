import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../utils/SectionProps";
import SectionHeader from "./sections/partials/SectionHeader";

import Image from "./elements/Image";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const AboutUs = ({
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
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <h3>Meet the Founders</h3>
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Founder / Full stack Engineer
                </div>
                <h3 className="mt-0 mb-12">Mohammed Sharukh Syed</h3>
                <p className="m-0">
                  I was trying to find rental property and found the whole
                  process frustrating to keep track of properties, so I called up
                  friends (other bhalu founders) to build bhalu over the weekend!
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("../assets/images/founders/sharukh.jpeg")}
                  alt="Features split 01"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Co-Founder / Full stack Engineer
                </div>
                <h3 className="mt-0 mb-12">Navnita Nandakumar</h3>
                <p className="m-0">
                  I've moved apartments quite a bit over the past few years and know what a pain it is to compare listings and do all the math to find the right place. When Sharukh reached out to me with his idea for bhalu, I just knew I had to be a part of it! 
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("../assets/images/founders/navnita.jpeg")}
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Co-Founder / Market Research
                </div>
                <h3 className="mt-0 mb-12">Harsheen Kapur</h3>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  — Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("../assets/images/founders/nikki.jpeg")}
                  alt="Features split 03"
                  width={528}
                  height={396}
                />
              </div>
            </div>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Co-Founder / Product Owner
                </div>
                <h3 className="mt-0 mb-12">Sarthak Sabarwal</h3>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  — Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("../assets/images/founders/sarthak.jpeg")}
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutUs.propTypes = propTypes;
AboutUs.defaultProps = defaultProps;

export default AboutUs;
