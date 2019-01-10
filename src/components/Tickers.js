import React, { Component } from 'react'
import styled from 'styled-components'
import Cryptocurrency from './Cryptocurrency';
import axios from 'axios';

const TickerCont = styled.div` 
`;

const Tickeritems = styled.div` 
max-width: 1168px;
margin:0 auto;
display: flex;
`;

const Footer = styled.div `
    max-width: 1168px;
    text-align:center;
    margin:0 auto;
`

export default class Tickers extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[ 
                {
                    id: "bitcoin",
                    name: "Bitcoin",
                    symbol: "BTC",
                    price_usd: "1",
                    percent_change_1h: "0",
                    percent_change_24h: "0",
                    percent_change_7d: "0",
                },
                {
                    id: "ethereum",
                    name: "Ethereum",
                    symbol: "ETH",
                    price_usd: "1",
                    percent_change_1h: "0",
                    percent_change_24h: "0",
                    percent_change_7d: "0",
                },
                {
                    id: "litecoin",
                    name: "Litecoin",
                    symbol: "LTC",
                    price_usd: "1",
                    percent_change_1h: "0",
                    percent_change_24h: "0",
                    percent_change_7d: "0",
                }
            ]
        }
    }


    // realoadin gdata after 60 sec
    componentDidMount() {
        this.fetchCryptocurrencyData();
        this.interval = setInterval(() => this.fetchCryptocurrencyData(), 60 * 1000);
    }

    // Getting data from the API,
    fetchCryptocurrencyData() {
        axios.get("https://api.coinmarketcap.com/v1/ticker/")
            .then(response => {
                var wanted = ["bitcoin", "ethereum", "litecoin"];
                var result = response.data.filter(currency => wanted.includes(currency.id));
                this.setState({ data: result});
            })
            .catch(err => console.log(err));
    }



  render() {
      let tickers = this.state.data.map((coine) => 
            <Cryptocurrency data= {coine}  key={coine.id}></Cryptocurrency>      
      ) 
    return (
      <TickerCont> 
        <Tickeritems>
            {tickers}
        </Tickeritems>
        <Footer>
          this is based on this tut <a href="https://sabe.io/tutorials/getting-started-with-react">Link</a>
        </Footer>
      </TickerCont>
    )
  }
}
