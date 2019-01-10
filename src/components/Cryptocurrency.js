import React, { Component } from 'react'
import styled from 'styled-components'

const TickerItem = styled.div`
    flex:1;
    text-align:center;
    padding: 10px;
    margin:10px;
    background:#eee;
`;

export default class Cryptocurrency extends Component {
  render() {
    var {
        id,
        name,
        symbol,
        price_usd,
        percent_change_1h,
        percent_change_24h,
        percent_change_7d,
    } = this.props.data;
    // This is using a technique called object destructuring to assign 7 new variables the values inside this.props.data.

    return (
      <TickerItem>
            <p>{name} ({symbol})</p>
            <h1>${ (+price_usd).toFixed(2) }</h1>
            <p>{percent_change_1h}% 1hr</p>
            <p>{percent_change_24h}% 24hrs</p>
            <p>{percent_change_7d}% 7days</p>
      </TickerItem>
    )
  }
}
