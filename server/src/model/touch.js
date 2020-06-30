if (!global.db) {
    const pgp = require('pg-promise')();
    db = pgp(process.env.DB_URL);
}

function touch(postId) {
    const sql = `
        UPDATE post
        SET touch = touch + 1
        WHERE id = $1
        RETURNING *
    `;
    return db.one(sql, postId);
}

module.exports = {
    touch
};