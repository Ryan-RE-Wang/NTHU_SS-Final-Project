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

function create(id, clubName, facebook, instagram, clubPic, clubPassword) {
    
    const sql = `
        INSERT INTO club
        VALUES ($<id>, $<clubName>, $<facebook>, $<instagram>, $<clubPic>, $<clubPassword>)
        RETURNING *
    `;
    return db.one(sql, {id, clubName, facebook, instagram, clubPic, clubPassword});
}

module.exports = {
    list,
    create
};