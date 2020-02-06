import React, { Component } from 'react'
import axios from 'axios'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import CancelIcon from '@material-ui/icons/Cancel'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'

export default class AceptUsers extends Component {
    state = {
        users: [],
        usersId: []
    }

    getUsersId = async () => {
        const res = await axios.get('https://backend-sic-gym-uptc.herokuapp.com/api/acepteds')
        this.setState({ usersId: res.data })
    }

    async componentDidMount() {
        this.getUsersId()
    }

    getStyle = (number) => {
        switch (number) {
            case 0:
                return "#CCE5FF"
                break;
            case 1:
                return "#D4EDDA"
                break;
            case 2:
                return "#F8D7DA"
                break;
            default:
                return "#FFF3CD"
                break;
        }
    }

    render() {
        return (
            <div className="row">
                {
                    <ExpansionPanel style={{ background: this.getStyle(6) }}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Expansion Panel 1</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <button className="btn btn-info" ><AddCircleOutlineIcon /></button>
                            <button className="btn btn-success" ><CheckCircleOutlineIcon /></button>
                            <button className="btn btn-danger" ><CancelIcon /></button>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                }
            </div>
        )
    }
}