import React, { Component } from 'react';
import Chart from "react-apexcharts";

class Donut extends Component {

  constructor(props) {
    super(props);

    let thisuser = [];
    for (let i = 1; i <= props.data.total; i++) {
      thisuser.push(i);
    }

    this.state = {
      options: {},
      series: thisuser,
      labels: []
    }
  }

  render() {

    return (
     <div className='m-20'>
        <div className="donut">
          <Chart options={this.state.options} series={this.state.series} type="donut" width="400" />
        </div>
     </div>
    );
  }
}

export default Donut;