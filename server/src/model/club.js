if (!global.db) {
    const pgp = require('pg-promise')();
    db = pgp(process.env.DB_URL);
}

function list(id) {
    const where = [];
    if (id)
        where.push(`id ILIKE '%$1:value%'`);
    const sql = `
        SELECT *
        FROM club
        ${where.length ? 'WHERE ' + where.join(' AND ') : ''}
        ORDER BY id DESC
        LIMIT 10
    `;
    return db.any(sql, [id]);
}

function create(id, clubname, facebook, instagram, clubpic, clubpassword) {
    
    const sql = `
        INSERT INTO club
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
}

function updatefacebook(id, facebook){
    const sql =`
    UPDATE info
    SET facebook = $<facebook>
    WHERE id = $<id>
    RETURNING *
    `;
}

function updateinstagram(id, instagram){
    const sql =`
    UPDATE info
    SET instagram = $<instagram>
    WHERE id = $<id>
    RETURNING *
    `;
}

function updateclubpic(id, clubpic){
    const sql =`
    UPDATE info
    SET clubpic = $<clubpic>
    WHERE id = $<id>
    RETURNING *
    `;
}

function updateclubpassword(id, userid, clubname){
    const sql =`
    UPDATE info
    SET clubname = $<clubname>
    WHERE id = $<id>
    RETURNING *
    `;
}

    

module.exports = {
    list,
    create,
    updateClubName,
    updatefacebook,
    updateinstagram,
    updateclubpic,

};