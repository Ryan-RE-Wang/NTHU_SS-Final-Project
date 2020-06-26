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

module.exports = {
    list,
    create
};