import "./App.css";
import "rsuite/dist/styles/rsuite-dark.css";

import Screen from "./components/Screen";
import { Icon, Toggle } from 'rsuite';

function App() {
  return(<div className='screen dark'>
    {/* <div className="theme_toggle">
      <Toggle size="lg" defaultChecked unCheckedChildren={<Icon icon="sun-o" size="2x" />} checkedChildren={<Icon icon="moon-o" size="2x" />} />
    </div> */}
    <Screen />;
  </div>);
}

export default App;
