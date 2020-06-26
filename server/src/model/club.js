if (!global.db) {
    const pgp = require('pg-promise')();
    db = pgp(process.env.DB_URL);
}

function list(id) {
    const sql = `
        SELECT *
        FROM club
        WHERE id = $<id>
        ORDER BY id DESC
        LIMIT 10
    `;
    return db.one(sql, {id});
}

function create(id, clubname, facebook, instagram, clubpic, clubpassword) {
    
    const sql = `
        INSERT INTO club ($<this:name>)
        VALUES ($<id>, $<clubname>, $<facebook>, $<instagram>, $<clubpic>, $<clubpassword>)
        RETURNING *
    `;
    return db.one(sql, {id, clubname, facebook, instagram, clubpic, clubpassword});
}

function updateClubName(id, clubname){
    const sql =`
    UPDATE info
    SET clubname = $<clubname>
    WHERE id = $<id>
    RETURNING *
    `;

    return db.one(sql, {clubname});
}

function updatefacebook(id, facebook){
    const sql =`
    UPDATE info
    SET facebook = $<facebook>
    WHERE id = $<id>
    RETURNING *
    `;
    return db.one(sql, {facebook});
}

function updateinstagram(id, instagram){
    const sql =`
    UPDATE info
    SET instagram = $<instagram>
    WHERE id = $<id>
    RETURNING *
    `;
    return db.one(sql, {instagram});
}

function updateclubpic(id, clubpic){
    const sql =`
    UPDATE info
    SET clubpic = $<clubpic>
    WHERE id = $<id>
    RETURNING *
    `
    return db.one(sql, {clubpic});
}

function updateclubpassword(id, userid, clubname){
    const sql =`
    UPDATE info
    SET clubname = $<clubname>
    WHERE id = $<id> AND userid = $<userid>
    RETURNING *
    `;
    return db.one(sql, {userid, clubname});
}

module.exports = {
    list,
    create,
    updateClubName,
    updatefacebook,
    updateinstagram,
    updateclubpic,
    updateclubpassword
};