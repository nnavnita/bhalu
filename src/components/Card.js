import React from 'react';
import { Panel } from 'rsuite';

import './styles/Card.scss';

const Card = (props) => {
    return( props.text ? <div className="card">
         <Panel shaded bordered bodyFill style={{ display: 'inline-block' }}>
            <img alt="" src="https://via.placeholder.com/150x150" />
            <Panel header="LISTING">
            <p><small>{props.text}</small></p>
            </Panel>
        </Panel>
    </div> : <div className = "card" />);
}

export default Card;