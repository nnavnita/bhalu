import React from "react";
import ListContainer from "./ListContainer";
import { Icon, Toggle } from 'rsuite';

import './styles/Screen.scss';
import "rsuite/dist/styles/rsuite-dark.css";

const Screen = () => {
  const handleChange = (value) => {
    if  (value) {
      console.log('dark');
    } else {
      console.log('light');
    }
  }

  return (
    <div className="screen">
      <div className="theme_toggle">
        <Toggle size="lg" defaultChecked onChange={handleChange.bind(this)} unCheckedChildren={<Icon icon="sun-o" size="2x" />} checkedChildren={<Icon icon="moon-o" size="2x" />} />
      </div>
      <ListContainer />
    </div>
  );
};

export default Screen;
