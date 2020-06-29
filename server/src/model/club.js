if (!global.db) {
    const pgp = require('pg-promise')();
    db = pgp(process.env.DB_URL);
}

function list(school) {
    console.log(school)
    const sql = `
        SELECT *
        FROM club
        WHERE school = $<school>
        LIMIT 10
    `;
    return db.any(sql, {school});
}

function getClubdetail(clubname) {
    const sql = `SELECT * FROM club WHERE clubname = $<clubname>`;
    return db.one(sql, {clubname});
}
function getClubUserEmail(userId){
    const sql = `SELECT email FROM club WHERE userId = $<userId>`;
    return db.one(sql,{userId});
}

function create(id, userid, school, clubname, facebook, instagram, clubpic, clubpassword, description) {
    
    const sql = `
        INSERT INTO club ($<this:name>)
        VALUES ($<id>, $<userid>, $<school>, $<clubname>, $<facebook>, $<instagram>, $<clubpic>, $<clubpassword>, $<description>)
        RETURNING *
    `;
    return db.one(sql, {id, userid, school, clubname, facebook, instagram, clubpic, clubpassword, description});
}

function updateClubName(id, clubname){
    const sql =`
    UPDATE club
    SET clubname = $<clubname>
    WHERE id = $<id>
    RETURNING *
    `;

    return db.one(sql, {id, clubname});
}

function updatefacebook(id, facebook){
    const sql =`
    UPDATE club
    SET facebook = $<facebook>
    WHERE id = $<id>
    RETURNING *
    `;
    return db.one(sql, {id, facebook});
}

function updateinstagram(id, instagram){
    const sql =`
    UPDATE club
    SET instagram = $<instagram>
    WHERE id = $<id>
    RETURNING *
    `;
    return db.one(sql, {id, instagram});
}

function updateclubpic(id, clubpic){
    const sql =`
    UPDATE club
    SET clubpic = $<clubpic>
    WHERE id = $<id>
    RETURNING *
    `
    return db.one(sql, {id, clubpic});
}

function updateclubpassword(id, userid, oldpassword, newpassword){
    const sql =`
    UPDATE club
    SET clubpassword = $<newpassword>
    WHERE id = $<id> AND userid = $<userid> AND clubpassword = $<oldpassword>
    RETURNING *
    `;
    return db.one(sql, {id, userid, oldpassword, newpassword});
}

function updatesavemode(id, savemode) {
    const sql =`
    UPDATE club
    SET savemode = $<savemode>
    WHERE id = $<id>
    RETURNING *
    `;
    return db.one(sql, {id, savemode});
}

function updateleader(id, userid, clubpassword, newuserid) {
    const sql =`
    UPDATE club
    SET userid = $<newuserid>
    WHERE id = $<id> AND userid = $<userid> AND clubpassword = $<clubpassword>
    RETURNING *
    `;
    return db.one(sql, {id, userid, clubpassword, newuserid});
}

module.exports = {
    list,
    getClubdetail,
    getClubUserEmail,
    create,
    updateClubName,
    updatefacebook,
    updateinstagram,
    updateclubpic,
    updateclubpassword,
    updatesavemode,
    updateleader
};