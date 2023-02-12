import React from 'react'
import './App.css'
import { Bar  } from 'react-chartjs-2';
import {Chart as chartjs} from 'chart.js/auto'

function Chart(data) {
    const Labels = data.data.map(emp => emp.sub);
    const dataVal = data.data.map(val => val.sem);
    const ChartData = {
        labels: Labels,
        datasets: [
            {
                label: "Emp Performance",
                backgroundColor: 'skyBlue',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 1,
                data: dataVal
            }
        ]
    }
  return (
    <div className="App">
      <div
        style={{
          width: "50%",
          height: "400px",
          display: "inline-flex",
          backgroundColor: "antiquewhite",
        }}
      >
        <Bar
          options={{
            maintainAspectRatio: false,
            title: {
              display: true,
              text: "Employee Performance Chart",
              fontSize: 25,
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    fontSize: 15,
                    fontColor: "#000",
                  },
                },
              ],
              xAxes: [
                {
                  ticks: {
                    fontSize: 16,
                    fontColor: "#000",
                  },
                },
              ],
            },
          }}
          data={ChartData}
        ></Bar>
      </div>
    </div>
  );
}

export default Chart