import React from 'react';
import { Panel } from 'rsuite';

import './styles/Card.scss';

const Card = (props) => {
    return( props.text ? <div className="card">
         <Panel shaded bordered bodyFill style={{ display: 'inline-block' }}>
            <img alt="" src="https://illlustrations.co/static/f694d61c3ee4e05404856ac0def3fded/day31-sweet-home.png" style={{ width: '150px', height: '130px'}} />
            <Panel header="LISTING">
            <small>{props.text}</small>
            </Panel>
        </Panel>
    </div> : null);
}

export default Card;