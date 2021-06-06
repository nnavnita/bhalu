import React from 'react';
import { IconButton, Icon, Panel, PanelGroup } from 'rsuite';

import './styles/Card.scss';

const Card = (props) => {
    // const rentData = [
    //     { 'label': 'per day', 'value': 'per day'},
    //     { 'label': 'per week', 'value': 'per week'},
    //     { 'label': 'per fortnight', 'value': 'per fortnight'},
    //     { 'label': 'per month', 'value': 'per month'},
    //     { 'label': 'per year', 'value': 'per year'}
    // ];
    const cardData = <PanelGroup accordion bordered>
    <Panel defaultExpanded style={{backgroundColor: '#272A2D'}} header="Total Rent" collapsible bordered>
    <table><tbody>
    <tr>
        <th>Per day: </th>
        <td>${props.data.totalRent.daily}</td></tr>
    <tr>
        <th>Per week: </th>
        <td>${props.data.totalRent.weekly}</td></tr>
    <tr>
        <th>Per fortnight: </th>
        <td>${props.data.totalRent.fortnightly}</td></tr>
    <tr>
        <th>Per month: </th>
        <td>${props.data.totalRent.monthly}</td></tr>
    <tr>
        <th>Per year: </th>
        <td>${props.data.totalRent.yearly}</td></tr>
    </tbody></table>
    </Panel>
    <Panel defaultExpanded style={{backgroundColor: '#272A2D'}} header="Per Tenant" collapsible bordered>
    <table><tbody>
    <tr>
        <th>Per day: </th>
        <td>${props.data.perTenant.daily}</td></tr>
    <tr>
        <th>Per week: </th>
        <td>${props.data.perTenant.weekly}</td></tr>
    <tr>
        <th>Per fortnight: </th>
        <td>${props.data.perTenant.fortnightly}</td></tr>
    <tr>
        <th>Per month: </th>
        <td>${props.data.perTenant.monthly}</td></tr>
    <tr>
        <th>Per year: </th>
        <td>${props.data.perTenant.yearly}</td></tr>
    </tbody></table>
    </Panel>
    </PanelGroup>;
    let options = { year: 'numeric', month: 'short', day: 'numeric' };
    const heading = <div className='heading'>
        <span className='listing_name'>
            Listing {props.cardIndex} <br />
            <span className='aux_info'>
                <Icon icon="bed"  /> {props.input['bed']} <Icon icon="shower"  /> {props.input['bath']} <Icon icon="car"  /> {props.input['car']}
            </span>
        </span>
        <span className='aux_info'>
            <Icon icon="calendar-o"  /> {props.input['available_date'].toLocaleDateString("en-US", options)}
        </span></div>;

    return(<Panel className='card' shaded bordered bodyFill style={{ display: 'inline-block' }}>
        <img alt="" src="https://illlustrations.co/static/f694d61c3ee4e05404856ac0def3fded/day31-sweet-home.png" style={{ width: '16rem', height: '14rem'}} />
        <div className="btn_ops">
            <IconButton appearance="link" circle style={{color: 'yellow'}} icon={<Icon icon="star" />} />
            <IconButton appearance="link" circle style={{color: 'red'}} icon={<Icon icon="trash" />} />
        </div>
        <Panel header={heading}>{cardData}</Panel>
    </Panel>);
}

export default Card;