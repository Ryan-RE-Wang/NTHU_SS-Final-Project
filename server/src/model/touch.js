if (!global.db) {
    const pgp = require('pg-promise')();
    db = pgp(process.env.DB_URL);
}
const postModel = require('./posts.js');

function touch(postId) {
    const sql = `
        UPDATE posts
        SET touch = touch + 1
        WHERE id = $1
        RETURNING *
    `;
    return db.one(sql, postId);
}

module.exports = {
    touch
};