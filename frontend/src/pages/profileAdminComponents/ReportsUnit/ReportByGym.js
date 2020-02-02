import React, { Component } from 'react'
import Chart from "react-apexcharts"
import axios from 'axios'

export default class Reports extends Component {

    getGyms(report){
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
        const reportMonths = await axios.get('http://backend-sic-gym-uptc.herokuapp.com/api/reports/gym')
        console.log(reportMonths.data)
        this.setState({
            options: {
                chart: {
                  id: "basic-bar"
                },
                xaxis: {
                  categories: this.getGyms(reportMonths.data)
                }
              },
              series: [
                {
                  name: "Gimnasio",
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
                <h1>Entrada a cada gimnasio</h1>
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