module.exports = function(conn) {
  var query = sqlQuery=>new Promise((resolve,reject)=>{
    conn.query(sqlQuery, (err,res)=>
  {
    if (err) reject(err)
      conn.commit(error=>error ? reject('err'): resolve('res'))
  })

});

return{
  editRealtor: (name, address)=>query(`UPDATE REALTORS SET ADDRESS='${address}' WHERE FULL_NAME='${name}'`),
  createClients: (name,address,dob,email,home_phone, mobile_phone, passport_series, passport_number, doi, pia)=>conn.querySync(
    `INSERT INTO CLIENTS(FULL_NAME, ADDRESS, DATE_OF_BIRTH, EMAIL, HOME_PHONE, MOBILE_PHONE, PASSPORT_SERIES, PASSPORT_NUMBER, DATE_OF_ISSUE, PASSPORT_ISSUING_AUTHORITY) VALUES('${name}','${address}','${dob}','${email}','${home_phone}', '${mobile_phone}', '${passport_series}', '${passport_number}', '${doi}', '${pia}')`
  ),
  detailFlat: ()=>conn.querySync(`SELECT * FROM APARTMENTS A`).fetchSync('all',true),
  fltasRealtor: (id)=>conn.querySync(`SELECT * FROM APARTMENTS A where ID_REALTOR='${id}'`).fetchSync('all',true),
  Client: (id)=>conn.querySync(`SELECT * FROM CLIENTS WHERE ID_CLIENT='${id}'`).fetchSync('all',true),
  editClients: (id,name,address,dob,email,home_phone, mobile_phone, passport_series, passport_number, doi, pia)=>conn.querySync(
    `UPDATE CLIENTS SET FULL_NAME='${name}', ADDRESS='${address}',DATE_OF_BIRTH='${dob}',EMAIL='${email}',HOME_PHONE='${home_phone}', MOBILE_PHONE='${mobile_phone}', PASSPORT_SERIES='${passport_series}', PASSPORT_NUMBER='${passport_number}', DATE_OF_ISSUE='${doi}', PASSPORT_ISSUING_AUTHORITY='${pia}' WHERE ID_CLIENT='${id}'`
  ),
  flats: (id)=>conn.querySync(`SELECT DISTINCT A.ID_APARTMENT, A.PRICE, A.TYPE_OF_HOUSE, A.DISTRICT, A.ADDRESS, A.NUMBER_OF_ROOMS, A.LIVING_SPACE, A.FLOOR FROM APARTMENTS A, CLIENTS C WHERE A.ID_APARTMENT='${id}'`).fetchSync('all',true),
  owner: (id) =>conn.querySync(`SELECT C.FULL_NAME, C.ADDRESS, C.DATE_OF_BIRTH, C.EMAIL, C.HOME_PHONE, C.MOBILE_PHONE, C.PASSPORT_SERIES, C.PASSPORT_NUMBER, C.DATE_OF_ISSUE, C.PASSPORT_ISSUING_AUTHORITY FROM CLIENTS C, APARTMENTS A WHERE A.ID_APARTMENT='${id}' AND A.ID_OWNER=C.ID_CLIENT`).fetchSync('all',true),
  idRealtor: (name) =>conn.querySync(`SELECT ID_REALTOR FROM REALTORS WHERE FULL_NAME='${name}'`).fetchSync('all',true),
  buy: (ida, buyer, name, date) => conn.querySync(`INSERT INTO CONTRACTS(ID_APARTMENT, ID_BUYER, ID_REALTOR, DATE_OF_CONCLUSION) VALUES('${ida}','${buyer}','${name}','${date}')`)
}

}
