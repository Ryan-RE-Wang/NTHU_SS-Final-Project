if (!global.db) {
    const pgp = require('pg-promise')();
    db = pgp(process.env.DB_URL);
}

function list(searchText = '', category = '', start = '', mode = null, club = '', order = '', userid = '', startofPost) {
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
        where.push(`club = '$5'`);
    if (userid)
        where.push(`userid = '$6'`);
    if (startofPost)
        where.push(`id < $7`)

    const id1 = (order === '') ?  'id' : order;
    const sql = `
        SELECT *
        FROM post
        ${where.length ? 'WHERE ' + where.join(' AND ') : ''}
        ORDER BY ${id1} ASC
        LIMIT 3
    `;
    return db.any(sql, [searchText, category, start, mode, club, userid]);
}

function create(
    id,
    title,
    content,
    startdatetime,
    enddatetime,
    ticket,
    location,
    fileurl,
    tags,  
    mode,
    club,
    userid) {
    const touch = 0;
    const sql = `
        INSERT INTO post ($<this:name>)
        VALUES ($<id>, $<title>, $<content>, $<startdatetime>, $<enddatetime>, $<ticket>, $<location>, $<fileurl>, $<tags>, $<touch>, $<userid>, $<mode>, $<club>)
    `;
    return db.none(sql,{
        id,
        title,
        content,
        startdatetime,
        enddatetime,
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
    `
    return db.none(sql, {id});
}

function getdetail(id) {
    const sql = `
    SELECT title, content, startdatetime, enddatetime, ticket, location, fileurl, tags, club
    FROM post
    WHERE id = $<id>
    RETURN
    `
    return db.one(sql, {id});
}

function deletepost(id) {
    const sql = `
    DELETE FROM post
    WHERE id = $<id>
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