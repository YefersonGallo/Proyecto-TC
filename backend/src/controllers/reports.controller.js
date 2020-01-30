const reportsCtrl = {};
const GymUserModel = require('../models/EnterGym');
const UserRoutines = require('../models/UserRoutines');
const Gyms = require('../models/Gym');

reportsCtrl.getEntersByMonth = async (req, res) => {
    const enters = await GymUserModel.find();
    var report = countMonths(enters)
    res.json(report);
}

reportsCtrl.getEntersByGym = async (req, res) =>{
    const gyms = await Gyms.find();
    const enters = await GymUserModel.find();
    var report = getGyms(gyms, enters)
    res.json(report);
}

function getGyms(gyms, enters) {
    var report = []
    for (let index = 0; index < gyms.length; index++) {
        const element = gyms[index];
        report.push(getUserByGym(element.code, enters))
    }
    return report
}

function getUserByGym(gym, enters) {
    var report = [gym, 0]
    for (let index = 0; index < enters.length; index++) {
        const element = enters[index];
        if(element.codeGym === gym){
            report[1] +=  1;
        }
    }
    return report
    
}

function countMonths(enters) {
    var report = [["Enero", 0], ["Febrero", 0], ["Marzo", 0], ["Abril", 0], ["Mayo", 0], ["Junio", 0], ["Julio", 0], ["Agosto", 0], ["Septiembre", 0], ["Octubre", 0], ["Noviembre", 0], ["Diciembre", 0]]
    for (let index = 0; index < enters.length; index++) {
        const element = enters[index];
        switch (element.createdAt.getMonth()) {
            case 0:
                report[0][1] = report[0][1] +1
                break;
            case 1:
                report[1][1] = report[1][1] + 1
                break;
            case 2:
                report[2][1] = report[2][1] + 1
                break;
            case 3:
                report[3][1] = report[3][1] + 1
                break;
            case 4:
                report[4][1] = report[4][1] + 1
                break;
            case 5:
                report[5][1] = report[5][1] + 1
                break;
            case 6:
                report[6][1] = report[6][1] + 1
                break;
            case 7:
                report[7][1] = report[7][1] + 1
                break;
            case 8:
                report[8][1] = report[8][1] + 1
                break;
            case 9:
                report[9][1] = report[9][1] + 1
                break;
            case 10:
                report[10][1] = report[10][1] + 1
                break;
            case 11:
                report[11][1] = report[11][1] + 1
                break;
            default:
                break;
        }
    }
    return report
}

module.exports = reportsCtrl;