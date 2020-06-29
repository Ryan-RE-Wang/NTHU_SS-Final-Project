if (!global.db) {
    const pgp = require('pg-promise')();
    db = pgp(process.env.DB_URL);
}

function listbyclub(clubname, userid) {

    if (!userid) {
        const sql = `
            SELECT *
            FROM post
            WHERE club = $1
            ORDER BY startdatetime
            LIMIT 12
        `;
        return db.any(sql, [clubname, userid]);
    }

    else {
        const sql = `
            SELECT *
            FROM post
            WHERE club = $1 AND userid = $2
            ORDER BY startdatetime
            LIMIT 12
        `;
        return db.any(sql, [clubname, userid]);
    }
    
}

function create(
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
        VALUES ($<title>, $<content>, $<startdatetime>, $<enddatetime>, $<ticket>, $<location>, $<fileurl>, $<tags>, $<touch>, $<userid>, $<mode>, $<club>)
    `;
    return db.none(sql,{
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
    listbyclub,
    create,
    getdetail,
    deletepost
};