if (!global.db) {
    const pgp = require('pg-promise')();
    db = pgp(process.env.DB_URL);
}

// function list(searchText = '', category = '', start = '', end = '', mode = null, club = '', order = '', userid = '', startofPost) {
//     const where = [];
//     // var startDateTime = start + 'T00:00';
//     // var endDateTime = end + 'T00:00';
//     if (searchText)
//         where.push(`title ILIKE '%$1:value%'`);
//     if (category)
//         where.push(`tag ILIKE '%$2:'`);
//     if (start && end) 
//         where.push(`startdatetime >= ${start+'T00:00'} AND enddatetime <= ${end+'T00:00'}`);
//     else if (start)
//         where.push(`startdatetime >= ${start+'T00:00'}`);
//     else if (end) 
//         where.push(`enddatetime <= ${end+'T00:00'}`);
//     if (mode)
//         where.push(`mode = $5`);
//     if (club)
//         where.push(`club = '$6'`);
//     if (userid)
//         where.push(`userid = '$7'`);
//     if (startofPost) {
//         where.push(`touch < $8`)
//     }
        

//     const id1 = (order === '') ?  'id' : order;
//     const asc = (order === 'touch') ? 'DESC' : 'ASC';
//     const sql = `
//         SELECT *
//         FROM post
//         ${where.length ? 'WHERE ' + where.join(' AND ') : ''}
//         ORDER BY ${id1} ${asc}
//         LIMIT 8
//     `;
//     return db.any(sql, [searchText, category, start, end, mode, club, userid, startofPost]);
// }


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