require('../../config.js');
const pgp = require('pg-promise')();
const db = pgp(process.env.DB_URL);

const schemaInfo=`
    DROP TABLE IF EXISTS info;

    CREATE TABLE info(
        id              serial PRIMARY KEY NOT NULL,
        username        text,
        password        text NOT NULL,
        email           text NOT NULL,
        picture         text,
        clubs           text
    );
`;
const schemaPost=`
    DROP TABLE IF EXISTS post;
    CREATE EXTENSION IF NOT EXISTS pg_trgm;

    CREATE TABLE post(
        id              serial PRIMARY KEY NOT NULL,
        title           text,
        content         text,
        startdatetime   text,
        enddatetime     text,
        ticket          text,
        location        text,
        fileurl         text,
        tags            text[],
        touch           integer,
        userid          text,
        mode            boolean,
        club            text
    ); 
    CREATE INDEX post_idx_title ON post USING gin(title gin_trgm_ops);
`;
const schemaClub=`
    DROP TABLE IF EXISTS club;

    CREATE TABLE club(
        id              text,
        userid          text,
        school          text,
        clubname        text NOT NULL,
        facebook        text,
        instagram       text,
        clubpic         text,
        clubpassword    text,
        description     text
    );
`;
const dataSql = `
    -- Populate dummy post
    INSERT INTO post (
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
        club)
    SELECT
        i,
        'word' || i || ' word' || (i+1) || ' word' || (i+2),
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 
        '2017-05-24T10:30',
        '2017-05-24T10:30',
        '0',
        'Mong Ming Wei',
        '52f23066-a8b8-4ad5-941f-b06ac59dc085',
        '{Drama, Food, Competition}',
        0,
        -1,
        true,
        'Pop Dance Club'

    FROM generate_series(1, 20) AS s(i) ORDER BY RANDOM();
    -- Populate dummy clubs
    INSERT INTO club (
        id,
        userid,
        school,
        clubname,
        facebook,
        instagram,
        clubpic,
        clubpassword
    )
    SELECT
        generate_series(1, 3),
        'word' || i || ' word' || (i+1) || ' word' || (i+2),
        'NTHU', 
        'word' || i,
        'facebook' || i,
        'instagram' || i,
        '1681ca51-9b78-4dcd-a319-1512215c2adf',
        '000000'
    FROM generate_series(1, 3) AS s(i);
    INSERT INTO club (
        id,
        userid,
        school,
        clubname,
        facebook,
        instagram,
        clubpic,
        clubpassword
    )
    SELECT
        generate_series(4, 6),
        'word' || i || ' word' || (i+1) || ' word' || (i+2),
        'nctu', 
        'word' || i,
        'facebook' || i,
        'instagram' || i,
        '1681ca51-9b78-4dcd-a319-1512215c2adf',
        '000000'
    FROM generate_series(4, 6) AS s(i);
`;
db.none(schemaInfo).then(() => {
    console.log('info table created');
    return db.none(schemaPost).then(()=>{
        console.log('post table created')
        return
    })

}).then(() =>{
    db.none(schemaClub).then(()=>{
        console.log('club table created')
        pgp.end();
    })
}).catch(err => {
    console.log(process.env.DB_URL);
    console.log('Error creating schema', err);
});
