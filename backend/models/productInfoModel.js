const connection = require('./connection')
const getProductInfo = async (idProduct) =>{
    try {
        console.log("Oi")
        const query = `
          SELECT product.*
          FROM product
          WHERE product.idProduct = $1
        `
        const productInfo = await connection.query(query, [idProduct])
        console.log("Olha o idProduct: ", idProduct)
        console.log("Olha as linhas: ", productInfo.rows)
        return productInfo.rows
    }
    catch(error){
        console.error('Error after selecting product: ', error)
    }
}

const getAllProductInfo = async () =>{
    try{
        const query = `
          SELECT * 
          FROM product `

          const getAllProductInfo = await connection.query(query)
          console.log("Olha as linhas dos getproductsInfo", getAllProductInfo.row)
          return getAllProductInfo.rows
    }
    catch(error){
        console.error('Error after selecting product: ', error)
    }
}

module.exports = {getProductInfo, getAllProductInfo}