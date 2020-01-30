const userCtrl = {};
const UserModel = require('../models/User');

userCtrl.getUsers = async (req, res) => {
    const users = await UserModel.find();
    res.json(users);
}

userCtrl.createUser = async(req, res) => {
    const { names, lastnames, documentType, idUser, password, code, birthdate, genre, phone, mail, eps, rh, arl, allergy, allergyAns, nameParent, phoneParent, parent, question1, question1Ans, question2, question2Ans, question3, question3Ans, question4, question4Ans, question5, question5Ans, question6, question7, question8, question9, question10, medicines, indicatedDose, question11, question11Ans, question12, question12Ans, timeWeek, hours, minutes, lastTime, health, conditioning, lose, recreation, increasedMuscle, sports} = req.body;
    const newUser = new UserModel({
        names: names,
        lastnames: lastnames,
        documentType: documentType,
        idUser: idUser,
        password: password,
        code: code,
        birthdate: birthdate,
        genre: genre,
        phone: phone,
        mail: mail,
        eps: eps,
        rh: rh,
        arl: arl,
        allergy: allergy,
        allergyAns: allergyAns,
        nameParent: nameParent,
        phoneParent: phoneParent,
        parent: parent,
        question1: question1,
        question1Ans: question1Ans,
        question2: question2,
        question2Ans: question2Ans,
        question3: question3,
        question3Ans: question3Ans,
        question4: question4,
        question4Ans: question4Ans,
        question5: question5,
        question5Ans: question5Ans,
        question6: question6,
        question7: question7,
        question8: question8,
        question9: question9,
        question10: question10,
        medicines: medicines,
        indicatedDose: indicatedDose,
        question11: question11,
        question11Ans: question11Ans,
        question12: question12,
        question12Ans: question12Ans,
        timeWeek: timeWeek,
        hours: hours,
        minutes: minutes,
        lastTime: lastTime,
        health: health,
        conditioning: conditioning,
        lose: lose,
        recreation: recreation,
        increasedMuscle: increasedMuscle,
        sports: sports
    })
    await newUser.save();
}

userCtrl.getUser = async (req, res) => {
    const user = await UserModel.find({"idUser":req.params.idUser});
    res.json(user)
}

userCtrl.updateUser = async(req, res) => {
    const {names, lastnames, documentType, idUser, password, code, birthdate, genre, phone, mail, eps, rh, arl, allergy, allergyAns, nameParent, phoneParent, parent, question1, question1Ans, question2, question2Ans, question3, question3Ans, question4, question4Ans, question5, question5Ans, question6, question7, question8, question9, question10, medicines, indicatedDose, question11, question11Ans, question12, question12Ans, timeWeek, hours, minutes, lastTime, health, conditioning, lose, recreation, increasedMuscle, sports} = req.body;
    await UserModel.findOneAndUpdate(req.params.id, {
        names: names,
        lastnames: lastnames,
        documentType: documentType,
        idUser: idUser,
        password: password,
        code: code,
        birthdate: birthdate,
        genre: genre,
        phone: phone,
        mail: mail,
        eps: eps,
        rh: rh,
        arl: arl,
        allergy: allergy,
        allergyAns: allergyAns,
        nameParent: nameParent,
        phoneParent: phoneParent,
        parent: parent,
        question1: question1,
        question1Ans: question1Ans,
        question2: question2,
        question2Ans: question2Ans,
        question3: question3,
        question3Ans: question3Ans,
        question4: question4,
        question4Ans: question4Ans,
        question5: question5,
        question5Ans: question5Ans,
        question6: question6,
        question7: question7,
        question8: question8,
        question9: question9,
        question10: question10,
        medicines: medicines,
        indicatedDose: indicatedDose,
        question11: question11,
        question11Ans: question11Ans,
        question12: question12,
        question12Ans: question12Ans,
        timeWeek: timeWeek,
        hours: hours,
        minutes: minutes,
        lastTime: lastTime,
        health: health,
        conditioning: conditioning,
        lose: lose,
        recreation: recreation,
        increasedMuscle: increasedMuscle,
        sports: sports
    });
    res.json({message:'User updated'}) 
}

userCtrl.deleteUser = async(req, res) => {
    await UserModel.findByIdAndDelete(req.params.id);
    res.json({message:'User deleted'}) 
}

module.exports = userCtrl;