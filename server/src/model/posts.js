if (!global.db) {
    const pgp = require('pg-promise')();
    db = pgp(process.env.DB_URL);
}

function list(searchText = '', category = '', start = '', mode = null, club = '', order) {
    const where = [];
    if (searchText)
        where.push(`titleValue ILIKE '%$1:value%'`);
    if (category)
        where.push(`tag ILIKE '%$2:'`);
    if (start)
        where.push(`startDate <= $3`);
    if (mode)
        where.push(`mode = $4`);
    if (club)
        where.push(`club = $5`);

    const sql = `
        SELECT *
        FROM posts
        ${where.length ? 'WHERE ' + where.join(' AND ') : ''}
        ORDER BY $<order> ASC
        LIMIT 10
    `;
    return db.any(sql, [searchText, category, start, mode, club, order]);
}

function create(
    id,
    title,
    content,
    startdate,
    starttime,
    enddate,
    endtime,
    ticket,
    location,
    fileurl,
    tags,  
    mode,
    club,
    userid) {
    const touch = 0;
    const sql = `
        INSERT INTO posts
        VALUES ($<id>, $<title>, $<content>, $<startdate>, $<enddate>, $<starttime>, $<endtime>, $<ticket>, $<location>, $<fileurl>, $<tags>, $<touch>, $<userid>, $<mode>, $<club>)
        RETURNING *
    `;
    return db.one(sql,{
        id,
        title,
        content,
        startdate,
        starttime,
        enddate,
        endtime,
        ticket,
        location,
        fileurl,
        tags, 
        touch, 
        userid,
        mode,
        club
    });
}

function createTouch(id) {
    const sql = `
    UPDATE post
    SET touch = touch + 1
    WHERE id = $<id>
    RETURNING *
    `
    return db.none(sql, {id});
}

function getdetail(id) {
    const sql = `
    SELECT title, content, startdate, enddate, starttime, endtime, ticket, location, fileurl, tags, club
    FROM post
    WHERE id = $<id>
    RETURNING *
    `
    return db.one(sql, {id});
}

function deletepost(id) {
    const sql = `
    DELETE FROM post
    WHERE id = $<id>
    RETURNING *
    `
    return db.none(sql, {id});
}


module.exports = {
    list,
    create,
    createTouch,
    getdetail,
    deletepost
};