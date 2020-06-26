if (!global.db) {
    const pgp = require('pg-promise')();
    db = pgp(process.env.DB_URL);
}

// create information
function create(username, password, email) {

    const sql = `
    INSERT INTO info ($<this:name>)
    VALUES ($<username>, $<password>, $<email>)
    RETURNING*
    `;
    return db.one(sql, {username, password, email});
;
}
// login
function login(password, email){
    const sql =`
    SELECT * FROM info
    WHERE password = $<password> AND email = $<email>
    `;
    return db.one(sql, {password,email})
}
function checkInfo(email){
    const sql =`
    SELECT * FROM info
    WHERE email = $<email>
    `;
    return db.one(sql, {email})
}
function updatePassword(userId, newpassword, oldpassword){
    const sql =`
    UPDATE info
    SET password = $<newpassword>
    WHERE id = $<userId> AND password = $<oldpassword>
    RETURNING *
    `;
    return db.one(sql,{userId,newpassword,oldpassword})
}
function updateUsername(userId, username){
    const sql =`
    UPDATE info
    SET username = $<username>
    WHERE id = $<userId>
    RETURNING *
    `;
    return db.one(sql,{userId,username})
}

module.exports = {
    create,
    login,
    checkInfo,
    updatePassword,
    updateUsername
};
