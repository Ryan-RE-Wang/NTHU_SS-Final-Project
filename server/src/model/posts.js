if (!global.db) {
    const pgp = require('pg-promise')();
    db = pgp(process.env.DB_URL);
}

function list(searchText = '', category, date, start) {
    const where = [];
    if (searchText)
        where.push(`text ILIKE '%$1:value%'`);
    if (category)
        where.push(`tag ILIKE '%$1:`)
    if (start)
        where.push('id < $2');
    const sql = `
        SELECT *
        FROM posts
        ${where.length ? 'WHERE ' + where.join(' AND ') : ''}
        ORDER BY id DESC
        LIMIT 10
    `;
    return db.any(sql, [searchText, start]);
}

function create(state, touch) {
    
    const sql = `
        INSERT INTO posts
        VALUES ($<state.id>, $<state.titleValue>, $<state.contentValue>, $<state.startDateValue>, $<state.endDateValue>, $<state.startTimeValue>, $<state.endTimeValue>, $<state.ticketValue>, $<state.locationValue>, $<state.file>, $<state.tags>, $<touch>, $<state.account>)
        RETURNING *
    `;
    return db.one(sql, {state, touch});
}

module.exports = {
    list,
    create
};