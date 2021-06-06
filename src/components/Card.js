import React from 'react';
import { Panel } from 'rsuite';

import './styles/Card.scss';

const Card = (props) => {
    let cardData;
    if (props.data) {
        const rentData = [
            { 'label': 'per day', 'value': 'per day'},
            { 'label': 'per week', 'value': 'per week'},
            { 'label': 'per fortnight', 'value': 'per fortnight'},
            { 'label': 'per month', 'value': 'per month'},
            { 'label': 'per year', 'value': 'per year'}
        ];
        cardData = <div className='rent_details'>
        Per day: {props.data.daily}<br />
        Per week: {props.data.base}<br />
        Per fortnight: {props.data.base * 2}<br />
        Per month: {props.data.monthly}<br />
        Per year: {props.data.yearly}<br />
        </div>;
    } else {
        cardData = <small>{props.text}</small>;
    }


    

    return( <div className="card">
         <Panel shaded bordered bodyFill style={{ display: 'inline-block' }}>
            <img alt="" src="https://illlustrations.co/static/f694d61c3ee4e05404856ac0def3fded/day31-sweet-home.png" style={{ width: '150px', height: '130px'}} />
            <Panel header="LISTING">{cardData}</Panel>
        </Panel>
    </div>);
}

export default Card;