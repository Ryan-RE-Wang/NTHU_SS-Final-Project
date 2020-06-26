if (!global.db) {
    const pgp = require('pg-promise')();
    db = pgp(process.env.DB_URL);
}

function list(searchText = '', category = '', start = '', userid) {
    const where = [];
    if (searchText)
        where.push(`titleValue ILIKE '%$1:value%'`);
    if (category)
        where.push(`tag ILIKE '%$1:`)
    if (start)
        where.push('startDate <= $2');
    if (userid)
        where.push('')
    const sql = `
        SELECT *
        FROM posts
        ${where.length ? 'WHERE ' + where.join(' AND ') : ''}
        ORDER BY id DESC
        LIMIT 10
    `;
    return db.any(sql, [searchText, category, start]);
}

function create(titleValue,
    contentValue,
    startDateValue,
    startTimeValue,
    endDateValue,
    endTimeValue,
    ticketValue,
    locationValue,
    fileName,
    tags,  
    userId) {
    const touch = 0;
    const sql = `
        INSERT INTO posts
        VALUES ($<id>, $<titleValue>, $<contentValue>, $<startDateValue>, $<endDateValue>, $<startTimeValue>, $<endTimeValue>, $<ticketValue>, $<locationValue>, $<fileName>, $<tags>, $<userId>, $<touch>)
        RETURNING *
    `;
    return db.one(sql,{
        titleValue,
        contentValue,
        startDateValue,
        startTimeValue,
        endDateValue,
        endTimeValue,
        ticketValue,
        locationValue,
        fileName,
        tags,  
        userId, 
        touch
    });
}

function save()

module.exports = {
    list,
    create
};