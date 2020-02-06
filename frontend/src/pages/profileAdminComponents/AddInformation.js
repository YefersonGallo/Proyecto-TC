import React, { Component } from 'react'
import EPS from './Info/EPS'
import ARL from './Info/ARL'
import Parent from './Info/Parent'
import Ubication from './Info/Ubications'

export default class AddInformation extends Component {

    render() {
        return (
            <div>
                <h1>Agregar Información</h1>
                <div>
                    <div>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="eps-tab" data-toggle="tab" href="#eps" role="tab" aria-controls="eps" aria-selected="true">EPS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="arl-tab" data-toggle="tab" href="#arl" role="tab" aria-controls="arl" aria-selected="false">ARL</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="parent-tab" data-toggle="tab" href="#parent" role="tab" aria-controls="parent" aria-selected="false">Parentesco</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="ubication-tab" data-toggle="tab" href="#ubication" role="tab" aria-controls="ubication" aria-selected="false">Ubicación</a>
                            </li>
                        </ul>
                        <div className="m-3 tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="eps" role="tabpanel" aria-labelledby="eps-tab">
                                <EPS />
                            </div>
                            <div className="tab-pane fade" id="arl" role="tabpanel" aria-labelledby="arl-tab">
                                <ARL />
                            </div>
                            <div className="tab-pane fade" id="parent" role="tabpanel" aria-labelledby="parent-tab">
                                <Parent />
                            </div>
                            <div className="tab-pane fade" id="ubication" role="tabpanel" aria-labelledby="ubication-tab">
                                <Ubication />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
