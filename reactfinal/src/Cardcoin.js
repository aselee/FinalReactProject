import React, { Component } from 'react';
import Card from 'material-ui/Card';
import axios from 'axios';
var NumberFormat = require('react-number-format');



export default class CryptoContain extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cryptos: []
    };
  }
  componentDidMount() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,XRP,XLM,TRX,ICX,DOGE&tsyms=USD')
      .then(res => {
        const cryptos = res.data;
        this.setState({cryptos: cryptos})
      })
  }


  render() {
    const CardExampleExpandable = () => (
      <Card zDepth={1}>
        {Object.keys(this.state.cryptos).map((key) => (
          <div id="crypto-container">
            <span className="left">{key} </span>
            <span className="right">
              <NumberFormat value={this.state.cryptos[key].USD}
                displayType={'text'}
                decimalPrecision={2}
                thousandSeparator={true}
                prefix={'$'} /></span>
          </div>
          ))};
			</Card>
		);
		return CardExampleExpandable();
	}
}
