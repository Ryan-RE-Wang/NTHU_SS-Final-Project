const pgp = require('pg-promise')();
const db = pgp(process.env.DB_URL);


// create information
function create(username, password, email) {

    const sql = `
    INSERT INTO infos ($<this:name>)
    VALUES ($<username>, $<password>, $<email>)
    RETURNING*
    `;
    return db.one(sql, {username, password, email});
;
}
// login
function login(password, email){
    const sql =`
    SELECT * FROM infos
    WHERE password = $<password> AND email = $<email>
    `;
    return db.one(sql, {password,email})
}
function checkInfo(email){
    const sql =`
    SELECT * FROM infos
    WHERE email = $<email>
    `;
    return db.one(sql, {email})
}
function updatePassword(userId, password){
    const sql =`
    UPDATE infos
    SET password = $<password>
    WHERE id = $<userId>
    RETURNING *
    `;
    return db.one(sql,{userId,password})
}
function updateUsername(userId, username){
    const sql =`
    UPDATE infos
    SET username = $<username>
    WHERE id = $<userId>
    RETURNING *
    `;
    return db.one(sql,{userId,username})
}

module.exports(
    create,
    login,
    checkInfo,
    updatePassword,
    updateUsername
)