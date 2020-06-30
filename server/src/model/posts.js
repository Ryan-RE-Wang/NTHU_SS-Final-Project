if (!global.db) {
    const pgp = require('pg-promise')();
    db = pgp(process.env.DB_URL);
}

function listBySearch(searchText = '', start = '', end = '') {

    let where = [];
    // var startDateTime = start + 'T00:00';
    // var endDateTime = end + 'T00:00';
    if (searchText)
        where.push(`title ILIKE '%$1:value%'`);
    if (start && end) 
        where.push(`startdatetime <= ${start+'T00:00'} AND enddatetime >= ${end+'T00:00'}`);
    else if (start)
        where.push(`startdatetime <= ${start+'T00:00'}`);
    else if (end) 
        where.push(`enddatetime >= ${end+'T00:00'}`);
    
    const sql = `
        SELECT *
        FROM post
        ${where.length ? 'WHERE ' + where.join(' AND ') : ''}
        ORDER BY id ASC
        LIMIT 10
    `;
    return db.any(sql, [searchText, start, end]);
}
function listbyclub(clubname, userid) {
    if (!userid) {
        const sql = `
            SELECT *
            FROM post
            WHERE club = $<clubname>
            ORDER BY startdatetime
            LIMIT 12
        `;
        return db.any(sql, {clubname});
    }

    else {
        const sql = `
            SELECT *
            FROM post
            WHERE club = $<clubname> AND userid = $<userid>
            ORDER BY startdatetime
            LIMIT 12
        `;
        return db.any(sql, {clubname, userid});
    }
}
function listbyTouch(){
    const sql = `
        SELECT * FROM post
        ORDER BY touch DESC
        LIMIT 12
    `;
    
    return db.any(sql);
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
    SELECT *
    FROM post
    WHERE id = $<id>
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

function listByCategory(category='',order=''){
    let odr;
    if(order === 'AZ'){
        odr = 'title';
    }else if(order === 'Date'){
        odr = 'startdatetime';
    }else if(order === 'Popularity'){
        odr = 'touch';
    }
    console.log(odr);

    if(category==='ALL'){
        const sql=`
        SELECT * FROM post 
        ORDER BY ${odr}
        `;
        return db.any(sql);
    }else {
        const sql=`
        SELECT * FROM post 
        WHERE $<category> = ANY(tags)
        ORDER BY ${odr}
        `;
        return db.any(sql,{odr,category});
    }

}

module.exports = {
    listBySearch,
    listbyclub,
    create,
    getdetail,
    deletepost,
    listByCategory,
    listbyTouch
};