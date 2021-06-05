import React from "react";
import ListContainer from "./ListContainer";
import { Icon, Toggle } from 'rsuite';

import './styles/Screen.scss';

const Screen = () => {
  return (
    <div className='screen dark'>
        <div className="theme_toggle">
          <Toggle size="lg" defaultChecked unCheckedChildren={<Icon icon="sun-o" size="2x" />} checkedChildren={<Icon icon="moon-o" size="2x" />} />
        </div>
        <ListContainer />
    </div>
  );
};

export default Screen;
