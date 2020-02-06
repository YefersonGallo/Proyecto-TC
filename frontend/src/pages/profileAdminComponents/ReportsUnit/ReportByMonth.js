import React, { Component } from 'react'
import Chart from "react-apexcharts"
import axios from 'axios'

export default class Reports extends Component {

    getMonths(report){
        var months = []  
        for (let index = 0; index < report.length; index++) {
            const element = report[index];
            months.push(element[0])
        }
        return months
    }

    getValues(report){
        var values = []  
        for (let index = 0; index < report.length; index++) {
            const element = report[index];
            values.push(element[1])
        }
        return values
    }

    async componentDidMount(){
        const reportMonths = await axios.get('https://backend-sic-gym-uptc.herokuapp.com/api/reports/month')
        this.setState({
            options: {
                chart: {
                  id: "basic-bar"
                },
                xaxis: {
                  categories: this.getMonths(reportMonths.data)
                }
              },
              series: [
                {
                  name: "Mes",
                  data: this.getValues(reportMonths.data)
                }
              ]
        })
        
    }

    constructor(props) {
        super(props);
        this.state = {
          options: {
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
            }
          },
          series: [
            {
              name: "Gimnasio",
              data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
          ]
        };
      }
    render() {
        return (
            <div>
                <h1>Entrada por mes</h1>
                <div>
                    <div className="row">
                        <div className="mixed-chart">
                            <Chart
                                options={this.state.options}
                                series={this.state.series}
                                xaxis={this.state.xaxis}
                                type="bar"
                                width="500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}