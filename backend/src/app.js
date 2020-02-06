const express = require('express');
const app = express();
const path = require('path')
const cors = require('cors');
const bodyParser = require('body-parser')

app.set('port', process.env.PORT || 4000);

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const staticRoute = path.join(__dirname, '/images')

app.use('/sources', express.static(staticRoute))

app.use('/api/admins', require('./routes/admins'));
app.use('/api/ubications', require('./routes/ubications'));
app.use('/api/acepteds', require('./routes/usersAcpeted'));
app.use('/api/gyms', require('./routes/gyms'));
app.use('/api/epss', require('./routes/eps'));
app.use('/api/arls', require('./routes/arls'));
app.use('/api/parents', require('./routes/parents'));
app.use('/api/adminlogin', require('./routes/loginAdmin'));
app.use('/api/userlogin', require('./routes/loginUser'));
app.use('/api/trainerlogin', require('./routes/loginTrainer'));
app.use('/api/gymTrainer', require('./routes/gymsTrainers'));
app.use('/api/usersRoutines', require('./routes/usersRoutines'));
app.use('/api/enterGym', require('./routes/enterGym'));
app.use('/api/reports', require('./routes/reports'));
app.use('/api/routines', require('./routes/routines'));
app.use('/api/trainers', require('./routes/trainers'));
app.use('/api/users', require('./routes/users'));

module.exports = app;
