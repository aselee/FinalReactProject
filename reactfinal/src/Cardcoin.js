import React, { Component } from 'react';
import Card, {CardHeader} from 'material-ui/Card';
import axios from 'axios';
import avatar from './bitcoinIcon.jpg';
var NumberFormat = require('react-number-format');


export default class CryptoContain extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cryptos: []
    };
  }
  componentDidMount() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,XRP,XLM,TRX,ICX,DOGE,XMR&tsyms=USD')
      .then(res => {
        const cryptos = res.data;
        this.setState({cryptos: cryptos})
      })
  }


  render() {
    const CardExampleExpandable = () => (
      <Card>
        {Object.keys(this.state.cryptos).map((key) => (
        <Card zDepth={5}>
            <span className="left">{key} </span>
            <span className="right">
              <NumberFormat value={this.state.cryptos[key].USD}
                displayType={'text'}
                decimalPrecision={2}
                thousandSeparator={true}
                prefix={'$'} /></span>
          <CardHeader
            avatar={avatar}/>
        </Card>
          ))};
			</Card>
		);
		return CardExampleExpandable();
	}
}
/*testing*/
