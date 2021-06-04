import React, { useState } from "react";
import ListContainer from "./ListContainer";
import { Icon, Toggle } from 'rsuite';

import './styles/Screen.scss';

const Screen = () => {
  const [theme, setTheme] = useState('screen dark');

  const getTheme = () => {
    return theme;
  }

  const handleChange = (value) => {
    if  (value) {
      setTheme('screen dark');
      import('./themes/DarkTheme');
    } else {
      setTheme('screen light');
      import('./themes/LightTheme');
    }
  }

//create components using React.lazy
const LightTheme = React.lazy(() => import('./themes/LightTheme'));
const DarkTheme = React.lazy(() => import('./themes/DarkTheme'));

//create a parent component that will load the components conditionally using React.Suspense
const ThemeSelector = ({ children }) => {
  const CHOSEN_THEME = getTheme() || 'screen dark';
  return (
    <>
      <React.Suspense fallback={<></>}>
        {(CHOSEN_THEME === 'screen light') && <LightTheme />}
        {(CHOSEN_THEME === 'screen dark') && <DarkTheme />}
      </React.Suspense>
      {children}
    </>
  )
}

  return (
    <div className={getTheme()}>
      <ThemeSelector>
        <div className="theme_toggle">
          <Toggle size="lg" defaultChecked onChange={handleChange.bind(this)} unCheckedChildren={<Icon icon="sun-o" size="2x" />} checkedChildren={<Icon icon="moon-o" size="2x" />} />
        </div>
        <ListContainer />
      </ThemeSelector>
    </div>
  );
};

export default Screen;
