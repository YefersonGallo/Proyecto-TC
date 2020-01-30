import React, { Component } from 'react'
import ReportByMonth from './ReportsUnit/ReportByMonth'
import ReportByGym from './ReportsUnit/ReportByGym'

export default class Reports extends Component {

    render() {
        return (
            <div>
                <h1>Reportes</h1>
                <div>
                    <div>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="month-tab" data-toggle="tab" href="#month" role="tab" aria-controls="month" aria-selected="true">Entrada por Mes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="gym-tab" data-toggle="tab" href="#gym" role="tab" aria-controls="gym" aria-selected="false">Entradas por Gimnasio</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="month" role="tabpanel" aria-labelledby="month-tab">
                                <ReportByMonth />
                            </div>
                            <div className="tab-pane fade" id="gym" role="tabpanel" aria-labelledby="gym-tab">
                                <ReportByGym />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}