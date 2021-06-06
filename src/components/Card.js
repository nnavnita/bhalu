import React from 'react';
import { IconButton, Icon, Panel, PanelGroup } from 'rsuite';

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
        cardData = <PanelGroup accordion bordered>
        <Panel defaultExpanded style={{backgroundColor: '#272A2D'}} header="Total Rent" collapsible bordered>
        <table>
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
        </Panel>
        </PanelGroup>;
    } else {
        cardData = <small>{props.text}</small>;
    }

    const heading = 'LISTING ' + props.cardIndex;

    return(<Panel className='card' shaded bordered bodyFill style={{ display: 'inline-block' }}>
        <img alt="" src="https://illlustrations.co/static/f694d61c3ee4e05404856ac0def3fded/day31-sweet-home.png" style={{ width: '16rem', height: '14rem'}} />
        <div className="btn_ops">
            <IconButton appearance="link" circle size='lg' style={{color: 'yellow'}} icon={<Icon icon="star" />} />
            <IconButton appearance="link" circle size='lg' style={{color: 'red'}} icon={<Icon icon="trash" />} />
        </div>
        <Panel header={heading}>{cardData}</Panel>
    </Panel>);
}

export default Card;