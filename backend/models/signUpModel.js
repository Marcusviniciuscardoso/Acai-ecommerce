const connection = require('./connection')

const getSignUp = async (idUser) =>{
    try {
        console.log("Oi")
        const query = `
          SELECT userr.nameuser, userr.surnameuser, userr.emailuser, userr.birthdayuser
          FROM userr
          WHERE idUser = $1
        `
        const userInfo = await connection.query(query, [idUser])
        console.log("Olha o idUser: ", idUser)
        console.log("Olha as linhas: ", userInfo.rows)
        return userInfo.rows
    }
    catch(error){
        console.error('Error after selecting user: ', error)
    }
}

module.exports = {getSignUp}