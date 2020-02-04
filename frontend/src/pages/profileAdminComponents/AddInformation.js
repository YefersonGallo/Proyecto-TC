import React, { Component } from 'react'
import EPS from './Info/EPS'
import ARL from './Info/ARL'
import Parent from './Info/Parent'

export default class AddInformation extends Component {

    render() {
        return (
            <div>
                <h1>Reportes</h1>
                <div>
                    <div>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="month-tab" data-toggle="tab" href="#month" role="tab" aria-controls="month" aria-selected="true">EPS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="gym-tab" data-toggle="tab" href="#gym" role="tab" aria-controls="gym" aria-selected="false">ARL</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="gym-tab" data-toggle="tab" href="#gym" role="tab" aria-controls="gym" aria-selected="false">Parentesco</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="month" role="tabpanel" aria-labelledby="month-tab">
                                <EPS />
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