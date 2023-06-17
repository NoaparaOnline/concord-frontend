import React from 'react';
import {Line} from 'react-chartjs-2';

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May','June','July'],
  datasets: [
    {
      
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: '#22A6AC',
      borderWidth: 2,
      data: [28, 20, 50, 15, 35, 18,26]
    }
  ]
}
const options={
    plugins: {
        
        legend: {
            display: false,
        },
    }
};

export default class DashCharts extends React.Component {
  render() {
    return (
      <div>
        <h5 className="text-center" style={{fontSize:"20px",color:"grey",fontWeight:'600'}}>{this.props.heading}</h5>
        <Line
          data={state}
          options={options}
          
        />
      </div>
    );
  }
}
