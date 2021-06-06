import React from 'react';
import { Panel } from 'rsuite';

import './styles/Card.scss';

const Card = (props) => {
    let cardData;
    if (props.data) {
        // const rentData = [
        //     { 'label': 'per day', 'value': 'per day'},
        //     { 'label': 'per week', 'value': 'per week'},
        //     { 'label': 'per fortnight', 'value': 'per fortnight'},
        //     { 'label': 'per month', 'value': 'per month'},
        //     { 'label': 'per year', 'value': 'per year'}
        // ];
        cardData = <div className='rent_details'>
        <table>
            <caption>Total Rent</caption>
        <tr>
           <th>Per day: </th>
           <td>${props.data.daily}</td></tr>
        <tr>
            <th>Per week: </th>
            <td>${props.data.weekly}</td></tr>
        <tr>
            <th>Per fortnight: </th>
            <td>${props.data.fortnightly}</td></tr>
        <tr>
            <th>Per month: </th>
            <td>${props.data.monthly}</td></tr>
        <tr>
            <th>Per year: </th>
            <td>${props.data.yearly}</td></tr>
        </table>
        </div>;
    } else {
        cardData = <small>{props.text}</small>;
    }

    const heading = 'LISTING ' + props.cardIndex;

    return( <div className="card">
         <Panel shaded bordered bodyFill style={{ display: 'inline-block' }}>
         <img alt="" src="https://illlustrations.co/static/f694d61c3ee4e05404856ac0def3fded/day31-sweet-home.png" style={{ width: '16rem', height: '14rem'}} />
            <Panel header={heading}>{cardData}</Panel>
        </Panel>
    </div>);
}

export default Card;